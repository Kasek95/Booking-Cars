import React, {useState,useEffect} from "react";
import supabase from "../../../supabase";
import "./fleet.scss";
import Slider from "react-slick";
import { DatePicker } from 'antd';
const {RangePicker} = DatePicker



const Fleet = (props) => {
    const vehicle = props.cars;
    const [selectedCar, setSelectedCar] = useState(null)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [activeReservations, setActiveReservations] = useState([]);





const getReservations = async(carId)=> {
    const { data } = await supabase.from("reservations").select().eq('carId',carId);
    setActiveReservations(data);
}

const showBookingCar = async(id) => {
        const car =vehicle.find(x => x.id === id)
      setSelectedCar(car)
      await getReservations(id)
   }
const handleDateChange = (date,dateString) => {
       setStartDate(dateString[0])
       setEndDate(dateString[1])
   }
const bookACar = async() => {

       await supabase.from("reservations").insert({
           startDate: startDate,
           endDate: endDate,
           carId: selectedCar.id
       })

       setSelectedCar(null)
    }

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
          dots: false,
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
            <div id={car.id} className={"car-container"}>
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
              <button onClick={() => showBookingCar(car.id)} className={"Booking-car"}>Book a car</button>
            </div>
          ))}
        </Slider>

        <section className={"Book-Car-Section"}>
          <div className={"Book-Car-heading"}>
            <h3>Book Car</h3>
          </div>

           <section key={selectedCar?.id} className={selectedCar ? "Book-Car-Box show" : "Book-Car-Box"}>
              <i onClick={()=> setSelectedCar(null)} className="fa-solid fa-xmark"></i>
              <div className={"Book-Car-img"}><img src={selectedCar?.carimg}/></div>
              <div className={"Book-Car-info"}>{selectedCar?.carinfo} Production of the car is {selectedCar?.caryear}</div>
              <div className={"Book-Car-price"}>Price per day: <strong>{selectedCar?.carprice}$</strong></div>
              <div className={"concat"}>Email: {selectedCar?.email}</div>

              <section className={"calender"}>
                <RangePicker onChange={handleDateChange}
                             disabledDate={(current) => {
                                 const now = new Date(current).setHours(0,0,0,0)
                                 const reservations = activeReservations.map(x => ({ start: new Date(x.startDate).setHours(0,0,0,0), end : new Date(x.endDate ).setHours(0,0,0,0)}))
                                 return reservations.some(x => now >= x.start && now <= x.end);
                             }}>

                </RangePicker>

              </section>

              <button onClick={bookACar}  className={"Book"} type={"submit"}>Book</button>
            </section>

        </section>
      </section>
    </section>
  );
};


export default Fleet;
