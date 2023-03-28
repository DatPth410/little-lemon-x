import { Grid } from "@mui/material";
import cn from "classnames/bind";
import styles from "./index.module.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const cx = cn.bind(styles);

const Card = ({ name, price, imageUrl, description }) => {
  return (
    <>
      <div className={cx("container")}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={cx("container-logo")}
        ></div>
        <div className={cx("container-content")}>
          <Grid container>
            <Grid item xs="8">
              <span className={cx("container-content-name")}>{name}</span>
            </Grid>
            <Grid item xs="2">
              <span className={cx("container-content-price")}>{price}</span>
            </Grid>
          </Grid>
          <Grid item xs="12" className={cx("container-content-des")}>
            {description}
          </Grid>
          <Grid item xs="12" className={cx("container-content-deli")}>
            Order a delivery <DeliveryDiningIcon />
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Card;
