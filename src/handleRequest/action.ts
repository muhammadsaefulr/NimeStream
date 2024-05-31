import { useQuery } from "@tanstack/react-query";
import axios from "axios";

class fetchApi {
  static useReqAnimeLatest = () => {
    return useQuery({
      queryKey: ["getLatestPage"],
      queryFn: async () => {
        const response = await axios.get("/main/api/service/otakudesu");
        return response.data.data;
      },
    });
  };
  static useReqAnimeEpsList = (urlSourcePath: string | undefined) => {
    return useQuery({
      queryKey: ["getAnimeEpsList"],
      queryFn: async () => {
        const response = await axios.get(
          `/main/api/service/otakudesu/watch/${urlSourcePath}`
        );
        return response.data;
      },
    });
  };
  static reqPlayAnime = (urlSourcePath: string | undefined) => {
    return useQuery({
      queryKey: ["getPlayAnime"],
      queryFn: async () => {
        const response = await axios.get(
          `/main/api/service/otakudesu/play/${urlSourcePath}`
        );
        return response.data.responseData;
      },
    });
  };
  static reqSearchAnime = (inputValue: string | undefined) => {
    return useQuery({
      queryKey: ["getSearchAnime"],
      queryFn: async () => {
        const response = await axios.get(
          `/main/api/service/otakudesu/search?q=${inputValue}`
        );
        return response.data.data;
      },
    });
  };
}

export default fetchApi;
