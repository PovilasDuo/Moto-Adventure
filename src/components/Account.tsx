export default function Account() {
  return (
    <>
<div className="container" style={{ margin: "6.4rem auto" }}>
      <h3 className="center-align">Login</h3>
      <div className="row">
        <div className="col s3">
          <div className="input-field col s12">
            <input
              placeholder="Something simple"
              id="first_name"
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">User name</label>
          </div>
        </div>

        <div className="col s3">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              placeholder="Something difficult"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

          <div className="col s3">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                placeholder="potato@field.org"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="col s3"><a className="waves-effect waves-light btn-large">Button</a></div>
        </div>
        </div>
    </>
  );
}
