import React from 'react';

const Experience = (props) => {
  const experience = props.experience;
  return (
    <section class="resume-section" id="experience">
      <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Senior Web Developer</h3>
            <div class="subheading mb-3">Intelitec Solutions</div>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">March 2013 - Present</span>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Web Developer</h3>
            <div class="subheading mb-3">Intelitec Solutions</div>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">December 2011 - March 2013</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
