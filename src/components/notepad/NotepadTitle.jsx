import PropTypes from "prop-types";

function NotepadTitle(props) {
  const { placeholder, onChange, value } = props;
  return (
    <textarea
      className="w-full text-3xl font-bold  outline-0 resize-none "
      rows={1}
      placeholder={placeholder || "Title..."}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}

NotepadTitle.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default NotepadTitle;
