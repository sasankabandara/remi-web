// Links.js
import React from 'react';
import '../links/links.css';

const linksData = [
  { imgSrc: 'images/1.png', alt: 'Twitter', label: 'Twitter' },
  { imgSrc: 'images/2.png', alt: 'Geckoterminal', label: 'Geckoterminal' },
  { imgSrc: 'images/3.png', alt: 'Telegram', label: 'Telegram' },
  { imgSrc: 'images/4.png', alt: 'DeDust', label: 'DeDust' },
  { imgSrc: 'images/5.png', alt: 'DexScreener', label: 'DexScreener' },
  { imgSrc: 'images/6.png', alt: 'Moontok', label: 'Moontok' },
];

const Links = () => {
  return (
    <div className="links-container">
      {linksData.map((link, index) => (
        <div key={index} className="link-item">
          <img src={link.imgSrc} alt={link.alt} className="link-icon" />
          <p className="link-label">{link.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Links;
