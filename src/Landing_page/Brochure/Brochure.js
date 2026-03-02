// import react from 'react';

// function Brochure() {
//   return (
//     <h1>Brochure</h1>
//   );
// }

// export default Brochure;

import { useEffect } from 'react';

function Brochure() {
  useEffect(() => {
    window.location.replace('/brochure _20260302_132927_0000.pdf');
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <p>Loading PDF...</p>
    </div>
  );
}

export default Brochure;