'use client'
import React, { useState, useEffect, FormEvent } from 'react';
import { Photo } from '@/app/Components/Interfaces/Interfaces';

interface Props {
  idParams: number;
}

const PhotoById: React.FC<Props> = ({ idParams }) => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [email, setEmail] = useState('');
  const [msgContent, setMsgContent] = useState('');

  useEffect(() => {
    const fetchPhotoById = async () => {
      try {
        const response = await fetch(`https://localhost:7085/api/Photos/GetPhotoById/${idParams}`);
        if (response.ok) {
          const fetchedPhoto = await response.json();
          setPhoto(fetchedPhoto);
        } else {
          console.error('Error fetching photo:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhotoById();
  }, [idParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const messageData = {
      email,
      msgContent
    };
  
    try {
      const response = await fetch(`https://localhost:7085/api/Messages/Create/${idParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
      });
  
      if (!response.ok) {
        const errorText = await response.text();  // Get the error text if available
        console.error('Error sending message. HTTP Status:', response.status, ' - ', errorText);
      } else {
        console.log('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  
  

  return (
    <>
      {photo ? (
        <div>
          <h2 className='my-2 text-2xl mb-5'><span className='font-semibold'>Title:</span> {photo.title}</h2>
          <div className="img-ctn mb-5">
            <img src={photo.imageSrc} alt={photo.title} className='detailPage-img' />
          </div>
          <p className='my-2 text-lg'><span className='font-semibold'>Description:</span> {photo.description}</p>
          <p className='my-2 text-lg'>
            <span className='font-semibold'>Category:</span>{" "}
            {photo.categories.map((cat, index) => (
              <span key={cat.id}>
                {cat.name}
                {index < photo.categories.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      ) : (
        <p>Not Found...</p>
      )}

      {/* Message Form */}
      <div>
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="msgContent">Message Content:</label>
            <textarea
              id="msgContent"
              value={msgContent}
              onChange={(e) => setMsgContent(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default PhotoById;
