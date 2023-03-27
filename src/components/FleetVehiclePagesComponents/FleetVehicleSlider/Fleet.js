import React from "react";
import Slider from "react-slick";

import "./fleet.scss";

const Fleet = (props) => {
  const vehicle = props.cars;

  const settings = {
    className: "slide",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={"fleetContainer"}>
      <h2>You can rent this cars!</h2>

      <section className={"fleetCars"}>
        <Slider {...settings}>
          {vehicle.map((car, idx) => (
            <div id={idx} className={"car-container"}>
              <div className={"carImg"}>
                <img src={car.carimg} alt={"Car"} />
              </div>
              <div className={"carInfo"}>
                <strong>About Car</strong>
                {car.carinfo}. Car year is {car.caryear}
              </div>
              <span className={"carPrize"}>
                <strong>Car price per year</strong>: {car.carprice}$
              </span>
              <span className={"contact"}>
                <strong>Contact</strong>: {car.ownername}, {car.email}
              </span>
              <button className={"Booking-car"}>Book a car</button>
            </div>
          ))}
        </Slider>

        <section className={"Book-Car-Section"}>
          <section className={"Book-Car-Box"}>
            <div className={"Book-Car-heading"}>
              <h3>Book Car</h3>
            </div>
            <div className={"Book-Car-img"}></div>
            <div className={"Book-Car-info"}></div>
            <div className={"Book-Car-price"}></div>

            <section className={"calender"}></section>

            <button type={"submit"}>Book</button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Fleet;
