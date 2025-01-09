import * as yup from "yup";

/**
 Exercise for Yup

Product Object:

productName:
A required string.
Must be at least 3 characters and no more than 50 characters.

price:
A required number.
Must be greater than or equal to 0.
Can have up to 2 decimal places (e.g., 99.99).

category:
A required string.
Must be one of the following values: "Electronics", "Clothing", "Home Appliances".

inStock:
A required boolean.

tags:
An optional array of strings.
Each string must be at least 2 characters long.
The array should contain at least 1 tag if provided.

dimensions:
An object with:
length: A required positive number.
width: A required positive number.
height: A required positive number.

releaseDate:
A required date.
Must be in the past.

 */
// {
//     "productName": "Smartphone X",
//     "price": 999.99,
//     "category": "Electronics",
//     "inStock": true,
//     "tags": ["smartphone", "tech"],
//     "dimensions": {
//         "length": 15.5,
//         "width": 7.8,
//         "height": 0.7
//     },
//     "releaseDate": "2022-08-15"
// }

const productValidator = yup.object().shape({
  productName: yup.string().required().min(3).max(50),
  price: yup.number().required().min(0),
  category: yup
    .string()
    .required()
    .oneOf(["Electronics", "Clothing", "Home Appliances"]),
  inStock: yup.boolean().required(),
  tags: yup.array().of(yup.string().min(2)),
  dimensions: yup.object().shape({
    length: yup.number().required().positive(),
    width: yup.number().required().positive(),
    height: yup.number().required().positive(),
  }),
  releaseDate: yup
    .date()
    .required()
    .max(new Date(), "Release date must be in the past"),
});


productValidator.validateSync(
    {
    "productName": "Smartphone X",
    "price": 999.99,
    "category": "Electronics",
    "inStock": true,
    "tags": ["smartphone", "tech"],
    "dimensions": {
        "length": 15.5,
        "width": 7.8,
        "height": 0.7
    },
    "releaseDate": "2024-08-15"
}
)