function Container(props) {
  const { size, children } = props;
  const sizes = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
  };
  const className = "container mx-auto " + (sizes[size] || sizes.sm);
  return <div className={className}>{children}</div>;
}

export default Container;
