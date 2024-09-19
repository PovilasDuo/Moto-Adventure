export default function Login() {
  return (
    <>
      <div className="container" style={{ margin: "6.4rem auto" }}>
        <h3 className="center-align">Login</h3>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s12">
              <input id="userName" type="text" className="validate" />
              <label htmlFor="first_name">User name</label>
            </div>
          </div>

          <div className="col s12">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="center">
            <a className="waves-effect waves-light btn-large" href="/account">
              LOGIN
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col s12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h5 style={{ marginRight: "15px" }}>Don't have an account yet?</h5>
            <a className="waves-effect waves-light btn-large" href="/register">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
