import CommonPage, { WhyYouChoose } from "./CommonPage";
import { Helmet } from "react-helmet";
// import Shapes from "./Shapes";
const About = () => {
  return (
    <>

    <Helmet>
        <title>About Us | Dukanbuddy - Empowering MSMEs with AI-driven Finance</title>
        <meta
          name="description"
          content="Learn about Dukanbuddy’s mission to revolutionize MSME and healthcare finance in India using AI and machine learning. Founded by global finance experts."
        />
        <meta property="og:title" content="About Dukanbuddy" />
        <meta
          property="og:description"
          content="Discover how Dukanbuddy empowers Indian MSMEs with smart finance and technology-driven lending solutions."
        />
        <meta property="og:image" content="https://dukanbuddy.com/og-image.jpg" />
        <meta property="og:url" content="https://dukanbuddy.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dukanbuddy.com/about" />
      </Helmet>
    <CommonPage>
      <h1 className='text-center mb-4'>About Us</h1>
      <p className='lead text-center mb-5'>
        Welcome to Dukanbuddy
        <br />
        At Dukanbuddy, we&apos;re on a mission to revolutionize India&apos;s
        lending landscape through cutting-edge, AI-driven, and machine
        learning-powered solutions. Founded by industry veterans with over 30
        years of combined experience in the banking and fintech sectors in the
        United States, Dukanbuddy brings a wealth of knowledge and expertise to
        the Indian market.
      </p>

      <div className='row'>
        <div className='col-lg-6'>
          <h2>Our Vision</h2>
          <p>
            We are dedicated to empowering MSME customers and transforming the
            healthcare finance ecosystem in India. Our goal is to streamline all
            facets of MSME requirements, allowing businesses to focus on their
            core operations while we handle the complexities of the lending
            process.
          </p>
        </div>
        <div className='col-lg-6'>
          <h2>Our Founders</h2>
          <p>
            Our founders have previously served at renowned American banks and
            have a profound understanding of global finance. Their extensive
            experience and passion for innovation drive our mission to elevate
            the Indian MSME sector. With a deep commitment to utilizing advanced
            technology, our founders are steering Dukanbuddy towards a future
            where financial processes are seamless and efficient.
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-6'>
          <h2>Our Expertise</h2>
          <p>
            With a strong foundation in serving global clients, our team brings
            unparalleled expertise to the Indian market. Our solutions are
            designed to meet the unique needs of MSMEs and healthcare providers,
            ensuring that they have access to the financial resources they need
            to grow and thrive.
          </p>
        </div>
        <div className='col-lg-6'>
          <h2>Our Commitment</h2>
          <p>
            At Dukanbuddy, we believe in the power of technology to transform
            finance. Our AI-driven and machine learning-powered solutions are at
            the forefront of this transformation, providing innovative and
            efficient lending processes. We are committed to making a positive
            impact on India&apos;s MSME and healthcare sectors, helping
            businesses achieve their full potential.
          </p>
        </div>
      </div>

      <div className='mt-5 '>
        <WhyYouChoose />
      </div>

      {/* <div className='text-center mt-5'>
        <p>
          Join us on our journey to reshape the future of finance for
          India&apos;s thriving MSME and healthcare sectors.
          <br />
          <a href='/contact' className='btn btn-primary mt-3'>
            Contact Us
          </a>{" "}
          to learn more about how Dukanbuddy can empower your business.
        </p>
      </div> */}
    </CommonPage>
</>
  );
};

export default About;
