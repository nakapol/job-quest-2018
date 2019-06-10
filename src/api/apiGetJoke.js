import axios from 'axios'

export default async function apiGetJoke(
  count = 5,
  firstName = 'John',
  lastName = 'Doe'
) {
  try {
    const response = await axios.get(
      `http://api.icndb.com/jokes/random/${count}?firstName=${firstName}&lastName=${lastName}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data
  } catch (error) {
    return error.response.data
  }
}
