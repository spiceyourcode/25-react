import Accordian from "./components/accordinan"
import RandomColor from "./components/random-color"
import StarRating from "./components/start-rating"

function App() {
 

  return (
    <>
     <Accordian/>
     <RandomColor/>
     <StarRating noOfStars={10}/>
    </>
  )
}

export default App
