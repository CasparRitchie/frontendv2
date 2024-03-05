import React, { useState, useEffect } from 'react';

function Auditeurs() {
    const [auditeurs, setAuditeurs] = useState([]);
    const [feedback, setFeedback] = useState(""); // To display feedback to the user
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/auditeurs`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch auditeurs.");
            })
            .then(data => setAuditeurs(data))
            .catch(error => setFeedback(error.message));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/auditeurs/${id}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch auditeur by ID.");
            })
            .then(data => {
                if (data.auditeur) {
                    setAuditeurs([data.auditeur]); // Set the single auditeur into an array
                } else {
                    throw new Error("No auditeur data received.");
                }
            })
            .catch(error => setFeedback(error.message));
    };


    const modifyById = (id) => {
      fetch(`${BACKEND_URL}/auditeurs/${id}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to fetch current auditeur data.');
              }
              return response.json();
          })
          .then(currentData => {
              const newSalutationID = prompt("Nouveau Salutation ID:", currentData.auditeur_salutation_id);
              const newName = prompt("Nouveau prénom:", currentData.auditeur_prenom);
              const newEmail = prompt("Nouvel adresse email:", currentData.auditeur_email);
              const newFamilyName = prompt("Nouveau nom de famille:", currentData.auditeur_nom);
              const newTel = prompt("Nouveau tel:", currentData.auditeur_tel);
              const newLoginID = prompt("Nouveau Login ID:", currentData.auditeur_login_id);
              const newPermissions = prompt("Nouveau permissions:", currentData.auditeur_permissions);

              if (newSalutationID === null || newName === null /* ... other null checks ... */) {
                  throw new Error('Modification cancelled by user.');
              }

              if (newName && newEmail) {
                  fetch(`${BACKEND_URL}/auditeurs/${id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          salutation_id: newSalutationID,  // You might need to handle this, as the backend expects it
                          auditeur_prenom: newName,  // Assuming 'prenom' is the first name
                          auditeur_nom: newFamilyName,  // Assuming 'nom' is the last name. Handle accordingly
                          auditeur_tel: newTel,  // If you're not updating this, you might want to handle this in the backend
                          auditeur_email: newEmail,
                          auditeur_login_id: newLoginID,  // Handle accordingly if you're not updating this
                          auditeur_permissions: newPermissions  // Handle accordingly if you're not updating this
                      })
                  })
                  .then(response => response.json())
                  .then(data => {
                      if (data.message && !data.message.includes("Erreur")) {
                          fetchAll();  // Refresh the list after modification
                      } else {
                          console.error('Failed to modify auditeur:', data.message);
                      }
                  })
                  .catch(error => console.error('Error modifying auditeur:', error));
              }
          })
          .catch(error => {
              console.error('Error in modification:', error);
              setFeedback(error.message);
          });
  };



    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/auditeurs/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchAll();  // Refresh the list after deletion
                setFeedback(`Auditeur with ID ${id} deleted successfully.`);
            } else {
                throw new Error("Failed to delete auditeur.");
            }
        })
        .catch(error => setFeedback(error.message));
    };

    const createNew = (id) => {
        const newSalutationID = prompt("Enter salutation ID:");
        const newName = prompt("Enter name:*");
        const newPrenom = prompt("Enter prenom:");
        const newEmail = prompt("Enter email*:");
        const newTel = prompt("Enter tel:");
        const newPermissions = prompt("Enter permissions:");
        const newLoginID = prompt("Enter loginID:");

        if (newName && newEmail) {
            fetch(`${BACKEND_URL}/auditeurs/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ auditeur_salutation_id: newSalutationID, auditeur_prenom: newPrenom, auditeur_nom: newName, auditeur_email: newEmail, auditeur_permissions: newPermissions, auditeur_tel: newTel, auditeur_login_id: newLoginID })
            })
            .then(response => {
                if (response.ok) {
                    fetchAll();  // Refresh the list after creation
                    setFeedback(`Auditeur ${newName} with ID of ${id} created successfully.`);
                } else {
                    throw new Error("Failed to create auditeur.");
                }
            })
            .catch(error => setFeedback(error.message));
        }
    };

    useEffect(fetchAll, []);

    return (
        <div>
            <h2>Auditeurs</h2>
            <div>
                <button onClick={fetchAll()}>Voir tous</button>
                <button onClick={() => fetchById(prompt("Enter ID:"))}>Voir par ID</button>
                <button onClick={() => modifyById(prompt("Enter ID:"))}>Modifier par ID</button>
                <button onClick={() => deleteById(prompt("Enter ID:"))}>Effacer</button>
                <button onClick={createNew}>Créer Nouveau</button>
            </div>
            <p>{feedback}</p> {/* Display feedback */}
            <table>
                <thead>
                    <tr>
                        <th>Auditeur ID</th>
                        <th>Salutation id</th>
                        <th>prenom</th>
                        <th>nom</th>
                        <th>email</th>
                        <th>tel</th>
                        <th>login id</th>
                        <th>permissions</th>
                    </tr>
                </thead>
                <tbody>
                    {auditeurs.map(auditeur => (
                        <tr key={auditeur.auditeur_id}>
                            <td>{auditeur.auditeur_id}</td>
                            <td>{auditeur.auditeur_salutation_id}</td>
                            <td>{auditeur.auditeur_prenom}</td>
                            <td>{auditeur.auditeur_nom}</td>
                            <td>{auditeur.auditeur_email}</td>
                            <td>{auditeur.auditeur_tel}</td>
                            <td>{auditeur.auditeur_login_id}</td>
                            <td>{auditeur.auditeur_permissions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Auditeurs;
