import React, { useState, useEffect } from 'react';

// const BACKEND_URL = 'https://idrv5-5a4cb3ac619e.herokuapp.com';
const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';


const createAudit = async (auditData) => {
  try {
    const response = await fetch(`${BACKEND_URL}/audits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(auditData)
    });
    if (!response.ok) {
      throw new Error('Failed to create audit');
    }
    return response.json();
  } catch (error) {
    console.error('Error creating audit:', error);
    throw error;
  }
};

function Audits() {
  const [audits, setAudits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  // console.log('BACKEND_URL:', BACKEND_URL);

  const fetchAll = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/audits/`);
      if (!response.ok) {
        console.error('Fetch audits failed:', response.status, response.statusText);
        throw new Error(`Failed to fetch audits: ${response.statusText}`);
      }
      const data = await response.json();
      setAudits(data);
    } catch (error) {
      console.error('Error fetching audits:', error);
      setFeedback(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchById = (id) => {
    fetch(`${BACKEND_URL}/audits/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch audit with ID ${id}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setAudits([data]);
        setFeedback(''); // Clear any existing feedback messages
      })
      .catch(error => {
        console.error('Error fetching audit by ID:', error);
        setFeedback(error.message);
      });
  };


    const modifyById = (id) => {
        // Prompt the user for all fields
        const data = {};
        data.client_id = prompt("Enter client ID:");
        data.gestionnaire_id = prompt("Enter gestionnaire ID:");
        data.auditeur_id = prompt("Enter auditeur ID:");
        data.chapitre = prompt("Enter chapitre:");
        data.restaurant_id = prompt("Enter restaurant ID:");
        data.date_audit = prompt("Enter date of audit (in YYYY-MM-DD format):");
        data.client_contact_id = prompt("Enter client contact ID:");
        data.nombre_de_couverts = prompt("Enter number of covers:");
        data.horaires_du_self_debut = prompt("Enter self-start time (in HH:MM:SS format):", "12:00:00");
        data.horaires_du_self_fin = prompt("Enter self-end time (in HH:MM:SS format):", "14:30:00");

        // Send the update request
        fetch(`${BACKEND_URL}/audits/${id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          if (data.message && !data.message.includes("Erreur")) {
            fetchAll();
            setFeedback(`Audit with ID ${id} modified successfully.`);
          } else {
            console.error('Failed to modify audit:', data.message);
          }
        })
        .catch(error => console.error('Error modifying audit:', error));
      };



      const deleteById = (id) => {
        fetch(`${BACKEND_URL}/audits/${id}/`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
          if (data.message && !data.message.includes("Erreur")) {
            fetchAll();
            setFeedback(`Audit with ID ${id} deleted successfully.`);
          } else {
            console.error('Failed to delete audit:', data.message);
          }
        })
        .catch(error => console.error('Error deleting audit:', error));
      };

      const createNew = () => {
        const data = {};

        data.client_id = prompt("Enter client ID:");
        data.gestionnaire_id = prompt("Enter gestionnaire ID:");
        data.auditeur_id = prompt("Enter auditeur ID:");
        data.chapitre = prompt("Enter chapitre:");
        data.restaurant_id = prompt("Enter restaurant ID:");
        data.date_audit = prompt("Enter date of audit (in YYYY-MM-DD format):");
        data.client_contact_id = prompt("Enter client contact ID:");
        data.nombre_de_couverts = prompt("Enter number of covers:");
        data.horaires_du_self_debut = prompt("Enter self-start time (in HH:MM:SS format):");
        data.horaires_du_self_fin = prompt("Enter self-end time (in HH:MM:SS format):");

        fetch(`${BACKEND_URL}/audits/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            return response.text().then(text => {throw new Error(text)});
          }
          return response.json();
        })
        .then(data => {
          if (data.message && !data.message.includes("Erreur")) {
            fetchAll();
            setFeedback(`New audit created successfully.`);
          } else {
            console.error('Failed to create new audit:', data.message);
          }
        })
        .catch(error => console.error('Error creating new audit:', error));
      };

      // useEffect(fetchAll, []);

      return (
        <div>
          <h2>Audits</h2>
          <div>
            <button onClick={fetchAll}>Voir tous</button>
            <button onClick={() => fetchById(prompt("Enter ID:"))}>Voir par ID</button>
            <button onClick={() => modifyById(prompt("Enter ID:"))}>Modifier par ID</button>
            <button onClick={() => deleteById(prompt("Enter ID:"))}>Effacer</button>
            <button onClick={createNew}>Créer Nouveau</button>
          </div>
          <p>{feedback}</p>
          {isLoading ? (
            <p>Loading audits...</p>
          ) : (
            <table>
              {/* ... table headers ... */}
              <thead>
                  <tr>
                      <th>Audit ID</th>
                      <th>Client</th>
                      <th>Gestionnaire</th>
                      <th>Auditeur prénom</th>
                      <th>Auditeur nom</th>
                      <th>Element audité</th>
                      <th>Nom du restaurant</th>
                      <th>Audit Date</th>
                      <th>Personne rencontrée prénom</th>
                      <th>Personne rencontrée nom</th>
                      <th>Nombre de couverts</th>
                      <th>Début</th>
                      <th>Fin</th>
                      <th></th>
                      <th>Fin</th>
                  </tr>
              </thead>
              <tbody>
                {audits.map(audit => (
                  <React.Fragment key={audit.audit_id}>
                      {/* ... audit details ... */}
                    <tr key={audit.audit_id}>
                      <td>{audit.audit_id}</td>
                      <td>{audit.client_nom}</td>
                      <td>{audit.gestionnaire_nom}</td>
                      <td>{audit.auditeur_prenom}</td>
                      <td>{audit.auditeur_nom}</td>
                      <td>{audit.element_nom}</td>
                      <td>{audit.restaurant_nom}</td>
                      <td>{audit.date_audit}</td>
                      <td>{audit.client_contact_nom}</td>
                      <td>{audit.client_contact_prenom}</td>
                      <td>{audit.nombre_de_couverts}</td>
                      <td>{audit.horaires_du_self_debut}</td>
                      <td>{audit.horaires_du_self_fin}</td>
                    </tr>
                  {audit.constats && audit.constats.map(constat => (
                    <tr key={`${audit.audit_id}_${constat.constat}`}>
                      <td colSpan="12">Constat ID: {constat.constat}</td>
                      <td>Element: {constat.element_nom}</td>
                      <td>Score: {constat.score}</td>
                    </tr>
                  ))}
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          )}
      </div>
  );
}

export default Audits;
export { createAudit };
