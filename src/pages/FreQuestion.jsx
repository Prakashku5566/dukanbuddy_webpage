import PropTypes from "prop-types";

const FreQuestion = ({ question, answer, targetId }) => {
  return (
    <div data-aos='fade-up'>
      <div className='card shadow-box shadow-hover mb-3'>
        <div className='card-header py-3'>
          <a
            href='#'
            className='card-title collapsed'
            data-toggle='collapse'
            data-target={`#${targetId}`}
          >
            {question}
          </a>
        </div>
        <div id={targetId} className='collapse card-body'>
          {answer}
        </div>
      </div>
    </div>
  );
};

FreQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  targetId: PropTypes.string.isRequired,
};
export default FreQuestion;
