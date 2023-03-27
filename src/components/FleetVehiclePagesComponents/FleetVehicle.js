import React from "react";
import "./fleetvehicles.scss";
import Fleet from "./FleetVehicleSlider/Fleet";

const FleetVehicle = ({ carData }) => {
  return (
    <section className={"fleetVehicles"}>
      <Fleet cars={carData} />
    </section>
  );
};

export default FleetVehicle;
