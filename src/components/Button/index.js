import cn from "classnames/bind";
import styles from "./index.module.scss";

const cx = cn.bind(styles);

const Button = ({ content, onClick = undefined }) => {
  return (
    <>
      <div className={cx("container")} onClick={onClick}>
        {content}
      </div>
    </>
  );
};

export default Button;
