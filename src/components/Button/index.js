import cn from "classnames/bind";
import styles from "./index.module.scss";

const cx = cn.bind(styles);

const Button = ({ content }) => {
  return (
    <>
      <div className={cx("container")}>{content}</div>
    </>
  );
};

export default Button;
