import Image from "next/image";
import HeroSection from "./components/herosection";
import { Tables } from "./components/tables";
import { Top } from "./components/top";
import { AsgaardSofa } from "./components/Asgaardsofa";
import { Blog } from "./components/blog";
import { Instagram } from "./components/instagram";
import Link from "next/link";

export default function Home() {
  return (
    
    <main>
<HeroSection/>
<Tables/> 
<Top/>
<AsgaardSofa/>
<Blog/>
<Instagram/>
</main>  );
}
