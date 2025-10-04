import Accordian from "./components/accordinan";
import RandomColor from "./components/random-color";
import StarRating from "./components/start-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data"
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
function App() {
  return (
    <>
      {/* 
      
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list?"}
        page={"1"}
        limit={"10"}
      />  
      <LoadMoreData/>
      */}
      <TreeView menus={menus} />
    </>
  );
}

export default App;
