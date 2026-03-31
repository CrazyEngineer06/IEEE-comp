// import react from 'react';

// function Brochure() {
//   return (
//     <h1>Brochure</h1>
//   );
// }

// export default Brochure;

// import { useEffect } from 'react';

// function Brochure() {
//   useEffect(() => {
//     window.open('/brochure2027.pdf','_blank');
//   }, []);

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       backgroundColor: '#fff',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 9999,
//     }}>
//       <p>Loading PDF...</p>
//     </div>
//   );
// }

// export default Brochure;

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Brochure() {
  const linkRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    linkRef.current.click();
    navigate('/');
  }, []);

  return (
    <a ref={linkRef} href="/iqicsa2027/brochure2027.pdf" target="_blank" rel="noreferrer" />
  );
}

export default Brochure;