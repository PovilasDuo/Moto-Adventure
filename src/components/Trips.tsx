import { useNavigate } from "react-router-dom";
import useFetch from "../api/useDataFetching";
import { Endpoint } from "../api/endpoints";
import { Trip } from "../api/apiModel";

export default function Trips() {
  const navigate = useNavigate();
  const data = useFetch<Trip[]>(Endpoint.TRIPS_THIS_WEEK);

  const handleRowClick = (id: number) => {
    navigate(`/trips/${id}`);
  };

  if (!data) {
    return <p>No trips available...</p>;
  }

  return (
    <>
      <h3 style={{ textAlign: "center" }}>This week's trips</h3>
      <table className="highlight centered container">
        <thead>
          <tr>
            <th>Starting Place</th>
            <th>Start Time</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trip) => (
            <tr key={trip.id_Trip} onClick={() => handleRowClick(trip.id_Trip)} style={{ cursor: "pointer" }}>
              <td>{trip.location}</td>
              <td>{new Date(trip.startTime).toLocaleTimeString()}</td>
              <td>{new Date(trip.startDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="center">
        <h5>
          <a href="/login">Log in to search trips</a>
        </h5>
      </div>
    </>
  );
}
