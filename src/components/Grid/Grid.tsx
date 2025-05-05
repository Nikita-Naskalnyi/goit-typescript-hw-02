import React, { ReactNode, forwardRef } from "react";
import s from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
}

const Grid = forwardRef<HTMLUListElement, GridProps>(({ children }, ref) => {
  return (
    <ul ref={ref} className={s.gridContainer}>
      {children}
    </ul>
  );
});

export default Grid;
