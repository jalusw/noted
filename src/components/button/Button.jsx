import PropTypes from "prop-types";

function Button(props) {
  const {
    variant = "default",
    type,
    children,
    onClick,
    title,
    className,
  } = props;
  const variants = {
    primary: "p-2 text-white bg-sky-600 rounded ",
    default: "shadow-border p-1 px-2 rounded",
    bordered: "border-2 border-slate-600 rounded",
  };
  return (
    <button
      className={"p-2 " + className + " " + variants[variant]}
      onClick={onClick}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "default", "bordered"]),
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
