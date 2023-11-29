function NotepadBody(props) {
  return (
    <textarea
      className="w-full p-2 border-2 rounded"
      placeholder={props.placeholder || "Write Something..."}
      onChange={props.onChange}
      value={props.value}
    ></textarea>
  );
}
export default NotepadBody;
