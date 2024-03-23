function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

export default Header;
