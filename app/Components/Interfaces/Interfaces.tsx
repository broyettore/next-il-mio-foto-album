export interface Photo {

    id: number,
    title: string,
    description: string,
    isVisible: boolean,
    imageUrl: null,
    imageFile: string,
    imageSrc: string,
    categories: Category
}

export interface Category {
    id: number,
    name: string
}
