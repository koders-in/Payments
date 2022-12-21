import Axios from "axios";

type Endpoint = "/get-project" | "/get-budget" | "/checkout" | "/coupon";

const client = Axios.create({
  baseURL: "https://api.koders.in",
  headers: {
    "Content-Type": "application/json",
  },
});

interface Props {
  endpoint: Endpoint;
  payload: any;
  readErrorMessage?: boolean;
}

export const sendPayload = async ({
  endpoint,
  payload,
  readErrorMessage = false,
}: Props) => {
  try {
    return await client.post(endpoint, payload);
  } catch (error: any) {
    if (readErrorMessage) throw error;
    else throw new Error(error.message);
  }
};
