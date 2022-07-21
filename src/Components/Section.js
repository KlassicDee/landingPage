import React from "react";
import "./Styles/Section.css";

const Section = () => {
  return (
  
    <div className="section">
    {/* SERVICES SECTION A */}
      <section className="services">
        <div className="services-about">
          <h2>
            Automated <br /> portfolio tracking
          </h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. <br />
            Not thoughts all exercise blessing.
          </p>
        </div>

        <div className="quote">
          <img src="./images/monial2.png" />
        </div>
      </section>
      {/*CARD SECTION B */}
      <section>
        <div className="card-wrapper">
          <div className="services-card">
            <h3>01</h3>
            <div className="card-content">
              <img src="./images/Group 307.png" />
              <h2>Connect wallets & companies</h2>
              <p>
                Indulgence way everything joy alteration
                <br />
                boisterous the attachment.
                <br />
                Party we years to order allow asked of.
              </p>
            </div>
          </div>
          <div className="services-card">
            <h3>02</h3>
            <div className="card-content">
              <img src="./images/Group 308.png" />
              <h2>Review transactions</h2>
              <p>
                Indulgence way everything joy alteration
                <br />
                boisterous the attachment.
                <br />
                Party we years to order allow asked of.
              </p>
            </div>
          </div>
          <div className="services-card">
            <h3>03</h3>
            <div className="card-content">
              <img src="./images/Group 309.png" />
              <h2>Get income insights</h2>
              <p>
                Indulgence way everything joy alteration
                <br />
                boisterous the attachment.
                <br />
                Party we years to order allow asked of.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CHOICE SECTION C */}
      <section className="choose">
        <div className="choose-one">
          <div className="choose-image">
            <img src="./images/Group 43.png" />
          </div>
          <div className="choose-about">
            <h6>WHY CHOOSE US</h6>
            <h1>
              Track your payments
              <br /> on the go with the <br />
              best way possible
            </h1>
            <p>
              Indulgence way everything joy alteration boisterous
              <br />
              the attachment.Party we years to order allow asked of.
            </p>
            <img src="./images/Rect 15.png" />
            <ul>
              <li>Get Overview at a glance</li>
            </ul>
            <ul>
              <li>Deposit fund easily,security</li>
            </ul>
            <ul>
              <li>Get Live Support</li>
            </ul>
          </div>
        </div>
        <div className="choose-two">
          <div className="choose-two-about">
            <h6>WHY CHOOSE US</h6>
            <h3>
              Save money with
              <br /> proper transaction
            </h3>
            <p>
              We so opinion friends me message as delight. <br />
              Whole front do of plate heard oh ought.
              <br />
              His defective nor convinced residence own.
            </p>
            <div className="choose-two-left-image">
              <img src="./images/testimonial.png" />
            </div>
          </div>
          <div className="choose-two-right-image">
            <img src="./images/imggg.png" />
          </div>
        </div>
        <div className='features'>
          <img src="./images/featuresss.png"/>
        </div>
      </section>
      {/* TESTIMONIAL SECTION D */}
  <section className='testimonials'>
    <div className='t-texts'>
      <h2>Testimonials</h2>
      <p>We so opinion friends me message as delight. Whole front do of plate heard oh
        
    <br/> ought. His defective nor convinced residence own.</p>
    </div>
    <div className="T-images">
      
      <img src='./images/T-image1.png'/>
  
      <img src='./images/T-image2.png'/>
    
    </div>
    <div className='stats'>
      <img src= './images/Stats.png'/>
    </div>
  </section>
  {/* BLOGS SECTION E */}
  <section>
  <h3>Recent Blogs</h3>
    <div className='blog'>
    
    <div className='blog-text'>
    <h6>BEST PRACTICES</h6>
    <p>In design active temper be uneasy.<br/>
    Thirty for remove plenty regard.</p>
    <a href='#'>Read More</a>
    </div>
    <div className='b-img'>
      <img src='./images/blog-img.png'/>
    </div>
    </div>
    <div className='b-row'>
    <img src ='./images/row.png'/>
    </div>
  </section>
{/* SECTION FAQ */}
<section className='Faq'>
  <div>
<h3>Frequently<br/> asked questions</h3>
  </div>
  <div className="faq-display">
  <div className='faq-cards-wrapper'>
    <div className='faq-card'>
      <h6>The expense windows adapted sir. Wrong widen drawn.</h6>
      <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing <br/>
      welcomed ladyship she met humoured sir breeding her. </p>
    </div>
    <div className='faq-card'>
    <h6>The expense windows adapted sir?</h6>
    </div>
    <div className='faq-card'>
    <h6>Simple innate summer fat appear basket his desire joy?</h6>
    </div>
    <div className='faq-card'>
    <h6>Six curiosity day assurance bed necessary</h6>
    </div>
    <div className='faq-card'>
    <h6>Produce say the ten moments parties?</h6>
    </div>
  </div>
  <div className='More-faq'>
    <img src='./images/Vector 355.png'/>
    <h5>Do you have more questions?</h5>
<p>End-to-end payments and financial<br/>
 management in a single solution. Meet the right platform to help realize.</p>
  <button className='faq-btn'>
    Shoot a Direct Mail
  </button>
  </div>
  </div>
 

  <div className='faq-section'>
  <h3>Discover a better way to<br/>
   manage spendings</h3>
  <button className='faq-section-btn'>
   Get Started Now
 </button>
 {/* <img src ='./images/dots.png'/>  */}
  </div>
 
  </section>

    </div>
  );
};

export default Section;
