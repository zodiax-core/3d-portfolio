import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                 <h4>Senior Designer</h4>
                <h5>Freelauncer</h5>
              </div>
              <h3>5 years</h3>
            </div>
            <p>
              I have worked with multiple companies as a Graphic Designer,
              gaining extensive experience in creating impactful visuals and 
              branding solutions. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Mexbird Technologies</h5>
              </div>
              <h3>2 years</h3>
            </div>
            <p>
              I have 2 years of experience as a Senior Developer at Mexbird Technologies,
              where I specialized in creating robust, scalable digital solutions. I honed
              my skills in delivering high-quality, efficient, and innovative projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder and Ceo</h4>
                <h5>Zodiax</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
               Here <span>TAYYAB ASIF</span> As CEO of Zodiax, I lead a team of talented 
               professionals in providing top-notch services in web development, 
               graphic design, video editing, SEO, and UI/UX design. My focus is
               on delivering innovative solutions tailored to meet the unique needs of each client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
