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
                <h4>Capgemini</h4>
                <h5>Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Senior Analyst (Jan 2024 – Present), Pune: Salesforce workflow optimization through architecture 
              and custom object analysis; automated testing using Java, Selenium, TestNG, Cucumber; 
              scalable POM-based framework development; test data management with MongoDB; 
              CI/CD integration; peer code reviews, mentoring, and 
              automation performance optimization driving quality improvements and faster enterprise release cycles
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Clustor Computing</h4>
                <h5>Intern - 6 Months</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Data Analytics Intern (Feb 2023 – Jul 2023), Nagpur: 
              worked with Python and machine learning libraries 
              for data processing and analysis; 
              conducted in-depth analytical studies to deliver actionable insights aligned with customer goals; 
              collaborated with cross-functional teams to design and present 10 interactive data visualizations,
               effectively simplifying complex findings for stakeholders using Python, NumPy, Pandas, 
               Matplotlib, Seaborn, and machine learning techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Persistent Systems</h4>
                <h5>Summer Intern - 3 Months </h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Full Stack Developer Intern (Apr 2022 – Jun 2022): developed web applications 
              using HTML, CSS, and JavaScript, gaining hands-on experience in building responsive user interfaces 
              and achieving first exposure to a corporate work environment and professional software development practices.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
