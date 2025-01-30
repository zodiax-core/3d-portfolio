import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Welcome</h2>
            <h1>
              to 
              <br />
              <span>Zodiax</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Agency of Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designers</div>
              <div className="landing-h2-2">Developers</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developers</div>
              <div className="landing-h2-info-1">Designers</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
