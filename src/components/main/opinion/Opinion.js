import React, { useState } from "react";
import opinion from "./opinions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./opinion.scss";

const Opinion = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [opinions, setOpinions] = useState(opinion);
  const [hide, setHide] = useState(false);
  const [data, setData] = useState({
    name: "",
    opinion: "",
    img: "",
  });

  const showAddOpinion = () => {
    setHide(true);
    setIsDisplay(true);
  };
  const addOpinion = () => {
    setHide(false);
    setIsDisplay(false);
    setOpinions((prev) => [...prev, data]);
    setData({ name: "", opinion: "", img: "" });
  };
  const fileSelectedHandler = (e) => {
    setData((prev) => ({
      ...prev,
      img: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const settings = {
    className: "slide2",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className={"reviews section-padding section white-section"}>
        <div className={"h2_wrapper"}>
          <h2 className={"section-heading"}>Opinions</h2>
        </div>

        <div className={"wrapper"}>
          <div className={hide ? "reviews__boxes hide" : "reviews__boxes"}>
            <Slider {...settings}>
              {opinions.map((element, index) => (
                <div>
                  <div key={index} className={"review__box"}>
                    <div className={"review_img"}>
                      <img src={element.img} />
                    </div>
                    <i className="fa-solid fa-quote-right"></i>
                    <p className={"review__quote"}>{element.opinion}</p>
                    <strong className={"review__person"}>{element.name}</strong>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <section className={isDisplay ? "add__opinion show" : "add__opinion"}>
            <div className={"wrapper__add_opinion"}>
              <div className={"person_info"}>
                <span>Write your Name and Surname</span>
                <input
                  value={data.name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  type={"text"}
                  placeholder={"Write your name, surname"}
                />
              </div>
              <div className={"person_opinion"}>
                <span>Write your opinion</span>
                <textarea
                  value={data.opinion}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, opinion: e.target.value }))
                  }
                  rows={5}
                ></textarea>
              </div>
              <div className={"add__image"}>
                <span>Add your Img</span>
                <input type={"file"} onChange={fileSelectedHandler} />
              </div>
            </div>
            <div className={"containerSendBtn"}>
              <button className={"sendOpinion"} onClick={addOpinion}>
                Send
              </button>
            </div>
          </section>
          <div className={"containerBtn"}>
            <button
              className={hide ? "btn_add_opinion hide" : "btn_add_opinion"}
              onClick={showAddOpinion}
            >
              Add your opinion!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opinion;
