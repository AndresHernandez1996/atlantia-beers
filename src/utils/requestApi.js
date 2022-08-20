import axios from "axios"

const requestApi = (path) => {
  axios
    .get(path)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw new Error(`An error has been occured 🥺 ${error}`)
    })
    .then(() => {
      // always executed
    })
}

export default requestApi
