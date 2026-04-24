import { useState } from 'react';
import './Slider.css';
import arrowLeft from '../../assets/icons/arrow-left.png';
import arrowRight from '../../assets/icons/arrow-right.png';

interface SliderProps<T> {
  data: T[];
  itemsVisible: number;
  other?: string | number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export const Slider = <T,>({ data, itemsVisible, other, renderItem }: SliderProps<T>) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < data.length - itemsVisible) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div
      className="slider-wrapper__Dynamic"
      style={{ '--items-to-show': itemsVisible } as React.CSSProperties}
    >
      <div className="slider-window__Dynamic">
        <div
          className="slider-track__Dynamic"
          style={{ '--current-index': currentIndex } as React.CSSProperties}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="slider-item__Dynamic"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls__Dynamic between-flex">


        <div className='cont flex'>
          <button className="control-btn__Dynamic" onClick={prev} disabled={currentIndex === 0}>
            <img src={arrowLeft} />
          </button>
          <button className="control-btn__Dynamic" onClick={next} disabled={currentIndex >= data.length - itemsVisible}>
            <img src={arrowRight} />
          </button>
        </div>
        <h3 className='other'>
          {other}
        </h3>
      </div>

    </div>
  );
};

export default Slider
