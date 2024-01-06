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

export default Input;
