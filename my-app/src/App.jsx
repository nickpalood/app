import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "fantasy")

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme",localTheme)

  }, [theme])

  return (
    <div>

    </div>
  )
}

export default App
