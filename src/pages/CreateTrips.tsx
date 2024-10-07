import { useEffect, useState } from "react";
import TripForm from "../components/TripForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faPlane,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import M from "materialize-css";

export default function CreateTrips() {
  const [routePoints, setRoutePoints] = useState([
    { id: Date.now(), name: "", coordinates: "" },
  ]);

  useEffect(() => {
    var options = { accordion: false };
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, options);

    if (instances.length) {
      instances[0].open(0);
    }
  }, []);

  const handleInputChange = (id: number, event: any) => {
    const { name, value } = event.target;
    setRoutePoints((prevPoints) =>
      prevPoints.map((point) =>
        point.id === id ? { ...point, [name]: value } : point
      )
    );
  };

  const addRoutePoint = () => {
    setRoutePoints([
      ...routePoints,
      { id: Date.now(), name: "", coordinates: "" },
    ]);
  };

  const removeRoutePoint = (id: any) => {
    setRoutePoints(routePoints.filter((point) => point.id !== id));
  };

  const routeForm = (
    <div className="container" style={{ margin: "6.4rem auto" }}>
      <h3 className="center-align">Route creation</h3>
      <div className="row">
        <div className="col s12">
          <div className="input-field col s6">
            <input id="routeLength" type="text" />
            <label htmlFor="routeLength">Route length (km)</label>
          </div>
          <div className="input-field col s6">
            <input id="routeTime" type="text" />
            <label htmlFor="routeTime">Expected time (h)</label>
          </div>
        </div>
      </div>
    </div>
  );

  const routePointsForm = (
    <div className="container" style={{ margin: "6.4rem auto" }}>
      <h3 className="center-align">Route Points</h3>
      {routePoints.map((point) => (
        <div className="row" key={point.id} style={{ alignItems: 'center' }}>
          <div className="col s3">
            <div className="input-field">
              <input
                id={`pointName-${point.id}`}
                type="text"
                name="name"
                value={point.name}
                onChange={(event) => handleInputChange(point.id, event)}
              />
              <label htmlFor={`pointName-${point.id}`}>Point name</label>
            </div>
          </div>
          <div className="col s3">
            <div className="input-field">
              <input
                id={`pointCoordinates-${point.id}`}
                type="text"
                name="coordinates"
                value={point.coordinates}
                onChange={(event) => handleInputChange(point.id, event)}
              />
              <label htmlFor={`pointCoordinates-${point.id}`}>
                Point coordinates
              </label>
            </div>
          </div>
          <div className="col s3">
            <button className="btn" onClick={addRoutePoint}>
              Add Point
            </button>
          </div>
          <div className="col s3">
            <button
              className="btn red"
              onClick={() => removeRoutePoint(point.id)}
            >
              Remove Point
            </button>
          </div>
        </div>
      ))}
    </div>
  );  

  const html = (
    <>
      <div className="container">
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <FontAwesomeIcon icon={faPlane} />
              &emsp; &ensp; Trip creation
            </div>
            <div className="collapsible-body">
              <TripForm header="Trip creation" />
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <FontAwesomeIcon icon={faRoute} />
              &emsp; &ensp; Route creation
            </div>
            <div className="collapsible-body">{routeForm}</div>
          </li>
          <li>
            <div className="collapsible-header">
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              &emsp; &ensp; Route points
            </div>
            <div className="collapsible-body">{routePointsForm}</div>
          </li>
        </ul>
      </div>
    </>
  );
  return html;
}
