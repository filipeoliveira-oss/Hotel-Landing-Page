import About from "./components/about/about"
import Deal from "./components/deal/deal"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Popular from "./components/popular/popular"
function App() {

  return (
   <div className="h-screen w-screen overflow-x-hidden ">
    <Header/>
    <Main/>
    <About/>
    <Deal/>
    <Popular/>
   </div>
  )
}

export default App
