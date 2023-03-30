import React, { useState } from "react";
import "./aboutUs.scss";

const AboutUs = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDisplay2, setIsDisplay2] = useState(false);
  const [isDisplay3, setIsDisplay3] = useState(false);
  const [isDisplay4, setIsDisplay4] = useState(false);

  return (
    <section className={"about_us"} id={"AboutUs"}>
      <article className={""}>
        <div className={"heading-about-us"}>
          <h2>About Us</h2>
        </div>
        <section className={"about_us_container"}>
          <secttion class={"about_box_first"}>
            <div className={"wedding"}>
              <p className={"wedding_p"}>We rent cars for weddings</p>
              <p className={isDisplay ? "wedding_info show" : "wedding_info"}>
                <p>
                  <strong>Price</strong>: $1000 per day
                </p>
                <p>
                  We transport the young couple to the wedding ceremony, as well
                  as subsequent transports related to the Wedding.
                </p>
              </p>
              <i
                className="fa-solid fa-info info"
                onMouseEnter={() => setIsDisplay(true)}
                onMouseLeave={() => setIsDisplay(false)}
              ></i>
            </div>

            <div className={"party"}>
              <p className={"party_paragraf"}>
                We organize transport from events
              </p>
              <p
                className={
                  isDisplay2 ? "wedding_party showParty" : "wedding_party"
                }
              >
                <p>
                  <strong>Price:</strong>$100 per hour
                </p>
                <p>
                  We also deal with transport to special events such as:
                  bachelor parties, bachelorette parties, transport to clubs.
                </p>
              </p>
              <i
                className="fa-solid fa-info party-info"
                onMouseEnter={() => setIsDisplay2(true)}
                onMouseLeave={() => setIsDisplay2(false)}
              ></i>
            </div>
          </secttion>
          <div className={"border_middle"}></div>
          <section className={"about_box_second"}>
            <div className={"earn"}>
              <p className={"earn-paragraf"}>You can Earn with US</p>
              <p className={isDisplay3 ? "earn-info showEarn" : "earn-info"}>
                <p className={"earn-p"}>
                  If you have a well-maintained car, you can earn money with
                  us!!. All you have to do is add your car to our fleet of
                  vehicles. One of the conditions is that we will deduct 10%
                  from each rental.
                </p>
              </p>
              <i
                className="fa-solid fa-info"
                onMouseEnter={() => setIsDisplay3(true)}
                onMouseLeave={() => setIsDisplay3(false)}
              ></i>
            </div>

            <div className={"rent"}>
              <p className={"rent_paragraf"}>We rent cars privately</p>
              <p className={isDisplay4 ? "rentInfo showRent" : "rentInfo"}>
                If you have a well-maintained car, you can earn money with us!!.
                All you have to do is add your
              </p>
              <i
                className="fa-solid fa-info"
                onMouseEnter={() => setIsDisplay4(true)}
                onMouseLeave={() => setIsDisplay4(false)}
              ></i>
            </div>
          </section>
        </section>
      </article>
    </section>
  );
};

export default AboutUs;
