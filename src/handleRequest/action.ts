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
        console.log("react query params:", urlSourcePath)
        const response = await axios.get(
          `/otakudesu/getanime/${urlSourcePath}/`
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
          `/otakudesu/animesource/${urlSourcePath}/`,
          {
            headers: {
              "Cache-Control": "no-cache",
            },
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
      queryKey: ["getSearchAnime", inputValue],
      queryFn: async () => {
        const response = await axios.get(
          `/otakudesu/searchanime?judul=${inputValue}`
        );

        console.log(response)

        return response.data.data;
      },
      enabled: !!inputValue,
      refetchOnWindowFocus: false,
    });
  };

  static useGetStreamingSource = (sourceLinks: string | undefined) => {
    return useQuery({
      queryKey: ["getStreamSource"],
      queryFn: async () => {
        const response = await axios.get(`${sourceLinks}`);
        return response;
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

  static useReqAnimeOngoing = (pageNum: string | undefined) => {
    return useQuery({
      queryKey: ["getAnimeOngoing"],
      queryFn: async () => {
        const response = await axios.get(
          `/otakudesu/ongoing-anime/page/${pageNum}`
        );

        return response.data.data;
      },
    });
  };
}

export default fetchApi;
