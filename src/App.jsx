import React from 'react';
import CreateEvent from './pages/create-event/create-event';
import Layout from './components/ui/layout';

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
