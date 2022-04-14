import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AboutIconLink(props) {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

AboutIconLink.propTypes = {};

export default AboutIconLink;
