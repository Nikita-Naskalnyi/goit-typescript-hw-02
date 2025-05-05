import ImageGalleryCard from "../ImageGalleryCard/ImageGalleryCard";
import Grid from "../Grid/Grid";
import { useEffect, useRef } from "react";
import { Photo } from "../../types";

interface ImageGalleryProps {
  pictures: Photo[];
  openModal: (image: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ pictures, openModal }) => {
  const galleryRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lastItem = galleryRef.current.lastElementChild as HTMLElement;
      const height = lastItem?.getBoundingClientRect().height || 0;
      if (pictures.length > 12) {
        window.scrollBy({ top: height * 1.8, behavior: "smooth" });
      }
    }
  }, [pictures]);

  return (
    <Grid ref={galleryRef}>
      {pictures.map((picture) => (
        <ImageGalleryCard
          openModal={openModal}
          key={picture.id}
          picture={picture}
        />
      ))}
    </Grid>
  );
};

export default ImageGallery;
