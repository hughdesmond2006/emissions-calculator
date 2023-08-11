import axios from "axios";

export const getTrips = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/trips`);
  return res.data;
};