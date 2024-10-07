import TripFormn from "../components/TripForm";

export default function Search() {
  const html = (
    <>
      <h3 className="center-align">Search trips</h3>
      <TripFormn></TripFormn>
      <div className="center">
        <p>
          <a className="waves-effect waves-light btn-large" href="/trips">
            SEARCH
          </a>
        </p>
      </div>
    </>
  );
  return html;
}
