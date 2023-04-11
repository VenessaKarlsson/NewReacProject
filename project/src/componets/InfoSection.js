import React from 'react'
import styled from 'styled-components'

function InfoSection() {
  return (
    <div>
      <Wrapper>
        <TextContainer>
        <h1>Give a Home to a Homeless Dog </h1>
        <h2>Unconditional Love Awaits You!</h2>
        <ImgSec>

        </ImgSec>
        </TextContainer>
      </Wrapper>
    </div>
  )
}

export default InfoSection

const Wrapper = styled.div`
  height: 120vh;
`

const TextContainer = styled.div`
margin-top: 10vh;
border-bottom: 1px solid black;
`

const ImgSec = styled.div`
background: url('/img/dog_lady.jpg');
height: 100vh;
width: 70%;
display: flex;
background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
   
`
