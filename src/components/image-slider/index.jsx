import { useState, useEffect } from "react";
import styles from './image-slider.module.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider(props) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(
        `${props.url}?page=${props.page}&limit=${props.limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    if (props.url !== "") fetchImages(props.url);
  }, [props.url]);
  if (loading) return <p>Loading...</p>;
  if (errorMsg) return <p>{errorMsg}</p>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={() => setCurrentSlide(currentSlide - 1)} className="arrow arrow-left" />
      {images &&
        images.length > 0 &&
        images.map((image) => (
          <img className="image" src={image.download_url} key={image.id} />
        ))}
      <BsArrowRightCircleFill onClick={() => setCurrentSlide(currentSlide + 1)} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
            <button className="current-indicator" onClick={() => setCurrentSlide(index)} key={index}></button>

          ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
