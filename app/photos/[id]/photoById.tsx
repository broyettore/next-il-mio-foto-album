'use client'
import React, { useEffect, useState } from 'react';
import { Photo } from '@/app/Components/Interfaces/Interfaces';

interface Props {
  idParams: number
}

const PhotoById = ({ idParams }: Props) => {

  // Photo
  const [photo, setPhoto] = useState<Photo | null>(null);

  // Get photo by id
  useEffect(() => {
    const fetchPhotoById = async () => {
      try {
        const response = await fetch(`https://localhost:7085/api/Photos/GetPhotoById/${idParams}`);
        const fetchedPhoto = await response.json();
        setPhoto(fetchedPhoto);

      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhotoById();
  }, [idParams]);

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
    </>
  )
}

export default PhotoById