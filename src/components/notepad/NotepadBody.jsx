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
export default NotepadBody;
