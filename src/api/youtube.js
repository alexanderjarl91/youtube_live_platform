import axios from "axios";

//would normally hide this as .env, will restrict to domain from google cloud console
const apiKey = "AIzaSyB2n9QhFmEawYj4w5SpkRv2qdFkYNcqp2k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 6,
    key: apiKey,
  },
});
