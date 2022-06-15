import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod/',
  timeout: 8000,
  params :{
    api_key: 'yyLEo1Z71y0iq4ifEVPKAwFHu5UEbUQP7hQWRWPS'
  }
})
