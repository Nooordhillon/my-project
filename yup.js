import *  as Yup from "yup";

const numberValidator = Yup.number();

const  var1= "2";


numberValidator.validateSync(var1);


// const stringValidator = Yup.string().strict();

// stringValidator.validateSync("3000");

// const emailValidator = Yup.string().email();

// emailValidator.validateSync("");

// const userObjectValidator = Yup.object().shape({
//   userName: Yup.string().required().min(10),
//   userEmail: Yup.string().email().required(),
//   userPassword: Yup.string().min(6).required(),
// });

// userObjectValidator.validateSync(
//   {
//     userName: "",
//     userEmail: "",
//     userPassword: "",
//   },
//   {
//     abortEarly: false,
//     disableStackTrace: true,
//   }
// );