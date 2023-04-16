import React, { useContext } from 'react'
import { GiveInfo } from '../GiveInfo'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface AboutProps {
  firstname1: string,
  firstname2: string,
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
        <h4>
          {props.firstname1} & {props.firstname2} started {msg} in{' '}
          {props.counter}
        </h4>
        <AboutText>
          <p>
            {msg} is a non-profit dog shelter company that is dedicated to
            rescuing and rehoming dogs in need. They are located in a large
            urban center and work with local animal control agencies, veterinary
            clinics, and other shelters to provide a safe and caring environment
            for dogs who have been abandoned, neglected, or abused. <br></br>
            <br></br>
            The shelter is staffed by a team of dedicated volunteers and
            employees who work tirelessly to ensure that every dog that comes
            {/* through their doors is treated with love and care. They provide a
            variety of services to their dogs, including medical care,
            behavioral training, and socialization to help them become
            adoptable. <br></br> */}
            <br></br>
            {msg} also have a robust adoption program that helps find loving and
            permanent homes for their dogs. They carefully screen potential
            adopters to ensure that they are a good match for the dog's needs
            and personality, and provide ongoing support and resources to help
            ensure a successful adoption. In addition to their rescue and
            adoption efforts, Overall, our goal is to be a compassionate and
            dedicated dog shelter company that is making a positive difference
            in the lives of dogs and the community they serve.
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
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/img/aboutImg.jpg');
  height: 120vh;
  display: flex;
  background-position: center;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 550px) {
  }
`
const AboutHeader = styled.div`
  color: white;
  margin-top: 12vh;
  border-bottom: 1px solid white;
  /* border-bottom-width = sets the width of the underline/border-bottom line */
  border-bottom-width: 4px;
`
const AboutText = styled.div`
  /* padding: 20rem; */
  margin-bottom: 20vh;
  margin-left: 14vw;
  margin-right: 14vw;
  font-size: 1.3rem;
  color: white;
  font-weight: 400;
`
