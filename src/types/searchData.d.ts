interface dataGenreResponseApi {
    titleGenre: string,
    genreLinks: string
}

interface dataResponseApi {
    title: string,
    AnimeLinks: string,
    thumbnailImage: string,
    status: string,
    rating: string,
    genre: dataGenreResponseApi[]
}

interface ResponseApi {
    status: number,
    message: string,
    data: dataResponseApi[]
}


type searchDataZustandStore = {
    title: string,
    dataSearch: dataResponseApi[]
}
