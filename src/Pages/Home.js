import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { Link } from "react-router-dom";

function Home() {
  const h1Refs = useRef([]);
  const h2Refs = useRef([]);
  const imageRefs = useRef([]);
  const linkRefs = useRef([]);
  const cloudComputingRefs = useRef([]);
  const cloudComputingHeaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    h1Refs.current.forEach((h1, index) => {
      tl.from(
        h1,
        {
          x: "-100%",
          delay: 0.8 - index * 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    });

    h2Refs.current.forEach((h2, index) => {
      tl.from(
        h2,
        {
          x: "-100%",
          delay: 0.5 - index * 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    });

    linkRefs.current.forEach((link, index) => {
      tl.from(
        link,
        {
          x: "-100%",
          delay: 0.5 - index * 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    });

    imageRefs.current.forEach((img, index) => {
      tl.from(
        img,
        {
          x: "200%",
          delay: 0.5 - index * 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    });

    cloudComputingRefs.current.forEach((cloudComputing, index) => {
      tl.from(
        cloudComputing,
        {
          y: "-100%",
          delay: 0.5 - index * 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    });

    // Animasi untuk Cloud Computing header
    tl.from(
      cloudComputingHeaderRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "-=1"
    );

    // Animasi gradient bergerak
    gsap.to(".moving-gradient", {
      backgroundPosition: "200% center",
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    // Animasi untuk NIM
    gsap.to(".moving-nim", {
      opacity: 0.7,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main className="container mx-auto max-width pt-2 pb-20">
      <h2
        ref={cloudComputingHeaderRef}
        className="text-xl text-center text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold about-text moving-gradient"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #00ff00, #FFA500, #00ff00, #00ff00)",
          backgroundSize: "300%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Cloud Computing
        <br></br>
        <br></br>
        <br></br>
      </h2>
      {personalDetails.map((person, index) => (
        <div key={index} className="md:flex justify-between items-center mb-20">
          <div className="flex flex-col items-start">
            <h1
              ref={(el) => (h1Refs.current[index] = el)}
              className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-4"
            >
              <span className="text-sky-300 moving-nim">{person.nim}</span>
            </h1>
            <div className="flex flex-col items-start">
              <Link
                ref={(el) => (h2Refs.current[index] = el)}
                to="/about"
                className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold mr-4 moving-gradient"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #00ffff)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {person.name}
              </Link>
              <span
                ref={(el) => (cloudComputingRefs.current[index] = el)}
                className="text-lg text-light-heading dark:text-light-heading md:text-xl xl:text-2xl mt-2"
              >
                {person.kelas}
              </span>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-1/2 md:ml-auto"
              src={person.img}
              alt={person.name}
            />
          </div>
        </div>
      ))}
    </main>
  );
}

export default Home;
