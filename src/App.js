// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'

const fetchDog = async () => {
  const res = await fetch(DOG_API_URL)
  if (!res.ok) {
    throw Error(`Failed to fetch dog: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  const handleClick = React.useCallback(async () => {
    try {
      const dog = await fetchDog()
      setDogUrl(dog.message)
    } catch (error) {
      console.error(error)
      alert('犬の画像を取得できませんでした。')
    }
  }, [])

  return (
    <>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬" />
      <div>
        <button onClick={handleClick}>表示</button>
      </div>
    </>
  )
}
