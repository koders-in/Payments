import { client } from "./api";

export const fetchData = async (project: string, apiKey: string) => {
  try {
    const res = await client.post("invoice", {
      data: { project, apiKey },
    });
    if (res.status === 200) return res.data;
    else return null;
  } catch (error) {
    return null;
  }
};

export const fetchProjectStatusData = async () => {
  try {
    const res = await client.get("status");
    if (res.status === 200) return res.data;
    else return null;
  } catch (error) {
    console.log("Something went wrong while fetching project status data");
    return null;
  }
};

export interface Props {
  pdfData: any;
}

export const currency_symbols: { [key: string]: string } = {
  USD: "$",
  EUR: "€",
  CRC: "₡",
  GBP: "£",
  ILS: "₪",
  INR: "₹",
  JPY: "¥",
  KRW: "₩",
  NGN: "₦",
  PHP: "₱",
  PLN: "zł",
  PYG: "₲",
  THB: "฿",
  UAH: "₴",
  VND: "₫",
};
