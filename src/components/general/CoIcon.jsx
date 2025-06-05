import PropTypes from 'prop-types';

const CoIcon = ({ icon, text }) => {
    return (
        <div className="co-icon">
            <img src={icon} alt="Icon" />
            <span className="co-icon__text text-normal">{text}</span>
        </div>
    );
};

CoIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string
};

export default CoIcon;