import React from 'react'
import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Test() {
  // const [dog, setDog] = useState([])

  // useEffect(() => {
  //   fetch('data.json' + id, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   })
  //     //Promise
  //     .then((response) => response.json())
  //     .then((dog) => setDog(dog))
  // }, [])

  // Skriver id eftersom det är det namnet som är döpt i min path i App.js:
  const { id } = useParams()

  return (
    <div>
      <Container>
        <HeroText>
          <h1>
            {/* Detta är en hundsida, här kan du läsa om hund: <span>{id}</span> */}
            Here you can read more about dog number:
          </h1>
          <br></br>
          <br></br>
          <p>{id}</p>
        </HeroText>
      </Container>
    </div>
  )
}

export default Test

const Container = styled.div`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`
