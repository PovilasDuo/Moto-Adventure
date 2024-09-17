export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-2">
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        <a href="/">Moto adventure</a>
        </span>
        <ul className="right" style={{ marginLeft: "10%" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Account</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
