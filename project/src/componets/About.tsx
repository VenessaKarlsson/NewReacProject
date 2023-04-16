import React, { useContext } from 'react'
import { GiveInfo } from '../GiveInfo'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface AboutProps {
  firstname1: string
  firstname2: string
  lastname: string
  counter: number
}

function About(props: AboutProps) {
  // Man skapar en variabel i detta fall msg för att få ut informationen i detta fall "Dogs without Homes" på sidan
  const msg = useContext(GiveInfo)

  return (
    <div>
      <Wrapp>
        <AboutHeader>
          <h1>About Us</h1>
        </AboutHeader>
        <AboutText>
          <h4>
            {props.firstname1} & {props.firstname2} {props.lastname} started{' '}
            {msg} in {props.counter}
          </h4>
          <br></br>
          <p>
            {msg} is a non-profit dog shelter company that is dedicated to
            rescuing and rehoming dogs in need. We are located in a different
            cities and work with local animal control agencies, veterinary
            clinics, and other shelters to provide a safe and caring environment
            for dogs who have been abandoned, neglected, or abused. <br></br>
            <br></br>
            The shelter is staffed by a team of dedicated volunteers and
            employees who work tirelessly to ensure that every dog that comes to{' '}
            {msg} also have a robust adoption program that helps find loving and
            permanent homes for their dogs. <br></br>
            <br></br>We carefully screen potential adopters to ensure that they
            are a good match for the dog's needs and personality, and provide
            ongoing support and resources to help ensure a successful adoption.
            Overall, our goal is to be a compassionate and dedicated dog shelter
            that is making a positive difference in the lives of dogs and the
            community we serve.
          </p>
        </AboutText>
      </Wrapp>
      {/*
       <h1>{msg}</h1>
      <h2>Välkommen till vår sida</h2>
      <p>Nyfiken? Kika på våra hundar</p>
      <button>
        <Link to="/test/1">Hund1</Link>
      </button>
      <button>
        <Link to="/test/2">Hund2</Link>
      </button> */}
    </div>
  )
}

export default About

const Wrapp = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/img/aboutImg.jpg');
  height: 120vh;
  display: flex;
  background-position: center;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`
const AboutHeader = styled.div`
  color: white;
  margin-top: 12vh;
  border-bottom: 1px solid white;
  /* border-bottom-width = sets the width of the underline/border-bottom line */
  border-bottom-width: 4px;

  @media only screen and (max-width: 550px) {
    margin-top: 1vh;
  }
`
const AboutText = styled.div`
  /* padding: 20rem; */
  margin-bottom: 20vh;
  margin-left: 14vw;
  margin-right: 14vw;
  margin-top: 5vh;
  font-size: 1.3rem;
  color: white;
  font-weight: 400;
  border: 0.3vw solid white;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
`
