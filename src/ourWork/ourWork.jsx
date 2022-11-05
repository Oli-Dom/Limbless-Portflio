import React from 'react';
import './ourWork.css';
const ourWork = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2>Experience</h2>
        </div>
        <div className="experience_container">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e5883174742486c5c56a526/1626472051547-JV3OYYJB4KZ47NTECHLO/ColorStack+logo.png"
            alt="ColoStack Logo"
            className="experience"
          />
          <img
            src="https://ga-core.s3.amazonaws.com/cms/files/files/000/002/174/original/AllStarCode.png"
            alt="ASC"
            className="experience"
          />
          <img
            src="https://fintechfocus.com/static/logo-1f90a575af0c55e43180fdf957f14976.png"
            alt="FTF"
            className="experience"
          />
          <img
            src="https://www.seekpng.com/png/full/203-2037201_bam-orange-logo-no-background-balyasny-asset-management.png"
            alt="Bam"
            className="experience"
          />
        </div>
      </section>
    </>
  );
};

export default ourWork;
