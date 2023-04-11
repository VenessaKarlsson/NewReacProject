import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { GiveInfo } from '../GiveInfo'
import styled from 'styled-components'

function Carousels() {
  const msg = useContext(GiveInfo)

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/heroImg2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Text2>
              <h2>Where dogs come to heal and find hope</h2>
              <p>
                When dogs get abandoned by their owners and have no place to go,{' '}
                <span>{msg}</span> is a place for dogs to recover from prior
                trauma or get retrained so that all of our dogs become suitable
                for every household.
              </p>
            </Text2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/mix3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Text1>
              <h2>Find your new best friend at our shelter</h2>
              <p>
                There are over a hundred million homeless dogs worldwide, and we
                at <span>{msg}</span> are trying to decrease the number of
                homeless dogs by creating the <span>{msg}</span> dog shelter{' '}
              </p>
            </Text1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/dog_lady.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Bringing happiness home, one tail at a time.</h3>
            <p>
              Dogs are one of the most fun-loving and beloved members of a
              family. But they also need a chance to showcase all of their
              characteristics by having a home to belong to.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousels

const Text1 = styled.div`
  color: black;
  font-weight: 700;
  font-size: 1.2rem;
`
const Text2 = styled.div`
  color: white;
`
