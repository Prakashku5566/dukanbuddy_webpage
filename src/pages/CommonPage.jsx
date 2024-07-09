import Shapes from "./Shapes";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className='section-heading text-center'>
      <h2 className='heading-line'> {t("WHYYOUCHOOSE.SHOULD_CHOOSE")}</h2>
      <p className=''>{t("WHYYOUCHOOSE.SHOULD_CHOOSE_DETAILS")}</p>
    </div>
  );
};
