import React from 'react'
import { BreedsSelect } from './BreedsSelect'
import { fetchJson } from './Description'

const DOG_LIST_URL = 'https://dog.ceo/api/breeds/list/all'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState()
  const [selectedBreed, setSelectedBreed] = React.useState()
  const [breedUrls, setBreedUrls] = React.useState()

  const handleSelect = React.useCallback(e => {
    setSelectedBreed(e.target.value)
  }, [])

  const handleShow = React.useCallback(async () => {
    try {
      const json = await fetchJson(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
      )
      setBreedUrls(json.message)
    } catch (error) {
      alert('犬の画像を取得できませんでした。')
    }
  }, [selectedBreed])

  React.useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const json = await fetchJson(DOG_LIST_URL)
        const newBreeds = Object.keys(json.message)
        setSelectedBreed(newBreeds[0])
        setBreeds(newBreeds)
      } catch (error) {
        alert('犬の画像を取得できませんでした。')
      }
    }
    fetchBreeds()
  }, [])
  return (
    <div>
      <div className="selectGroup">
        <div>Breeds List</div>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChange={handleSelect}
        />
        <button onClick={handleShow} className="showButton">
          表示
        </button>
      </div>
      <div className="dogList">
        {breedUrls?.map(url => (
          <img key={url} src={url} alt="犬" className="dogImg" />
        ))}
      </div>
    </div>
  )
}
