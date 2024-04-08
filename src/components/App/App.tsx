import React from 'react';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

const App: React.FC = () => {

  return (
    <>
      <Header title='AutoHome' description='header description'/>
      <Sidenav />      
    </>
  )
}

export default App;