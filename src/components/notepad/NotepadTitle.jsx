function NotepadTitle(props) {
  return (
    <textarea
      className="w-full text-3xl font-bold  outline-0 resize-none "
      rows={1}
      placeholder={props.placeholder || "Title..."}
      onChange={props.onChange}
      value={props.value}
    ></textarea>
  );
}
export default NotepadTitle;
