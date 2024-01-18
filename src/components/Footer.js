import React from 'react';
import InstagramIcon  from '@mui/icons-material/Instagram';
import TwitterIcon  from '@mui/icons-material/Twitter';
import FacebookIcon  from '@mui/icons-material/Facebook';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const icons = [
  <InstagramIcon/>,
  <TwitterIcon/>,
  <FacebookIcon/>,
  <LinkedInIcon/>
];

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        {icons.map((icon,index) => (
          <div key={index} className='icon'>{icon}</div>
        ))}
      </div>
      <p> &copy; 2023 mayhem.app</p>
    </div>
  );
}

export default Footer;
