export interface Photo {

    id: number,
    title: string,
    description: string,
    isVisible: boolean,
    imageUrl: null,
    imageFile: string,
    imageSrc: string,
    userId: number,
    categories: Category[]
}

export interface Category {
    id: number,
    name: string
    photos: Photo[],
}
