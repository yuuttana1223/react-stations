import React from 'react'
import { BreedsSelect } from './BreedsSelect'
import { fetchJson } from './Description'

const DOG_LIST_URL = 'https://dog.ceo/api/breeds/list/all'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState()
  const [selectedBreed, setSelectedBreed] = React.useState()

  const handleSelect = React.useCallback(e => {
    setSelectedBreed(e.target.value)
  }, [])

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
  return (
    <div className="dogListGroup">
      <div>Breeds List</div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleSelect}
      />
  return <div></div>
    </div>
  )
}
