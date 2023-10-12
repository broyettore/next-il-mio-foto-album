'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Photo } from '@/app/Components/Interfaces/Interfaces';

interface Props {
  idParams: number
}

const PhotoById = ({ idParams }: Props) => {
  //router
  const router = useRouter();

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

  // redirect to update form
  const handleUpdatePizza = () => {
    router.push(`/photos/update/${idParams}`);
  };

  // deletes photo by id
  const deletePhotoById = async () => {
    try {
      if (photo) {
        const response = await fetch(`https://localhost:7085/api/Photos/Delete/${idParams}`, {
          method: 'DELETE',
        });

        if(response.ok) {
          console.log("Photo was deleted successfully")
          router.push("/photos");
        } else {
          console.error("Failed to delete the photo");
        }
      }
    } catch (error) {
      console.error("an error has occurred:", error)
    }
  };

  return (
    <>
    {photo ? (
      <div>
      <div className="img-ctn mb-5">
        <img src={photo.imageSrc} alt={photo.title} className='detailPage-img'/>
      </div>
      <h2 className='my-1'>Title: {photo.title}</h2>
      <p>Description: {photo.description}</p>
      <p>Category: {photo.categories.id}</p>
      <div className="btn-ctn">
        <button onClick={handleUpdatePizza} className="btn btn-info mr-2">
          Update
        </button>
        <button onClick={deletePhotoById} className="btn btn-danger mt-5">
          Delete
        </button>
      </div>
    </div>
    ) : (
      <p>Not Found...</p>
    )}
    </>
  )
}

export default PhotoById