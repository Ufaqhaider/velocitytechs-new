import React from "react";
import "./whychoose.css";

const Service = () => {
  return (
    <div class="container-fluid content">
      <div class="block-center">
        <p>Why choose VelocityTech?</p>
        <h2 class="heading">
          Simplify your software development process and achieve your business
          goals.
        </h2>
        <div class=" card-group w-layout-grid grid-feature ">
          <div
            data-aos="zoom-in-right"
            data-aos-delay="400"
            class="card p-2 rounded shadow feature"
          >
            <div class="icon-feature-bg">
              <div class="text-block ">🎨</div>
            </div>
            <h5 class="heading-feature">Customized Design</h5>
            <p class="paragraph-feature">
              Get personalized and responsive design solutions tailored to your
              business needs, ensuring a unique and visually appealing online
              presence.
            </p>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-delay="400"
            class=" card p-2 rounded shadow feature"
          >
            <div class="icon-feature-bg">
              <div class="text-block">⏰</div>
            </div>
            <h5 class="heading-feature">Efficient Development Process</h5>
            <p class="paragraph-feature">
              Experience timely delivery of high-quality websites and mobile
              apps, allowing you to establish your online presence quickly and
              engage with your target audience.
            </p>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-delay="400"
            class=" card p-2 rounded shadow feature"
          >
            <div class="icon-feature-bg">
              <div class="text-block">🛠️</div>
            </div>
            <h5 class="heading-feature">Ongoing Support and Maintenance</h5>
            <p class="paragraph-feature">
              Leave the technical aspects to our experts. We provide continuous
              support and maintenance services to keep your websites and mobile
              apps up-to-date, secure, and optimized for performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
