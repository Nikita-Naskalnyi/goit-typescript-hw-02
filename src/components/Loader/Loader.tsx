import { RingLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.backdrop}>
      <RingLoader />
    </div>
  );
};

export default Loader;
