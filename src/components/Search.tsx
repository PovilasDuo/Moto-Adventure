import { useEffect } from "react";
import M from "materialize-css";

export default function Search() {
  useEffect(() => {
    var dateElems = document.querySelectorAll(".datepicker");
    var timeElems = document.querySelectorAll(".timepicker");

    var dateInstances = M.Datepicker.init(dateElems, {
      format: "dd/mm/yyyy",
      autoClose: true,
      defaultDate: new Date(),
      setDefaultDate: true,
    });

    var timeInstances = M.Timepicker.init(timeElems, {
      twelveHour: false, // false - 24-hour format // true - 12-hour format with AM/PM
      autoClose: true,
      defaultTime: "now",
    });
  }, []);

  return (
    <>
      <div className="container" style={{ margin: "6.4rem auto" }}>
        <h3 className="center-align">Search trips</h3>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s3">
              <input id="date" type="text" className="datepicker" />
              <label htmlFor="date">Select date</label>
            </div>
            <div className="input-field col s3">
              <input id="time" type="text" className="timepicker" />
              <label htmlFor="date">Select time</label>
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
          <div className="center">
            <a className="waves-effect waves-light btn-large" href="/trips">
              SEARCH
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
