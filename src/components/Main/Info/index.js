import PropTypes from "prop-types";

const Info = ({ msg }) => <p className="text-2xl">{msg}</p>;

Info.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Info;
