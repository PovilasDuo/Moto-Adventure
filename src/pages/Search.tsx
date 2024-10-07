import TripForm from "../components/TripForm";

export default function Search() {
  const html = (
    <>
      <TripForm header = "This week's trips"></TripForm>
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
