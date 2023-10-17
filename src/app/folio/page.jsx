import Link from "next/link";
import React from "react";
import "./folio.scss";
import Image from "next/image";

const Folio = () => {
  return (
    <div className="folio">
      <h1 className="subtitle">Choose Your Gallery</h1>

      <div className="folioWraps">
        <Link className="item" href="/folio/illustrations">
          <Image src="/illus.jpeg" width={300} height={350}alt="folio-imgs"/>
          <span className="title">Illustrations</span>
        </Link>

        <Link className="item" href="/folio/websites">
          <Image  src="/website.jpeg" width={300} height={350} alt="folio-imgs"/>
          <span className="title">Websites</span>
        </Link>

        <Link className="item" href="/folio/applications">
          <Image src="/apps.jpeg" width={300} height={350} alt="folio-imgs"/>
          <span className="title">Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Folio;
