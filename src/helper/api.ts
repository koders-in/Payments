import Axios, { AxiosResponse } from "axios";

type Endpoint = "/get-project" | "/get-budget" | "/checkout";

const client = Axios.create({
  // TODO=>
  // baseURL: "https://api.koders.in",
  baseURL: "http://192.168.29.117:9442/",
  headers: {
    "Content-Type": "application/json",
  },
});

interface Props {
  endpoint: Endpoint;
  payload: any;
}

export const sendPayload = async ({
  endpoint,
  payload,
}: Props): Promise<AxiosResponse> => {
  try {
    return await client.post(endpoint, payload);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
