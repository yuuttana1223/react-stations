import React, { useEffect } from 'react'
import { fetchJson } from './Description'

const DOG_LIST_URL = 'https://dog.ceo/api/breeds/list/all'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState()

  React.useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const json = await fetchJson(DOG_LIST_URL)
        const newBreeds = Object.keys(json.message)
        setBreeds(newBreeds)
      } catch (error) {
        alert('犬の画像を取得できませんでした。')
      }
    }
    fetchBreeds()
  }, [])
  return <div></div>
}
