'use client'
import React, { useEffect, useState } from 'react';
import { Photo } from '../Components/Interfaces/Interfaces';
import Link from 'next/link';
import SearchBar from '../Components/Main/SearchBar';
import styles from './Allphotos.module.css'

const Allphotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(' ');

  // Fetch all photos with api call
  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://localhost:7085/api/photos/GetPhotos");
      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      const fetchedPhotos = await response.json();
      console.log('Photos:', fetchedPhotos);
      setPhotos(fetchedPhotos); // update the state with the fecthed photos
    }
    catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  // filters photos by title
  const filteredPhotos = photos.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));


  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      <div className="container flex justify-between flex-wrap p-5">
        {filteredPhotos.map((p) => (
          <Link href={`/photos/${p.id}`} key={p.id} className={styles.myArticle}>
            <article>
              <figure>
                <img src={p.imageSrc} className={styles.msImg} alt={p.title} />
                </figure>
              <div className="py-3 px-3">
                <h2 className="card-title">{p.title}</h2>
                <p className='my-3'>{p.description.slice(0, 120)}...</p>
                <div className="card-actions">
                  <Link href={`/photos/${p.id}`} className="btn btn-primary hover:scale-110">Read More...</Link>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Allphotos
