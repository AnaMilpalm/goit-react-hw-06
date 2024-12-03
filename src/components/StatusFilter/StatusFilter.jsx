import css from "./StatusFilter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <button onClick={() => handleFilterChange("all")}>
        All {filter === "all" && "is active"}
      </button>
      <button onClick={() => handleFilterChange("active")}>
        Active {filter === "active" && "is active"}
      </button>
      <button onClick={() => handleFilterChange("completed")}>
        Completed {filter === "completed" && "is active"}
      </button>
    </div>
  );
};
