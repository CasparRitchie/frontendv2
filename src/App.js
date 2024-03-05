import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Attachments from './pages/Attachments';
import Auditeurs from './pages/Auditeurs';
import Audits from './pages/Audits';
import Clients from './pages/Clients';
import ClientContacts from './pages/ClientContacts';
import Constats from './pages/Constats';
import CreateAudit from './pages/CreateAudit';
import Elements from './pages/Elements';
import ElementsAuditesDetailsPrestations from './pages/ElementsAuditesDetailsPrestations';
import Gestionnaires from './pages/Gestionnaires';
import Legendes from './pages/Legendes';
import NotesStructures from './pages/NotesStructures';
import ReponsesPossibles from './pages/ReponsesPossibles';
import Restaurants from './pages/Restaurants';
import Salutations from './pages/Salutations';

import SurveyComponent from "./components/SurveyComponent";
// import MySurvey from './components/surveyDisplay/surveyIDRv5';


function App() {
  return (
      <Router>
          <div>
              {/* Navigation links can be added here */}
              <Routes>
              <Route path="/attachments" element={<Attachments />} />
              <Route path="/auditeurs" element={<Auditeurs />} />
              <Route path="/audits" element={<Audits />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/client-contacts" element={<ClientContacts />} />
              <Route path="/constats" element={<Constats />} />
              <Route path="/create-audit" element={<CreateAudit />} />
              <Route path="/elements" element={<Elements />} />
              <Route path="/details-prestations" element={<ElementsAuditesDetailsPrestations />} />
              <Route path="/gestionnaires" element={<Gestionnaires />} />
              <Route path="/legendes" element={<Legendes />} />
              <Route path="/notes-structures" element={<NotesStructures />} />
              <Route path="/reponses-possibles" element={<ReponsesPossibles />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/salutations" element={<Salutations />} />
              <Route path="/" element={<Salutations />} />
              <Route path="/survey" element={<SurveyComponent />} />
              {/* <Route path="/surveyIDRv5" element={<MySurvey />} />
              <Route path="/" element={<MySurvey />} /> */}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
