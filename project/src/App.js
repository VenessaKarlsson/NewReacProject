import './App.css'
import Home from './componets/Home'
// Importerar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// importerar Navbar från Bootstrap, man gör det här i App.js för att den ska vra tillgänglig över allt på sidan
import { Route, Routes, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import OurDogs from './componets/OurDogs'
import About from './componets/About'
import Contact from './componets/Contact'
import Test from './componets/Test'
import { GiveInfo } from './GiveInfo'
import Footer from './componets/Footer'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            Dogs without Homes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link> */}
              <Nav.Link as={Link} to={'/about'}>
                About
              </Nav.Link>
              {/* <Link to="/about">About</Link> */}
              <Nav.Link as={Link} to={'/our-dogs'}>
                Our Dogs
              </Nav.Link>
              <Nav.Link as={Link} to={'/contact'}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={'/test'}>
                Test
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <GiveInfo.Provider value={'Dogs without Homes'}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/about/'}
            element={<About brandName="Dogs without Homes" />}
          />
          <Route path={'/our-dogs/'} element={<OurDogs />} />
          <Route path={'/contact/'} element={<Contact />} />
          {/* <Route path={'/test/:id'} element={<Test />} /> */}
          <Route path={'/test/:id'} element={<Test />} />
        </Routes>
      </GiveInfo.Provider>

      <Footer />
    </div>
  )
}

export default App
