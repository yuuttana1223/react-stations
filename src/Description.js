import React from 'react'
import { DogImage } from './DogImage'

export const fetchJson = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    throw Error(`Failed to fetch dog: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

const INITIAL_DOG_URL =
  'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'

const RANDOM_DOG_URL = 'https://dog.ceo/api/breeds/image/random'

export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState(INITIAL_DOG_URL)
  const handleClick = React.useCallback(async () => {
    try {
      const dog = await fetchJson(RANDOM_DOG_URL)
      setDogUrl(dog.message)
    } catch (error) {
      alert('犬の画像を取得できませんでした。')
    }
  }, [])
  return (
    <div>
      <div className="dogGroup">
        <p className="dogDescription">犬の画像を表示するサイトです</p>
        <div className="dogImgWrapper">
          <DogImage url={dogUrl} />
        </div>
      </div>
      <div className="updateButtonWrapper">
        <button onClick={handleClick} className="updateButton">
          更新
        </button>
      </div>
    </div>
  )
}
