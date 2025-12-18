import axios from 'axios'

let baseUrl = `${import.meta.env.VITE_API_URL}/characters`

const getAllCharacters = async () => {
  let response = await axios.get(baseUrl)

  return response.data
}

const getCharacterById = async (id) => {
  let response = await axios.get(`${baseUrl}/${id}`)

  return response.data
}

export default { getAllCharacters, getCharacterById }