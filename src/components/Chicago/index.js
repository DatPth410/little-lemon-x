import { Grid } from "@mui/material";
import cn from "classnames/bind";
import Button from "../Button";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const cx = cn.bind(styles);

const Chicago = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container className={cx("container")}>
        <Grid xs="2.5" item></Grid>
        <Grid xs="7" container item>
          <Grid container item xs="12">
            <Grid item xs="4" className={cx("container-left")}>
              <span className={cx("container-left-title")}>Little Lemon</span>
              <span className={cx("container-left-subtitle")}>Chicago</span>
              <span className={cx("container-left-content")}>
                We are family owned Mediterranean restaurant, focused on
                traditional recipes reserved with a modern twist.{" "}
              </span>
              <Button
                content="Reserve a table"
                onClick={() => navigate("/booking")}
              />
            </Grid>
            <Grid item xs="3"></Grid>
            <Grid item xs="5" className={cx("container-right-container")}>
              <div
                className={cx("container-right")}
                style={{ backgroundImage: "url(/images/food.jpg)" }}
              ></div>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs="2.5" item></Grid>
      </Grid>
    </>
  );
};

export default Chicago;
