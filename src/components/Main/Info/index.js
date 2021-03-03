import PropTypes from "prop-types";

const Info = ({ msg }) => <p className="text-2xl">{msg}</p>;

Info.propTypes = {
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Info;
