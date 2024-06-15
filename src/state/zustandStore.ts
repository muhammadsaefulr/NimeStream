import { create } from "zustand";

type Action = {
  updateQuery: (title: searchDataZustandStore["title"]) => void;
  updateSearchData: (searchData: searchDataZustandStore["dataSearch"]) => void;
};

export const useSearchStore = create<searchDataZustandStore & Action>(
  (set) => ({
    title: "",
    dataSearch: [
      {
        title: "",
        AnimeLinks: "",
        status: "",
        rating: "",
        thumbnailImage: "",
        genre: [{ genreLinks: "", titleGenre: "" }],
      },
    ],
    updateQuery: (data) => set(() => ({ title: data })),
    updateSearchData: (data) =>
      set(() => {
        return {
          dataSearch: [...data],
        };
      }),
  })
);
