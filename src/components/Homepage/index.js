import { Grid } from "@mui/material";
import cn from "classnames/bind";
import Chicago from "../Chicago";
import Nav from "../Nav";
import Specials from "../Specials";
import styles from "./index.module.scss";

const cx = cn.bind(styles);

const Homepage = () => {
  return (
    <>
      <Grid container className={cx("container")}>
        <Nav />
        <Chicago />
        <Specials />
      </Grid>
    </>
  );
};

export default Homepage;
