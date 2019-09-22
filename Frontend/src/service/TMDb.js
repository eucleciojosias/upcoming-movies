import ApiRequest from './ApiRequest'

export const getUpcoming = async setError => {
  try {
    const { data } = await ApiRequest.get('upcoming-movies')
    return data
  } catch (error) {
    setError()
  }
}
