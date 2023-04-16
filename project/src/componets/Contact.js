import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import { useContext } from 'react'
import { GiveInfo } from '../GiveInfo'

function Contact() {
  const msg = useContext(GiveInfo)

  //Skapar förutsättningar för våra states, default och inkommande värden
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState({})

  const [color, setColor] = useState(true)

  const [message, setMessage] = useState('')

  // onClick eventet tittar om color inte är sant så är färgen på knappen satt till vit
  const handleClick = () => {
    setColor(!color)
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (!firstName) {
      setError({ firstName: 'Please be kind, and fill in your firstname' })
      // document.getElementById('colorFirstName').style.backgroundColor =
      //   '#d02224'
    }
    if (firstName && lastName) {
      setMessage(
        `Hello ${firstName}  ${lastName}! Thank you for joining the ${msg} community.`
      )
    } else if (!lastName) {
      setError({ lastName: 'Please fill in your lastname' })
    } else if (!email) {
      setError({ email: 'Please fill in your email' })
    } else if (!password) {
      setError({ password: 'Please fill in your password' })
    }

    console.log('Form is submitted')
  }

  return (
    <div>
      <FormCoantiner>
        <Form onSubmit={handleForm}>
          <FormHeader>
            <h1 style={{ marginBottom: '6vh' }}>Become a member:</h1>
          </FormHeader>
          <ContactHeaderText>
            <h4>
              You wanna help our furry friends in need? <br></br>And make a
              difference in the lives of sheltered dogs <br></br>Sign up today!{' '}
            </h4>
          </ContactHeaderText>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Firstname *</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="Enter firstname"
              style={{
                border: 'none'
              }}
              id="colorFirstName"
            />
            {/* Skriver ut error meddelandet till firstName */}
            {error.firstName && <span>{error.firstName}</span>} <br></br>
            <Form.Label>Lastname *</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Enter Lastname"
              // style={{width: '200px' }}
              style={{ border: 'none' }}
            />
            {error.lastName && <span>{error.lastName}</span>} <br></br>
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{ border: 'none' }}
            />
            {error.email && <span>{error.email}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ border: 'none' }}
            />
            {error.password && <span>{error.password}</span>}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <ButtonSection
            type="submit"
            onClick={handleClick}
            style={{
              backgroundColor: color ? 'white' : 'green'
            }}
          >
            Sign Up
          </ButtonSection>
          <MessageText>
            <p>{message}</p>
          </MessageText>
        </Form>
      </FormCoantiner>
    </div>
  )
}

export default Contact

const ButtonSection = styled.button`
  padding: 10px 55px;
  border-radius: 3px;
  margin-bottom: 10vh;
  border: none;
`
const ContactHeaderText = styled.div`
  color: white;
  margin-bottom: 2vh;
`

const FormCoantiner = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('./img/c5.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
const FormHeader = styled.div`
  margin-top: 8vh;
`

const MessageText = styled.div`
  margin-bottom: 10vh;
  color: white;
  font-size: 20px;
  font-weight: 500;
`
