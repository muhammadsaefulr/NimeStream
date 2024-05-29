import axios from "axios";
import { useEffect, useState } from "react";

interface dataResp {
    title: string;
    thumbnailUrl: string;
    latestEp: string;
    updateAnime: string;
  }

export function dataReq() {
  const [data, setData] = useState<dataResp[] | null>(null);
  useEffect(() => {
    axios.get(`/main/otakudesu`).then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });
  }, []);

  return data
}

export const dataDummy = [
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season",
    thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
  },
  {
    title: "One Piece",
    thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season",
    thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season",
    thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season",
    thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
  },
];

export function mainFunc(){
  document.getElementById("anime-image-thumbnail")?.addEventListener('mouseover', () => {
    document.getElementById("description-mv")?.classList.remove("hidden")

  document.getElementById("anime-image-thumbnail")?.addEventListener('mouseout', () => {
    document.getElementById("description-mv")?.classList.add("hidden")
  })
    
})
}