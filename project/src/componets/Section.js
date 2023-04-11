import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Section() {
  return (
    <div>
      <Wrap>
        <ItemText>
          <HeroText>
            <h1>There's a Place for Every Dog</h1>
          </HeroText>
          <HeroText2>
            <p>Become a dog owner and give abandoned dogs a loving home</p>
          </HeroText2>
        </ItemText>
        <ButtonGroup>
          {/* <Link to="/our-dogs/">
            <LeftButton>See Our Dogs</LeftButton>
          </Link> */}
          <Link as={Link} to={'/our-dogs'} style={{textDecoration: 'none'}}>
            <LeftButton>See Our Dogs</LeftButton>
          </Link>
          <Link as={Link} to={'/contact'} style={{textDecoration: 'none'}}>
            <RightButton>Become a memeber</RightButton>
          </Link>
        </ButtonGroup>
        <DownArrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </DownArrow>
      </Wrap>
    </div>
  )
}

export default Section

const Wrap = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/img/heroImg.jpg');
  height: 120vh;
  display: flex;
  background-position: center;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    /* background-size: contain;
    background-position: top center;
    background-repeat: no-repeat; */
  }
`
const ItemText = styled.div`
  color: #e5e4e2;
  padding-top: 25vh;
  text-align: center;
  /* border-bottom: 1px solid white;
  border-bottom-width: 4px; */
  border: 0.3vw solid white;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;

  @media only screen and (max-width: 550px) {
    padding-left: 4vw;
    padding-right: 4vw;
  }
`
const HeroText = styled.div`
  font-size: 1.5rem;
  /* border-bottom: 1px solid white; */
`
const HeroText2 = styled.div`
  font-size: 1.3rem;
  padding-top: 3vh;
  font-weight: 600;
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  position: relative;
  top: 50%;
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  align-items: center;
  color: white;
  text-align: center;
  padding: 12px 70px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  margin: 20px;


  @media only screen and (max-width: 550px) {
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    margin-bottom: 15vh;
  }
`
const RightButton = styled(LeftButton)`
  background-color: rgba(227, 213, 202, 1);
  color: black;
`

const DownArrow = styled.div`
  height: 50px;
  margin-top: 20px;
  margin-bottom: 2vh;
  width: 50px;
  /* Gör animation för pilen */
  animation: animateDown infinite 1.5s;
`
