import { useState } from "react";
import './RoomsGalleryPage.css'
import RoomGalleryContainer from "./RoomGalleryContainer";
import { ROOMS_DATA, SECTION_HEADERS } from "../../../constants/data";
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader";

const RoomsGalleryPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All"
    ? ROOMS_DATA
    : ROOMS_DATA.filter(item => item.category === activeTab);

  return (


    <section className='our-awards m-section wrapper' id="gallery">

      <SectionHeader {...SECTION_HEADERS.OurRoomsGallery} />

      <div className="gallery-page">
        <div className="tabs-bar">
          {["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="rooms-list">
          {filteredData.map(room => (
            <RoomGalleryContainer
              key={room.id}
              title={room.title}
              description={room.description}
              images={room.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsGalleryPage
