import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async() => {
  try {
    await Product.insertMany(products);
    console.log("Default data inserted successfully");
  } catch (error) {
    console.log(`error during inserting default data. error message: ${error}`);
  }
};


export default DefaultData;