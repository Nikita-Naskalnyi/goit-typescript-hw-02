import { RingLoader } from "react-spinners";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.backdrop}>
      <RingLoader color="#36d7b7" size={100} />
    </div>
  );
};

export default Loader;
