import Image from "next/image";
import "./Home.scss";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className="home container">
      <div className="left">
        <h1>Better design for your digital products</h1>
        <p>
          Turning your ideas into reality. We bring together the terms from
          global tech industry
        </p>

        <Button url='/folio' text='See Our Works'/>
      </div>

      <div className="right">
        <Image src='/hero.png' width={600} height={600} alt="hero-img"/>
      </div>
    </div>
  );
}
