import * as yup from "yup";

export const advancedSchema = yup.object().shape({
  nameSurname: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .required("Required"),
  acceptedTos: yup.boolean().oneOf([true], "Pleas accept the terms of service"),
  carYear: yup.number().positive().required("Required"),
  carInfo: yup
    .string()
    .min(60, "Opinion must have min 60 letters")
    .required("Required"),
  email: yup.string().email("Pleas enter a valid e-mail").required("Required"),
  carImg: yup.string().required("You must add some pictures from your car!"),
  carPrice: yup.number().positive().required("Write your price"),
});
