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
export default NotepadTitle;
