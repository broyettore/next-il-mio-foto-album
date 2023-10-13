export interface Photo {
    id: number,
    title: string,
    description: string,
    isVisible: boolean,
    imageUrl: null,
    imageFile: string,
    imageSrc: string,
    userId: number,
    categories: Category[],
    messages: Message[];
}

export interface Category {
    id: number,
    name: string
    photos: Photo[],
}

export interface Message {
    id: number;
    email: string;
    msgContent: string;
    photoId: number;
    photo: Photo;
  }
