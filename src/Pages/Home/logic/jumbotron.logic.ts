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
        "Lorem ipsum dolor sit amet constectur adispicing elem, Lorem ipsum dolor sit amet constectur adispicing elem, Lorem ipsum dolor sit amet constectur adispicing elem",
      genre: [
        { title: "Adventure" },
        { title: "Adventure" },
        { title: "Adventure" },
      ],
    },
  ];
  return dataJumbotron;
}