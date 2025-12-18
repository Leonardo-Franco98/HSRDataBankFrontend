import axios from 'axios'

let baseUrl = `${import.meta.env.VITE_API_URL}/lightcones`

const getAllLightcones = async () => {
  let response = await axios.get(baseUrl)

  return response.data
}

const getLightconeById = async (id) => {
  let response = await axios.get(`${baseUrl}/${id}`)

  return response.data
}

export default { getAllLightcones, getLightconeById }