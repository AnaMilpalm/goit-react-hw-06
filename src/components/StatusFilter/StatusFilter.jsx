import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

import { useSelector } from "react-redux";

export const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);
  return (
    <div className={css.wrapper}>
      <button>All {filter === "all" && "is active"}</button>
      <button>Active {filter === "active" && "is active"}</button>
      <button>Completed {filter === "completed" && "is active"}</button>
    </div>
  );
};
