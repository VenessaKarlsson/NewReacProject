import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <FooterGrid>
        <FooterText1>
          <Link
            as={Link}
            to={'/contact'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Contact
          </Link>
          <h4>Work with us</h4>
          <h4>Become a member</h4>
        </FooterText1>
        <FooterText2>
          <Link
            as={Link}
            to={'/our-dogs'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            See Our dogs{' '}
          </Link>
          <h4>Schedule a meeting</h4>
          <h4>Donate a gift</h4>
        </FooterText2>
        <FooterText3>
          <Link
            as={Link}
            to={'/about'}
            style={{ textDecoration: 'none', color: 'white', fontSize: '' }}
          >
            About Us{' '}
          </Link>
          <h4>Become a volunteer</h4>
          <h4>FAQ</h4>
        </FooterText3>
      </FooterGrid>
    </div>
  )
}

export default Footer

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'FooterText1 FooterText2 FooterText3 ';
  height: 35vh;
  width: 100%;
  background-color: #212529;
  /* botton: 0, ensures that the footer stays at the bottom of the page */
  bottom: 0;
`
const FooterText1 = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`
const FooterText2 = styled.div`
  color: white;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`
const FooterText3 = styled.div`
  color: white;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`
