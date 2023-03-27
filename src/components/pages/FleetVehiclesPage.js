import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import FleetVehicle from "../FleetVehiclePagesComponents/FleetVehicle";
import Footer from "../footer/Footer";
import supabase from "../../supabase";

const FleetVehiclesPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const { data } = await supabase.from("cars").select();
    setCars(data);
  }

  return (
    <>
      <Header />
      <FleetVehicle carData={cars} />
      <Footer />
    </>
  );
};

export default FleetVehiclesPage;
