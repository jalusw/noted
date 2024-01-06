import PropTypes from "prop-types";

function Input(props) {
  const { type, onChange, placeholder } = props;

  return (
    <input
      className="w-full p-2 rounded shadow-border border-1 "
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
