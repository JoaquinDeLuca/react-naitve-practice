import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: "18d9de0579facb89186199f3d4efd1fb" ?? "No api KEY",
        language: 'es'
    }
})