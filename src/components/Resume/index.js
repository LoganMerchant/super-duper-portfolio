import React from "react";

function Resume() {
  return (
    <section className="title">
      <div>
        <h2>Resume</h2>
        <p>
          Download a PDF version{" "}
          <a
            href={require("../../assets/downloadable-files/resume.pdf").default}
            download="LoganMerchant-Resume"
          >
            <span>here</span>
          </a>
          !
        </p>
      </div>
      <div>
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>SQL Databases</li>
          <li>NoSQL Databases</li>
          <li>Express.js</li>
          <li>Node.js</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
