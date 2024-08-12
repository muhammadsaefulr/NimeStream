import { useQuery } from "@tanstack/react-query";
import axios from "axios";

class fetchApi {
  static useReqAnimeLatest = () => {
    return useQuery({
      queryKey: ["getLatestPage"],
      queryFn: async () => {
        const response = await axios.get("/otakudesu/homepage");
        return response.data.data;
      },
    });
  };
  static useReqAnimeEpsList = (urlSourcePath: string | undefined) => {
    return useQuery({
      queryKey: ["getAnimeEpsList"],
      queryFn: async () => {
        const response = await axios.get(
          `/otakudesu/getanime/${urlSourcePath}`,
          {
            headers: {
              'Cache-Control': 'no-cache'
            }
          }
        );
        return response.data;
      },
      staleTime: 0,
      refetchOnWindowFocus: true,
    });
  };
  static reqPlayAnime = (urlSourcePath: string | undefined) => {
    return useQuery({
      queryKey: ["getPlayAnime"],
      queryFn: async () => {
        const response = await axios.get(
          `/otakudesu/animesource/${urlSourcePath}`,
          {
            headers: {
              'Cache-Control': 'no-cache'
            }
          }
        );
        
        return response.data.data;
      },
      staleTime: 0,
      refetchOnWindowFocus: true,
    });
  };
  static reqSearchAnime = (inputValue: string | undefined) => {
    return useQuery({
      queryKey: ["getSearchAnime"],
      queryFn: async () => {
        const response = await axios.get(
          `/otakudesu/searchanime/judul?q=${inputValue}`
        );
        return response.data.data;
      },
    });
  };
  static useReqGenreAnime = (
    genreTitle: string | undefined,
    id: string | undefined
  ) => {
    return useQuery({
      queryKey: ["getAnimeGenre"],
      queryFn: async () => {
        const response = await axios.get(
          `/otakudesu/animegenre/${genreTitle}/pages/${id}`
        );
        return response.data.data;
      },
    });
  };
}

export default fetchApi;
