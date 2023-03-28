import { Grid } from "@mui/material";
import cn from "classnames/bind";
import Button from "../Button";
import Card from "../Card";
import styles from "./index.module.scss";

const cx = cn.bind(styles);

const Specials = () => {
  return (
    <>
      <Grid container className={cx("container")}>
        <Grid xs="2.5" item></Grid>
        <Grid xs="7" container item>
          <Grid container item xs="12">
            <Grid container item xs="12">
              <Grid item xs="7">
                <span className={cx("container-left")}>
                  This week specials!
                </span>
              </Grid>
              <Grid item xs="5" className={cx("container-right")}>
                <Button content="Online menu"></Button>
              </Grid>
            </Grid>
            <Grid container item xs="12" className={cx("container-list")}>
              <Grid item xs="3.5">
                <Card
                  name="Greek salad"
                  imageUrl="/images/greeksalad.jpg"
                  price="12.95$"
                  description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                />
              </Grid>
              <Grid item xs="0.75"></Grid>
              <Grid item xs="3.5">
                <Card
                  name="Bruchetta"
                  imageUrl="/images/greeksalad.jpg"
                  price="12.95$"
                  description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                />
              </Grid>
              <Grid item xs="0.75"></Grid>
              <Grid item xs="3.5">
                <Card
                  name="Lemon Dessert"
                  imageUrl="/images/greeksalad.jpg"
                  price="12.95$"
                  description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs="2.5" item></Grid>
      </Grid>
    </>
  );
};

export default Specials;
