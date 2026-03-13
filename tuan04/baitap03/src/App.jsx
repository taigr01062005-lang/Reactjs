import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [id, setId] = useState(null) 
  const [datas ,setData] = useState(null)
  const [error,setErr]   = useState("")

  useEffect (() =>{
    
    if(!id) return 
    if(id < 1 || id >10){
      setErr("Not Found")
      setData(null)
      return
    }
 
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {setData(data) ; setErr("")})
      .catch((error) => {setErr("Error")
          console.log(error)
      }
      )
  }, [id])


   return (
    <div>
      <p>Danh Sách </p>
      
       <input type="number" placeholder='Nhập số 1-10' onChange={(e) => setId(Number(e.target.value))}/>
       {error && <p>{error}</p> }
       {datas && <div>  <p>{datas.name}</p> <p>{datas.phone}</p> <p>{datas.website}</p> </div> }
      
    </div>
  )
}

export default App