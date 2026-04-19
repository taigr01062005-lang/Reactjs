import { useState } from 'react'

import './App.css'
import {useRecoilState, useRecoilValue} from 'recoil'
import {width,height,area} from './states/AreaAtom'

function App() {
  const [w, setW] = useRecoilState(width)
  const [h, setH] = useRecoilState(height)
  const RecArea = useRecoilValue(area)

  let handleIncW=()=>{
    setW(w+1)
    console.log(w)
  }
  let handleIncH=()=>{
    setH(h+1)
    console.log(h)
  }

  return (
    <div>
      <button onClick={handleIncW}>Inc W</button>
      <button onClick={handleIncH}>Inc H</button>
      {RecArea}

    </div>
  )
}

export default App
