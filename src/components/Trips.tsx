import { useNavigate } from "react-router-dom";

export default function Trips() {
  const navigate = useNavigate();

  // Function to handle row clicks
  const handleRowClick = (id: number) => {
    navigate(`/trips/${id}`);
  };

  return (
    <>
      <p style={{ textAlign: "center" }}>
        <h3>This week's trips</h3>
      </p>
      <table className="highlight centered container">
        <thead>
          <tr>
            <th>Starting place</th>
            <th>Start time</th>
            <th>Length (km)</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleRowClick(1)} style={{ cursor: "pointer" }}>
            <td>Kaunas</td>
            <td>12:30</td>
            <td>20</td>
          </tr>
          <tr onClick={() => handleRowClick(2)} style={{ cursor: "pointer" }}>
            <td>Vilnius</td>
            <td>17:15</td>
            <td>40</td>
          </tr>
          <tr onClick={() => handleRowClick(3)} style={{ cursor: "pointer" }}>
            <td>Rokai</td>
            <td>12:00</td>
            <td>220</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <div className="center">
        <h5>
          <a href="/login">Log in to search trips</a>
        </h5>
      </div>
    </>
  );
}
