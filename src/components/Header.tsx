export default function Header() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-2">
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Moto adventure
          </span>
          <ul className="right" style={{ marginLeft: "10%" }}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}