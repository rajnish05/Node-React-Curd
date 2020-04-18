import React from 'react';

const Footer = () =>
  (
    <footer className="footer text-center bg-light">
      <div className="container">
        <div className='row'>
          <div className ='col-4'>
            <p>Projects</p>
            <span>Latest Release</span><br/>
            <span>API</span><br/>

            
          </div>
          <div className ='col-4'>
            <img src = '/Image/logo.png' className = 'logo'></img> <br/>
            <span>Common Question</span><br/>
            <span>GitHub Project</span>

          </div>
          <div className ='col-4'>
          <p>Support</p>
            <span>Get help</span><br/>
            <span>Contact Us</span>
          </div>

        </div>
      </div>
    </footer>
  )

export default Footer;