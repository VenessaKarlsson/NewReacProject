import React, { useContext } from 'react'
import { GiveInfo } from '../GiveInfo'
import { Link } from 'react-router-dom'


function About() {
  // Man skapar en variabel i detta fall msg för att få ut informationen i detta fall "hej" på sidan
  const msg = useContext(GiveInfo)

  // Lägg in en map för att läsa om fler produkter
  return (
    <div>
      <h1>{msg}</h1>
      <h2>Välkommen till vår sida</h2>
      <p>Nyfiken? Kika på våra hundar</p>
      <button>
        <Link to="/test/1">Hund1</Link>
      </button>
      <button>
        <Link to="/test/2">Hund2</Link>
      </button>
    </div>
  )
}

export default About
