import React, { useState } from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomCheckBox from "./CustomCheckBox";
import { advancedSchema } from "./schemas";
import supabase from "../../../supabase";
import "./form.scss";

const FormAddForm = ({ closeForm }) => {
  async function getBase64ImageFromUrl(imageUrl) {
    const res = await fetch(imageUrl);
    const blob = await res.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          resolve(reader.result);
        },
        false
      );

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setDataAddCar((perv) => [...perv, values]);
    const doc = document.getElementById("1");

    const img = URL.createObjectURL(doc.files[0]);
    const imgBase64 = await getBase64ImageFromUrl(img);

    await supabase.from("cars").insert({
      ownername: values.nameSurname,
      acceptedtos: values.acceptedTos,
      caryear: values.carYear,
      carinfo: values.carInfo,
      email: values.email,
      carprice: values.carPrice,
      carimg: imgBase64,
    });
    closeForm();
    actions.resetForm();
  };
  const [dataAddCar, setDataAddCar] = useState([]);

  return (
    <Formik
      initialValues={{
        nameSurname: "",
        acceptedTos: false,
        carYear: "",
        carInfo: "",
        email: "",
        carPrice: "",
        carImg: "",
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label={`Name Surname`}
            name={"nameSurname"}
            type={"text"}
            placeholder={"Enter your name and surname!"}
          />

          <CustomInput
            label={"E-mail"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your E-mail"}
          />
          <CustomInput
            label={`Car Year`}
            name={"carYear"}
            type={"number"}
            placeholder={"Enter the year of manufacture of the car"}
          />
          <CustomInput
            label={`Car Info`}
            name={"carInfo"}
            type={"text"}
            placeholder={"Write something about this car"}
          />
          <CustomInput
            label={`Car price per day`}
            name={"carPrice"}
            type={"number"}
            placeholder={"Enter your price for rent per day"}
          />
          <CustomInput
            id={1}
            label={`Car img`}
            name={"carImg"}
            type={"file"}
            placeholder={"Upload Image of your car"}
          />
          <CustomCheckBox type={"checkbox"} name={"acceptedTos"} />

          <button
            className={"button-form"}
            disabled={isSubmitting}
            type={"submit"}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddForm;
