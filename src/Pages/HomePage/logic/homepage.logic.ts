interface Genre {
  title: string;
}

interface JumbotronData {
  title: string;
  image: string;
  description: string;
  genre: Genre[];
}

export function nessecaryData(): JumbotronData[] {
  const dataJumbotron: JumbotronData[] = [
    {
      title: "One piece",
      image:
        "https://flowgpt.com/_next/image?url=https%3A%2F%2Fimage-cdn.flowgpt.com%2Fprompt%2FySo6P-wdNIYPAszYZ3CSI%2F1692267931899&w=2250&q=75",
      description:
        "Lorem ipsum dolor sit amet constectur adispicing elem, Lorem ipsum dolor sit amet constectur adispicing elem, Lorem ipsum dolor sit amet constectur adispicing elem",
      genre: [{ title: "Adventure" }, { title: "Comedy" }, { title: "Action" }],
    },
    {
      title: "One piece",
      image:
        "https://flowgpt.com/_next/image?url=https%3A%2F%2Fimage-cdn.flowgpt.com%2Fprompt%2FySo6P-wdNIYPAszYZ3CSI%2F1692267931899&w=2250&q=75",
      description:
        "Dulu, ada seorang bajak laut terkenal di seluruh lautan bernama Gol D. Roger. Ia merupakan seorang raja bajak laut yang telah berlayar mengarungi seluruh Grand Line, sayangnya ia ditangkap pemerintah dan telah dieksekusi mati. Sesaat sebelum kematiannya, Ia mengumumkan kepada dunia bahwa dirinya menyimpan sebuah harta karun bernama One Piece, sebuah harta karun yang kini menjadi incaran seluruh bajak laut yang ada di dunia.Di Era Bajak Laut saat ini",
      genre: [
        { title: "Adventure" },
        { title: "Action" },
        { title: "Drama" },
      ],
    },
  ];
  return dataJumbotron;
}