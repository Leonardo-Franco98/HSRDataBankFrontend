import axios from 'axios'

let baseUrl = `${import.meta.env.VITE_API_URL}/planarOrnaments`

const getAllPlanarOrnaments = async () => {
  let response = await axios.get(baseUrl)

  return response.data
}

const getPlanarOrnamentById = async (id) => {
  let response = await axios.get(`${baseUrl}/${id}`)

  return response.data
}

export default { getAllPlanarOrnaments, getPlanarOrnamentById }