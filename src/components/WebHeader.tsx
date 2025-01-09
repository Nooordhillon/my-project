// import React from 'react'

// const WebHeader = () => {
//   return (
//     <div> 
//         <p>+62 819 821 967</p>
//         <button> Home </button>

import React from 'react';

const App = () => {
  const styles = {
    header: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px 20px',
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contact: {
      fontSize: '14px',
    },
    menu: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    menuItem: {
      marginLeft: '15px',
      cursor: 'pointer',
    },
    searchBar: {
      display: 'flex',
      marginTop: '10px',
    },
    searchInput: {
      width: '300px',
      padding: '5px',
    },
    searchButton: {
      backgroundColor: 'orange',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    promoSection: {
      backgroundColor: 'orange',
      color: 'white',
      textAlign: 'center',
      padding: '50px 20px',
    },
    promoBanner: {
      margin: 0,
    },
    promoDates: {
      margin: 0,
      fontSize: '14px',
    },
    promoTitle: {
      fontSize: '40px',
      margin: '10px 0',
    },
    promoSubtitle: {
      fontSize: '30px',
      margin: '5px 0',
    },
  };

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.topBar}>
          <span style={styles.contact}>+62 819 821 967</span>
          <nav>
            <ul style={styles.menu}>
              <li style={styles.menuItem}>Shop</li>
              <li style={styles.menuItem}>Promo</li>
              <li style={styles.menuItem}>About</li>
              <li style={styles.menuItem}>Blog</li>
            </ul>
          </nav>
        </div>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Search here" style={styles.searchInput} />
          <button style={styles.searchButton}>🔍</button>
        </div>
      </header>

      {/* Promo Section */}
      {/* <main style={styles.promoSection}> */}
        <div style={styles.promoBanner}>
          <h4 style={styles.promoDates}>1 March 2021 - 30 March 2021</h4>
          <h1 style={styles.promoTitle}>Discount</h1>
          <h2 style={styles.promoSubtitle}>50% All Items</h2>
        </div>
      {/* </main> */}
    // </div>
  );
};

export default App;





//     </div>
//   )
// }

// export default WebHeader