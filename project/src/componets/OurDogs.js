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
        <ImgOf>
          {/* This is where the img is placed */}
          <ImgText>
            <h2>Our Dogs</h2>
            <p>
              A suitable dog owner is someone who understands the responsibility
              of owning a dog and is committed to providing their pet with a
              safe and loving home. They are willing to make the necessary time,
              effort, and financial investment required to care for their dog's
              physical and emotional needs.
              <br></br>
              <br></br>A suitable dog owner understands the importance of
              regular exercise, proper nutrition, and grooming. They provide
              their dog with a balanced diet and ensure that their pet receives
              the necessary medical attention, including vaccinations and
              routine checkups. <br></br>
              <br></br>They also understand the importance of keeping their dog
              clean and groomed, which includes regular baths, nail trimming,
              and coat brushing. A suitable dog owner is also patient and kind
              with their pet. They are willing to invest the time and effort
              required to train their dog and establish a strong bond.
            </p>
          </ImgText>
        </ImgOf>

        <MeetText>
          <h1>We're looking for a new home </h1>
        </MeetText>
        <Container>
          <Row>
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
const ImgOf = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: url('/img/cardsHero1.jpg');
  background-position: center;
  background-size: cover;
  /* align-items: center; */

`

const ImgText = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 15vh;

`

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
