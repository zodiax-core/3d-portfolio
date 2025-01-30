import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

    const workItems = [
    { title: "Aura By Apple", category: "Design", tools: "Figma" },
    { title: "Spotify", category: "Design , UI/UX", tools: "Figma" },
    { title: "Crtical Thinking", category: "Design", tools: "Adobe Illustrator" },
    { title: "Ace", category: "Design", tools: "Figma" },
    { title: "ZYNO", category: "Web Devolopment", tools: "react , Vue , Tailwind , Node" },
    { title: "Amazon Prime", category: "Redesign", tools: "Adobe Illustrator, Photoshop" },

  ];

  const workImages = [
    "/images/work01.jpeg",
    "/images/work02.jpeg",
    "/images/work03.jpeg",
    "/images/work04.jpeg",
    "/images/work05.jpeg",
    "/images/work06.jpeg",
  ];
  
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.slice(0, 6).map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4 tabIndex={1}>{item.title}</h4>
                    <p tabIndex={1}>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={workImages[index]} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
