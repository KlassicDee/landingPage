import React from "react";
import "./Styles/Header.css";


const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_content">
          <div className="texts">
            <p className="header_p">
              Managing freelance <br /> payments has never <br /> been easier
            </p>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing.
              <br /> Not thoughts all exercise blessing.
            </p>
          </div>
          <div className="text_two">
            <button className="header_btn">Get Started </button>
            <a href="#">See How it Works</a>
          </div>
        </div>
        {/* <div className="header_image">
          <img src="./images/blck.png"/>
          <img src="./images/yt.png" />
        </div> */}
        <div className='image'>
          <img src="./images/backgrnd.png"/>
        </div>
      </div>

      <div className="header_section">
        <p>Over 32k+ software businesses growing with AR Shakir</p>
        <div className="icon">
          <img src="./images/pheus.png" />
          <img src="./images/sam.png" />
          <img src="./images/Vector.png" />
          <img src="./images/zep.png" />
          <img src="./images/proto.png" />
          <img src="./images/seg.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
