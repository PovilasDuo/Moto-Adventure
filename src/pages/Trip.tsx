import { useNavigate } from 'react-router-dom';

export default function Trips() {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/trips/${id}`);
  };

  return (
    <>
     
    </>
  );
}
