// DO NOT DELETE

import * as React from 'react'
import './App.css'

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
      alert('犬の画像を取得できませんでした。')
    }
  }, [])

  return (
    <>
      <header className="appHeader">
        <h1 className="appTitle">Dogアプリ</h1>
      </header>
      <main className="appMain">
        <div className="container">
          <div className="dogWrapper">
            <p className="dogDescription">犬の画像を表示するサイトです</p>
            <div className="dogImgWrapper">
              <img src={dogUrl} alt="犬" className="dogImg" />
            </div>
          </div>
          <div className="updateButtonWrapper">
            <button onClick={handleClick} className="updateButton">
              更新
            </button>
          </div>
          <hr />
        </div>
      </main>
    </>
  )
}
