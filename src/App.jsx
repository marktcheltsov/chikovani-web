import React from 'react';
import CreateEvent from './pages/create-event/create-event';
import Layout from './components/layout';

function App() {
  return (
    <div className="page">
      <Layout>
        <CreateEvent/>
      </Layout>
    </div>
  );
}

export default App;
