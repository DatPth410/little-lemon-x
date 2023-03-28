import { Grid } from "@mui/material";
import cn from "classnames/bind";
import styles from "./index.module.scss";

const cx = cn.bind(styles);

const Nav = () => {
  return (
    <>
      <Grid container>
        <Grid xs="2.5" item></Grid>
        <Grid xs="7" container item>
          <Grid container className={cx("container")}>
            <Grid item xs="4">
              <img src="/images/logo.png" className={cx("logo")} />
            </Grid>
            <Grid item xs="1" className={cx("container-item")}>
              Home
            </Grid>
            <Grid item xs="1" className={cx("container-item")}>
              About
            </Grid>
            <Grid item xs="1" className={cx("container-item")}>
              Menu
            </Grid>
            <Grid item xs="2" className={cx("container-item")}>
              Reservations
            </Grid>
            <Grid item xs="2" className={cx("container-item")}>
              Order Online
            </Grid>
            <Grid item xs="1" className={cx("container-item")}>
              Login
            </Grid>
          </Grid>
        </Grid>
        <Grid xs="2.5" item></Grid>
      </Grid>
    </>
  );
};

export default Nav;
