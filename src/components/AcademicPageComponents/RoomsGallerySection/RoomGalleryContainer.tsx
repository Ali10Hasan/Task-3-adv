
import MotionWrapper from "../../../Animation/MotionWrapper";
import Slider from "../../Slider/Slider";
import "./RoomsGalleryPage.css"

interface RoomGalleryProps {
  title: string;
  description: string;
  images: string[];
}

const RoomGalleryContainer = ({ title, description, images }: RoomGalleryProps) => {
  return (
    <MotionWrapper>

      <div className="room-gallery-card">
        <div className="images-slider-wrapper">

          <Slider
            data={images}
            itemsVisible={4}
            other={title}
            renderItem={(imgSrc: string) => (
              <div className="gallery-img-box">
                <img src={imgSrc} alt="room" />
              </div>
            )}
          />

        </div>

        <div className="room-info-footer">
          <p>{description}</p>
        </div>
      </div>
    </MotionWrapper >

  );
};

export default RoomGalleryContainer;
