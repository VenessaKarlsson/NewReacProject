import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiveInfo } from '../GiveInfo'

function OurDogs() {
  const msg = useContext(GiveInfo)

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
          <OurDogsText>
            <h2>{msg}</h2>
            <h4>Our homeless dogs is waiting for you to be their hero.</h4>
          </OurDogsText>
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
                        <Card.Title>
                          <h2>{item.name}</h2>
                        </Card.Title>
                        <Card.Text>
                          <p>
                            Age: {item.age} <br></br> Breed: {item.breed}{' '}
                            <br></br> Gender: {item.gender} <br></br> About:{' '}
                            {item.about}
                            {/* {item.id} */}
                          </p>
                        </Card.Text>
                      </div>
                    </Card.Body>
                    {/* variant="success"  */}
                    <Button
                      style={{
                        backgroundColor: 'rgba(23, 26, 32, 0.8)',
                        border: 'none',
                        padding: '10px'
                      }}
                    >
                      {/* <Link key={item.id} to={`/test/${item.id}`}></Link> */}
                      <Link
                        to={`/test/${item.id} Name: ${item.name} Age: ${item.age} Breed: ${item.breed} Gender: ${item.gender} About: ${item.about} More Info: ${item.moreInfo}`}
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          fontWeight: '500'
                        }}
                      >
                        Read more about {item.name}
                      </Link>
                    </Button>
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
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/img/cardsHero1.jpg');
  background-position: center;
  background-size: cover;
  justify-content: center;
`
const OurDogsText = styled.div`
  margin-top: -1vh;
  color: white;
  border: 0.3vw solid white;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
`

const StyleCard = styled.div`
  height: 75vh;
`

const MeetText = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`
const Wrapper = styled.div`
  /* background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(img/white.jpg); */
`
