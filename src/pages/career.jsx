import CommonPage from "./CommonPage";

const CareerPage = () => {
  const contactEmail = "Contact@dukanbuddy.com";
  const contactPhone = "+91 6372-184-169";
  // const sendResume = (email) => {
  //   const subject = encodeURIComponent(
  //     "Application for Position at Dukanbuddy"
  //   );
  //   const body = encodeURIComponent(
  //     "Dear Hiring Team,\n\nPlease find attached my resume for your consideration.\n\nRegards,\n[Your Name]"
  //   );
  //   const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  //   window.location.href = mailtoLink;
  // };

  return (
    <CommonPage>
      <h1 className='text-center mb-4 text-white'>Careers at Dukanbuddy</h1>

      <p className='lead text-center mb-5 text-white'>
        Join our team and be part of reshaping the future of finance for{" "}
        <p className='lead text-center mb-5 text-white'>
          Join our team and be part of reshaping the future of finance for
          India&apos;s thriving MSME and healthcare sectors.
        </p>
        thriving MSME and healthcare sectors.
      </p>

      <div className='row mb-4'>
        <div className='col-lg-6'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
              <h2 className='text-primary'>Digital Marketing & SEO</h2>
              <p className='text-primary flex-grow-1'>
                We are looking for creative individuals with expertise in
                digital marketing strategies and search engine optimization.
                Join us in driving Dukanbuddy&apos;s online presence and
                ensuring our solutions reach our target audience effectively.
              </p>
              {/* <button
                onClick={() => sendResume("madhurilenka11@gmail.com")}
                className='btn btn-primary mt-auto'
              >
                Send Your Resume
              </button> */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
              <h2 className='text-primary'>Sales Executive</h2>
              <p className='text-primary flex-grow-1'>
                Are you passionate about sales and building client
                relationships? Join our sales team to promote Dukanbuddy&apos;s
                innovative solutions and expand our customer base across India.
              </p>
              {/* <button
                onClick={() => sendResume("madhurilenka11@gmail.com")}
                className='btn btn-primary mt-auto'
              >
                Send Your Resume
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className='row mb-4'>
        <div className='col-lg-6'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
              <h2 className='text-primary'>Business Development</h2>
              <p className='text-primary flex-grow-1'>
                Drive growth and strategic partnerships as a business
                development professional at Dukanbuddy. We are seeking
                individuals with a strong business acumen to explore new
                opportunities and expand our market presence.
              </p>
              {/* <button
                onClick={() => sendResume("madhurilenka11@gmail.com")}
                className='btn btn-primary mt-auto'
              >
                Send Your Resume
              </button> */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
              <h2 className='text-primary'>Content Writer</h2>
              <p className='text-primary flex-grow-1'>
                Join our content team to craft engaging and informative content
                that resonates with our audience. We&apos;re looking for
                storytellers who can articulate our brand&apos;s message and
                vision effectively.
              </p>
              {/* <button
                onClick={() => sendResume("madhurilenka11@gmail.com")}
                className='btn btn-primary mt-auto'
              >
                Send Your Resume
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className='row mb-4'>
        <div className='col-lg-6'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
              <h2 className='text-primary'>Graphic Designer</h2>
              <p className='text-primary flex-grow-1'>
                Do you have a passion for visual storytelling? Join our creative
                team as a graphic designer to conceptualize and create
                compelling visuals that enhance our brand identity and
                communication materials.
              </p>
              {/* <button
                onClick={() => sendResume("madhurilenka11@gmail.com")}
                className='btn btn-primary mt-auto'
              >
                Send Your Resume
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className='section-heading text-center mt-8'>
        <h2 className='heading-line'>Why you should choose Dukanbuddy?</h2>
        <p className='lead text-center mb-5 text-white'>
          At DukanBuddy, we are committed to creating a vibrant and supportive
          work environment that values creativity, innovation, and professional
          growth. Join us to be part of a team dedicated to revolutionizing
          India&apos;s MSME and healthcare sectors with cutting-edge solutions
          tailored to meet diverse business needs. Whether you&apos;re starting
          your career or looking to advance in a dynamic industry, DukanBuddy
          offers the opportunity to thrive and make a significant impact.
        </p>
        <h5 className='heading-line'>
          Email us at {contactEmail} or Whatsapp us at {contactPhone}
        </h5>
      </div>

      {/* Uncomment below to add a call-to-action section */}
      {/* <div className='text-center mt-5'>
        <p className='text-primary'>
          Interested in joining us? Explore our current openings and apply today!
          <br />
          <a href='/careers' className='btn btn-primary mt-3'>
            View Openings
          </a>{" "}
          to learn more about career opportunities at Dukanbuddy.
        </p>
      </div> */}
    </CommonPage>
  );
};

export default CareerPage;
