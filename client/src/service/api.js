import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(`error while signing up: ${error}`);
  }
};
