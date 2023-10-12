import React from 'react'
import PhotoById from './PhotoById'

const PhotoDetailsPage = ({ params }: { params: { id: number } }) => {
    const idParams: number = params.id;
    return (
        <>
            <div className="container mx-auto h-full py-5">
                <PhotoById idParams={idParams} />
            </div>
        </>
    )
}

export default PhotoDetailsPage