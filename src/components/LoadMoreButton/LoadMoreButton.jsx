import s from "./LoadMoreButton.module.css";
const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
