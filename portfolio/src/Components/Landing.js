import React from 'react';

const Landing = (props) => {
  const landing = props.landingData;
  return (
    <section class="resume-section" id="about">
      <div class="resume-section-content">
        <h1 class="mb-0">
          {landing.lastName}
          <span class="text-primary">{landing.firstName}</span>
        </h1>
        <div class="subheading mb-5">
          {`${landing.address} - ${landing.phoneNumber} - `}
          <a href="mailto:name@email.com">{landing.email}</a>
        </div>
        <p class="lead mb-5">{landing.bio}</p>
        <div class="social-icons">
          <a class="social-icon" href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="social-icon" href="#">
            <i class="fab fa-github"></i>
          </a>
          <a class="social-icon" href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="social-icon" href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
