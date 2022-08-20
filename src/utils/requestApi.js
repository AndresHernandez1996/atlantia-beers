import axios from "axios"

const requestApi = (path, setState) => {
  axios
    .get(path)
    .then((response) => {
      return setState(response.data)
    })
    .catch((error) => {
      throw new Error(`An error has been occured 🥺 ${error}`)
    })
    .then(() => {
      // always executed
    })
}

export default requestApi
