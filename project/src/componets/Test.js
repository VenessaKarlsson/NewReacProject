import React from 'react'
import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'
// import { useState } from 'react'

function Test() {
  // Skriver id eftersom det är det namnet som är döpt i min path i App.js:
  // path={'/test/:id'} element={<Test />} />

  const { id } = useParams()
  // const [dog, setDog] = useState([])

  // useEffect(() => {
  //   fetch('data.json/id', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   })

  //     .then((response) => response.json())
  //     .then((dog) => setDog(dog))
  // }, [])

  return (
    <div>
      Test
      <h1>
        Detta är en hundsida, här kan du läsa om hund <span>{id}</span>
      </h1>
    </div>
  )
}

export default Test
