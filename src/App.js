import GraphicMobile from "./components/GraphicMobile"
import GraphicDesktop from "./components/GraphicDesktop"
import Header from "./components/Header"
import Showcase from "./components/Showcase"
import StandOut from "./components/StandOut"
import Transform from "./components/Transform"
import GridMobile from "./components/GridMobile"
import GridDesktop from "./components/GridDesktop"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Transform />
      <StandOut />
      <div className="block md:hidden">
        <GraphicMobile />
      </div>
      <div className="hidden md:block">
        <GraphicDesktop />
      </div>
       <div className="hidden md:block">
        <GridDesktop />
      </div>
      <Footer />
    </>
  )
}

export default App