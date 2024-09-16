import { useEffect } from 'react';
import M from 'materialize-css';

export default function Search() {
  useEffect(() => {
    // Initialize Materialize Datepicker after the component mounts
    const elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
        format: 'dd/mm/yyyy',
        autoClose: true,
        defaultDate: new Date(),
        setDefaultDate: true
    });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
        <input type="text" className="datepicker" />
    </>
  );
}
