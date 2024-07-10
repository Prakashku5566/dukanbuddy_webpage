import Shapes from "./Shapes";
import PropTypes from "prop-types";

const CommonPage = ({ children }) => {
  return (
    <main className='overflow-hidden position-relative'>
      <header className='header alter3-header section gradient gradient-primary-auxiliary text-contrast'>
        <Shapes />
        <div className='container bring-to-front p-4'>{children}</div>
      </header>
    </main>
  );
};
CommonPage.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CommonPage;

export const WhyYouChoose = () => {
  return (
    <div className='section-heading text-center'>
      <h2 className='heading-line'>Why you should choose Dukanbuddy?</h2>
      <p className=''>
        At DukanBuddy, we cater to a diverse range of micro, small, and medium
        businesses, ensuring our solutions meet the unique needs of every
        enterprise. Whether you run a grocery/kirana store, a restaurant, a
        garment shop, or even a manufacturing company, DukanBuddy is designed to
        support your business. From small vegetable vendors to medium-sized
        businesses, our platform offers streamlined inventory and sales
        management, efficient billing, order management, enhanced stock
        tracking, marketing tools, and easy credit options. No matter the size
        or type of your business, DukanBuddy provides the tools you need to
        thrive
      </p>
    </div>
  );
};

export const CommonPageBlogs = ({ children }) => {
  return (
    <main className='overflow-hidden position-relative'>
      <header className='header alter3-header section gradient  text-contrast'>
        <Shapes />
        <div className='container bring-to-front p-4'>{children}</div>
      </header>
    </main>
  );
};
CommonPageBlogs.propTypes = {
  children: PropTypes.node.isRequired,
};
