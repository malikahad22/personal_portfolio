"use client";

import {me,projects} from '@/app/constants/index';
import Hero from "@/app/sections/hero-section/Page";
import Projects from "@/app/sections/projects/Page";
import About from "@/app/sections/about-me/Page";
import Skills from "@/app/sections/Skills/Page";
import Services from "@/app/sections/services/Page";
import Contact from "@/app/sections/Contact-Me/Page";

export default function Home() {

  return (
    <>
      <div>
        <Hero me={me} />
        <Projects projects={projects} />
        <About me={me} />
        <Skills />
        <Services />
        <Contact me={me} /> 
      </div>
    </>
  );
}
