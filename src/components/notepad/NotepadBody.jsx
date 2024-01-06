import PropTypes from "prop-types";

function NotepadBody(props) {
  const { onChange } = props;
  return (
    <div
      className="w-full outline-0 "
      data-placeholder="Write Your Notes Here.."
      contentEditable="true"
      role="textbox"
      suppressContentEditableWarning={true}
      onInput={onChange}
    >
      Write Something....
    </div>
  );
}

NotepadBody.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default NotepadBody;
