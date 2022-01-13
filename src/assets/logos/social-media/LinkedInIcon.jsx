const AtIcon = ({ className, color }) => {
  const style = {
    color: "white",
    backgroundColor: color,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <span className={className} style={style}>
      in
    </span>
  );
};

export default AtIcon;
