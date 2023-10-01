import React from 'react';
import CreateEvent from './pages/create-event';
import Layout from './components/layout';
import { Route, Routes } from 'react-router';
import Events from './pages/events';
import Template from './pages/template';
import Event from './pages/event';
import Templates from './pages/templates';
import CreateTemplate from './pages/create-template';
import Calendar from './pages/calendar';

function App() {
  return (
    <div className="page">
      <Layout>
          <Routes>
              <Route path="/" element={<Events/>}/>
              <Route path="/event/create" element={<CreateEvent/>}/>
              <Route path="/event/:id" element={<Event/>}/>
              <Route path="/templates" element={<Templates/>}/>
              <Route path="/template/create" element={<CreateTemplate/>}/>
              <Route path="/template/:id" element={<Template/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
