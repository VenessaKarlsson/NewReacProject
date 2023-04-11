import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import styled from 'styled-components'

function OurDogs() {
  const [dog, setDog] = useState([])

  useEffect(() => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      //Promise
      .then((response) => response.json())
      .then((dog) => setDog(dog))
  }, [])

  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <MeetText>
              <h1>We're looking for a new home </h1>
            </MeetText>
            {/* Två kolmumer design */}
            {dog.map((item) => (
              <Col md={4} key={item.id}>
                {/* mb-3 = margin-bottom 3 rem */}
                <StyleCard>
                  <Card className="mb-3">
                    <Card.Body>
                      <div>
                        <Image
                          src={item.image}
                          className="card-img-top"
                          alt="dogs"
                          fluid
                        />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <p>
                            Age: {item.age} <br></br> Breed: {item.breed}{' '}
                            <br></br> Gender: {item.gender} <br></br> About:{' '}
                            {item.about} id: <br></br>
                            {item.id}
                          </p>
                        </Card.Text>
                      </div>
                    </Card.Body>
                    <Button variant="primary">Read more</Button>
                  </Card>
                </StyleCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </div>
  )
}

export default OurDogs

const StyleCard = styled.div`
  height: 90vh;
`

const MeetText = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;

`
const Wrapper = styled.div`
  /* background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(img/white.jpg); */
`
