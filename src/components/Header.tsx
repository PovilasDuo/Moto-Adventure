import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faMotorcycle, faHome, faSearch, faGasPump } from '@fortawesome/free-solid-svg-icons'; 

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper" style={{backgroundColor:"#333333"}}>
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        <a href="/">Moto adventure <FontAwesomeIcon icon={faMotorcycle} /></a>
        </span>
        <ul className="right" style={{ marginLeft: "10%" }}>
          <li>
            <a href="/">Home <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a>
          </li>
          <li>
            <a href="/login">Account <FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon></a>
          </li>
          <li>
            <a href="/search">Search <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
