import Description from "../Description/Description";
import s from "./ImageGalleryCard.module.css";
import { Photo } from "../../types";

interface Props {
  picture: Photo;
  openModal: (image: Photo) => void;
}

const ImageGalleryCard: React.FC<Props> = ({ picture, openModal }) => {
  return (
    <li>
      <div className={s.imageWrapper}>
        <img
          onClick={() =>
            openModal({
              ...picture,
              src: picture.urls.regular,
              alt: picture.alt_description,
            })
          }
          src={picture.urls.small}
          alt={picture.alt_description}
        />
        <Description picture={picture} />
      </div>
    </li>
  );
};

export default ImageGalleryCard;
