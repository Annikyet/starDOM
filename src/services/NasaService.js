import { api } from "./AxiosService"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"


// const apiKey = 'yyLEo1Z71y0iq4ifEVPKAwFHu5UEbUQP7hQWRWPS'
// const apiUrl = 'https://api.nasa.gov/planetary/apod'


class NasaService {
  async getImage() {
    // get image by date
    const res = await api.get('')
    logger.log(res.data)
    console.log(res.data)
    AppState.image.title = res.data.title
    AppState.image.date = res.data.date
    AppState.image.description = res.data.explanation
    AppState.image.imgUrl = res.data.hdurl
  }
}

export const nasaService = new NasaService()