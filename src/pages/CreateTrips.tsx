import { useEffect } from "react";
import TripFormn from "../components/TripForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faRoute,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function CreateTrips() {
  useEffect(() => {
    var options = {
      accordion: false,
    };
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, options);
  }, []);

  const routeForm = (
    <>
      <div className="container" style={{ margin: "6.4rem auto" }}>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s3">
              <input id="routeLenght" type="text" />
              <label htmlFor="date">Route lenght</label>
            </div>
            <div className="input-field col s3">
              <input id="routeTime" type="text" />
              <label htmlFor="date">Expected time</label>
            </div>
            <div className="input-field col s3">
              <input id="startPoint" type="text" className="validate" />
              <label htmlFor="first_name">Starting point</label>
            </div>

            <div className="input-field col s3">
              <input id="endPoint" type="text" className="validate" />
              <label htmlFor="endPoint">End point</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const html = (
    <>
      <div className="container">
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <FontAwesomeIcon icon={faPlane} />
              Trip creation
            </div>
            <div className="collapsible-body">
              <h3 className="center-align">Trip creation</h3>
              <TripFormn />
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Second
            </div>
            <div className="collapsible-body">
            <FontAwesomeIcon icon={faRoute} />

              {routeForm}
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Third
            </div>
            <div className="collapsible-body">
              <h3 className="center-align">Trip creation</h3>
              <TripFormn />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
  return html;
}
