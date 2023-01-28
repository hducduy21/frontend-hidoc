import Carousel from 'react-bootstrap/Carousel';
import Images from '~/assets/Images';
import styles from './Slider.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);

function Slider() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Images.slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Images.slider1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.slider1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;