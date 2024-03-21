import axios from "axios";
const baseUrl = "https://lovecraftapirest.fly.dev";

export const getCreaturesFromDB = async () => {
  const response = await axios.get(`${baseUrl}/api/creatures`);
  return response.data;
};
