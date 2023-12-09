import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '00eef6e0f7msh679dd94df5b4170p14fe51jsne5dc3989c378',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

try {
  const response = await axios.request(options)
  console.log(response.data)
} catch (error) {
  console.error(error)
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
