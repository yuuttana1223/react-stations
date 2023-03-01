// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import { Header } from './Header'

export const App = () => {
  return (
    <>
      <Header />
      <main className="appMain">
        <div className="container">
          <Description />
          <hr />
        </div>
      </main>
    </>
  )
}
