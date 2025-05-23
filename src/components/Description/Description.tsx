import s from "./Description.module.css";
import { Photo } from "../../types";

interface DescriptionProps {
  picture: Photo;
}

const Description: React.FC<DescriptionProps> = ({ picture }) => {
  return (
    <div className={s.descriptionWrapper}>
      <p className={s.descriptionText}>
        Description:{" "}
        <span className={s.descriptionSpan}>{picture.alt_description}</span>
      </p>
      <p className={s.descriptionText}>
        Likes: <span className={s.descriptionSpan}>{picture.likes}</span>
      </p>
      <p className={s.descriptionText}>
        Author:{" "}
        <span className={s.descriptionSpan}>{picture.user.first_name}</span>
      </p>
    </div>
  );
};

export default Description;
