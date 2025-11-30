import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [test, setTest] = useState('')

  const post = async() => {
    try {
      const res = await axios.get('http://localhost:8080/api/posts/test')
      setTest(res.data)
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <button onClick={post}>Test API</button>
      <p>응답: {test}</p>

    </>
  )
}

export default App
