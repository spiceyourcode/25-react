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
      setLoading(false);
    }
  }

  useEffect(() => {
    if (props.url !== "") fetchImages(props.url);
  }, [props.url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) return <p>Loading...</p>;
  if (errorMsg) return <p>{errorMsg}</p>;

  return (
    <div className={styles.container}>
      <BsArrowLeftCircleFill 
        onClick={handlePrevious} 
        className={`${styles.arrow} ${styles['arrow-left']}`} 
      />
      
      {images && images.length > 0 && (
        <img 
          className={styles['current-image']} 
          src={images[currentSlide].download_url} 
          alt={`Slide ${currentSlide + 1}`} 
        />
      )}
      
      <BsArrowRightCircleFill 
        onClick={handleNext} 
        className={`${styles.arrow} ${styles['arrow-right']}`} 
      />
      
      <div className={styles['circle-indicators']}>
        {images && images.length > 0 && images.map((_, index) => (
          <button 
            key={index}
            className={`${styles['circle-indicator']} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
