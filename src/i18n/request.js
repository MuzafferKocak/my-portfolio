import { getRequestConfig } from "next-intl/server";
import en from "../messages/en.json";

export default getRequestConfig(() => ({
  locale: "en",
  messages: en,
}));
