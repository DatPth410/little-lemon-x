import cn from "classnames/bind";
import { useEffect, useState } from "react";
import Nav from "../Nav";
import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/slices/orderSlice";
import { fetchAPI } from "../../helpers/apis";
import { set } from "../../redux/slices/timeSlice";
import { toast } from "react-toastify";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const cx = cn.bind(styles);

const BookingPage = () => {
  const [date, setDate] = useState();
  const [timeOption, setTimeOption] = useState();
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const order = useSelector((state) => state.order.value);
  const time = useSelector((state) => state.time.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!date) return;
    const dates = fetchAPI(new Date(Date.parse(date)));
    dispatch(set(dates));
    console.log(dates);
    return () => {
      setDate();
    };
  }, [date]);

  return (
    <>
      <div className={cx("container")}>
        <Nav />
        <div className={cx("container-form")}>
          <div className={cx("container-form-content")}>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
              <label htmlFor="res-date">Choose date</label>
              <input
                required
                type="date"
                id="res-date"
                onChange={(e) => {
                  setDate(e.target.value);
                  dispatch(add(e.target.value));
                }}
              />
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                onChange={(e) => setTimeOption(e.target.value)}
              >
                {time?.map((time) => (
                  <option>{time}</option>
                ))}
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={(e) => setGuests(e.target.value)}
              />
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              <Button
                content="Make Your reservation"
                onClick={() => {
                  if (date && timeOption && guests && occasion) {
                    toast.success("Booked!");
                    navigate("/");
                  } else {
                    toast.error("Please fill the informations");
                  }
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
