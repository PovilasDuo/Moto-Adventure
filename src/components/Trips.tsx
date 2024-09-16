import { useNavigate } from 'react-router-dom';

export default function Trips() {
  const navigate = useNavigate();

  // Function to handle row clicks
  const handleRowClick = (id: number) => {
    navigate(`/trips/${id}`);
  };

  return (
    <>
     
    </>
  );
}
