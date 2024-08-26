import Card from "./assets/components/Card"
import Footer from "./assets/components/Footer"
import NavBar from "./assets/components/Navbar"


function App() {

  return (
    <>
      <NavBar/>
      <div className="cards">
          <Card title='card 1 title' description='card 1 description'></Card>
          <Card title='card 2 title' description='card 2 description'></Card>
          <Card title='card 3 title' description='card 3 description'></Card>
          <Card title='card 4 title' description='card 4 description'></Card>

      </div>
      <Footer/>
    </>
  )
}

export default App
