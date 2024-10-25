import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";
import gsap from "gsap";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(aboutRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".about-text", {
      backgroundSize: "200%",
      color: "transparent",
      webkitBackgroundClip: "text",
      backgroundClip: "text",
      duration: 1.3,
      ease: "power3.out",
    });

    gsap.to(".about-text", {
      backgroundPosition: "200% center",
      repeat: -1,
      duration: 10,
      ease: "none",
    });

    gsap.to(".moving-gradient", {
      backgroundPosition: "200% center",
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(".about-text");
      gsap.killTweensOf(".moving-gradient");
    };
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20" ref={aboutRef}>
      <section>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold about-text moving-gradient"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #00ff00, #FFA500, #00ff00, #00ff00)",
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tentang Kami
        </h1>
        <br></br>
        <br></br>
        {personalDetails.map((person, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-semibold mb-2">
              <Link
                to="/about"
                className="bg-clip-text bg-gradient text-transparent moving-gradient"
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
            </h2>
            <p className="text-light-heading dark:text-light-heading py-2 lg:max-w-2xl ">
              {person.about}
            </p>
          </div>
        ))}
      </section>
      <br></br>
      <section>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold about-text moving-gradient"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #00ff00, #FFA500, #00ff00, #00ff00)",
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pendidikan
        </h1>
        {eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
          <Work
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
            className="text-light-heading dark:text-light-heading"
            locationClassName="text-xl text-light-heading dark:text-light-heading"
          />
        ))}
      </section>
    </main>
  );
}

export default About;
