export interface Photo {
  id: string;
  alt_description: string;
  likes: number;
  user: {
    first_name: string;
  };
  urls: {
    small: string;
    regular: string;
  };
  src?: string;
  alt?: string;
}

export interface ErrorResponse {
  message: string;
}
