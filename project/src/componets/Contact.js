import React, { useState, useContext } from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import { GiveInfo } from '../GiveInfo'

function Contact() {
  const msg = useContext(GiveInfo)

  const [color, setColor] = useState(true)

  const handleClick = () => {
    setColor(!color)
  }

  //Skapar förutsättningar för våra states, default och inkommande värden
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState({})

  const handleForm = (e) => {
    e.preventDefault()
    if (!firstName) {
      setError({ firstName: 'Please be kind, and fill in your firstname' })
    }
    if (!lastName) {
      setError({ password: 'Please fill in your lastname' })
    }
    if (!email) {
      setError({ email: 'Please fill in your email' })
    }
    if (!password) {
      setError({ password: 'Please fill in your password' })
    }
    console.log('Form is submitted')
  }

  return (
    <div>
      <Form onSubmit={handleForm}>
        <h1>Become a member today</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Firstname *</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="Enter firstname"
          />
          {error.firstName && <span>{error.firstName}</span>}
          {/* Om användaren inte har fyllt i sitt förnamn så ska man få detta error meddelande
          'Please be kind, and fill in your firstname' */}
          <Form.Label>Lastname *</Form.Label>

          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="Enter Lastname"
          />
          {error.lastName && <span>{error.lastName}</span>}

          <Form.Label>Email address *</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {error.email && <span>{error.email}</span>}

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password *</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {error.password && <span>{error.password}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <ButtonSection
          type="submit"
          onClick={handleClick}
          style={{ backgroundColor: color ? 'white' : 'green' }}
        >
          Sign Up
        </ButtonSection>
      </Form>
      <h1>{msg}</h1>
    </div>
  )
}

export default Contact

const ButtonSection = styled.button`
  padding: 20px 80px;
  border-radius: 3px;
`
