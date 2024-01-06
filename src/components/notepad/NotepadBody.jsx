function NotepadBody(props) {
  return (
    <div
      className="w-full outline-0 "
      data-placeholder="Write Your Notes Here.."
      contentEditable="true"
      role="textbox"
      suppressContentEditableWarning={true}
      onInput={props.onChange}
    >
      Write Something....
    </div>
  );
}
export default NotepadBody;
