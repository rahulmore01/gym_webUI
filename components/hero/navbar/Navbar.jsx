import React from "react";
import Image from "next/image";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      {/* navbar */}
      <div>
        {/* red offer bar */}
        <div className="offer">
          <p className="offer_para">
            Limited-time offer—the Refurbished Peloton Bike is now $995.*
          </p>
          <p className="offer_link">Shop Bike</p>
        </div>
        {/* main nav */}
        <div className="nav">
          <Image
            className="logo"
            src="/logo.svg"
            width={500}
            height={200}
            alt="Picture of the author"
          />
          <ul className="nav_links">
            <li>Bikes</li>
            <li>Bikes</li>
            <li>Bikes</li>
            <li>Bikes</li>
            <li>Bikes</li>
            <li>Bikes</li>
            <li>Bikes</li>
          </ul>
          <div className="icons">
            <Image src="/Find a Store.svg" width={500} height={200} />
          </div>
        </div>
      </div>
    </>
  );
}
