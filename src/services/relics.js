import axios from 'axios'

let baseUrl = `${import.meta.env.VITE_API_URL}/relics`

const getAllRelics = async () => {
  let response = await axios.get(baseUrl)

  return response.data
}

const getRelicById = async (id) => {
  let response = await axios.get(`${baseUrl}/${id}`)

  return response.data
}

export default { getAllRelics, getRelicById }