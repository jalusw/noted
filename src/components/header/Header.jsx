import PropTypes from "prop-types";

function Header(props) {
  const { backgroundColor = "none", textDirection = "left", children } = props;
  const backgroundColors = {
    none: "none",
    primary: "bg-sky-500",
  };
  const textDirections = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return (
    <header className={"py-20 " + backgroundColors[backgroundColor]}>
      <div className="container">
        <div className={"prose mx-auto " + textDirections[textDirection]}>
          {children}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  backgroundColor: PropTypes.oneOf(["none", "primary"]),
  textDirection: PropTypes.oneOf(["left", "right", "center"]),
  children: PropTypes.node,
};

export default Header;
