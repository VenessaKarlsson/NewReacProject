import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <div>
      <FooterGrid>
        <FooterText1>
          <h3>Learn more</h3>
          <h3>Contact</h3>
          <h3>Become a member</h3>
        </FooterText1>
        <FooterText2>
          <h3>Our dogs</h3>
          <h3>Shechle a meeting</h3>
          <h3>Adress: jdjdjd</h3>
        </FooterText2>
        <FooterText3>
          <h3>Reviews</h3>
          <h3>Number #1 dog shelter</h3>
          <h3>Sign in</h3>
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
  height: 40vh;
  width: 100%;
  background-color: #212529;
  /* botton: 0, ensures that the footer stays at the bottom of the page */
  bottom: 0;
`
const FooterText1 = styled.div`
  color: white;
  font-size: 1.3rem;
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
