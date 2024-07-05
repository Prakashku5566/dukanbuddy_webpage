import Shapes from "./Shapes";
import PropTypes from "prop-types";

const CommonPage = ({ children }) => {
  return (
    <main className='overflow-hidden position-relative'>
      <header className='header alter3-header section gradient gradient-primary-auxiliary text-contrast'>
        <Shapes />
        <div className='container bring-to-front p-6'>{children}</div>
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
        DukanBuddy can benefit various types of small businesses, including mom
        & pop stores, grocery stores, medicine stores, manufacturing companies,
        restaurants, cloud kitchens, book stores, gift shops, hardware stores,
        salons, and more.
      </p>
    </div>
  );
};
