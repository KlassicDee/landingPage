import React from "react";
import { FaInstagram,FaFacebookMessenger,FaTwitter} from 'react-icons/fa';
import "./Styles/Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="left-area">
          <h2>AR Shakir</h2>
          <p>
            Finance helps companies
            manage payment easily
          </p>
        <div className='socials'>
<FaInstagram/>
<FaFacebookMessenger/>
<FaTwitter/>
        </div>
        </div>
        <div className='company'>
          
            <h2>Company</h2>
            <ol className='box'>
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#"> Careers</a>
            </li>
            <li>
              <a href="#">Blog </a>
            </li>
            <li>
              <a href="#">Pricing </a>
            </li> 
            </ol>  
        
          </div>
      

          <div className='features'>
      
            <ol className='box'>
            <h2>Resources</h2>
              <li>
                <a href>Proposal Template </a>
              </li>
              <li>
                <a href>Invoice Template </a>
              </li>
              <li>
                <a href>Tutorial </a>
              </li>
              <li>
                <a href>How to Write a Contract </a>
              </li>
         
            </ol>
            
          </div>
          <div className='newsletter'>
            <h2>Join Our Newsletter</h2>

            <form action="" >
              <div className="form-search">
                <input type="text" name=""  />
                <button className="form-btn" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p>
              * Will send you weekly updates for your better finance management
            </p>
          </div>
        
      </footer>
      <div className='footer-bottom'>
            <img src=''/>
            <p>Copyright @ AR Shakir 2022.All rights reserved</p>
        </div>
    </div>
  );
}

export default Footer;
