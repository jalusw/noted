function NotepadTitle(props) {
  return (
    <input
      className="w-full p-2 border-2 rounded "
      placeholder={props.placeholder || "Title Goes Here..."}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
export default NotepadTitle;
