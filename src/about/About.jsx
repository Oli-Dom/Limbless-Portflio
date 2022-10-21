import React from 'react';
import './about.css';
const about = () => {
  return (
    <>
      <section>
        <div className="container">
          <img
            id="limb-logo"
            src="https://cdn.discordapp.com/attachments/1032799148036063262/1032799585564889108/2.png"
            alt="logo"
          ></img>
        </div>
        <div className="container">
          <div class="typewriter">
            <h1>Limbless Devs.</h1>
          </div>
        </div>
        <div className="container">
          <h2>Students Exploring Tech.</h2>
        </div>
        <div className="image-container">
          <img
            class="collegeLogo"
            src="https://www.lehman.edu/media-relations-office/images/LehmanLogo_BlueGreen.png"
            alt="Lehman Logo"
          />
          <img
            className="collegeLogo"
            src="https://logos-world.net/wp-content/uploads/2021/09/NYU-Logo.png"
            alt="NYU Logo"
          />
          <img
            className="collegeLogo"
            src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/RIT-Tigers-900x0.png"
            alt="RIT Logo"
          />
          <img
            className="collegeLogo"
            src="https://www.ccny.cuny.edu/sites/default/files/2022-06/RGB_CNNY_Horizontal_Version_P2665C.png"
            alt="CCNY"
          />
          <img
            className="collegeLogo"
            src="https://www.huntercollegeathletics.com/images/logos/site/site.png"
            alt="Hunter Logo"
          />
          <img
            className="collegeLogo"
            src="https://queensknights.com/images/2019/2/14/queens.png"
            alt="Queens College"
          />
          <img
            className="collegeLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Fordham_University_Logo.png"
            alt="Fordham Logo"
          />
          <img
            className="collegeLogo"
            src="https://www.wellesley.edu/sites/default/files/assets/departments/cpa/images/wellesley_logo_280.png"
            alt="Welesley College"
          />
        </div>
      </section>
    </>
  );
};

export default about;
