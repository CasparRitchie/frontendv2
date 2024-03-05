import React, { useState, useEffect } from 'react';

function Clients() {
    const [clients, setClients] = useState([]);
    const [feedback, setFeedback] = useState("");
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';
    // const imageUrl = `data:image/png;base64,${base64EncodedData}`;


    const getModifiedValue = (promptMessage, originalValue) => {
        let response = prompt(promptMessage, originalValue);
        return (response !== null && response !== "") ? response : originalValue;
    };

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/clients`)
            .then(response => response.json())
            .then(data => setClients(data))
            .catch(error => setFeedback(`Error fetching clients: ${error.message}`));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/clients/${id}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch client by ID.");
            })
            .then(data => {
                if (data && data.client) {
                    setClients([data.client]);  // Update the state to display only the fetched client's details
                } else {
                    throw new Error("No client data received.");
                }
            })
            .catch(error => setFeedback(error.message));
    };


    const modifyById = (id) => {
        // Fetch the original data first
        fetch(`${BACKEND_URL}/clients/${id}`)
            .then(response => response.json())
            .then(originalData => {
                const data = {};
                data.client_nom = getModifiedValue("Enter client name:", originalData.client_nom);
                data.client_adresse1 = getModifiedValue("Enter address line 1:", originalData.client_adresse1);
                data.client_adresse2 = getModifiedValue("Enter address line 2:", originalData.client_adresse2);
                data.client_adresse3 = getModifiedValue("Enter address line 3:", originalData.client_adresse3);
                data.client_cp = getModifiedValue("Enter postal code:", originalData.client_cp);
                data.client_ville = getModifiedValue("Enter city:", originalData.client_ville);
                data.client_coords = getModifiedValue("Enter coordinates:", originalData.client_coords);
                data.client_siret = getModifiedValue("Enter SIRET number:", originalData.client_siret);
                data.client_contact_principal = getModifiedValue("Enter contact principal:", originalData.client_contact_principal);

                // Send the updated data
                fetch(`${BACKEND_URL}/clients/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if(response.ok) {
                        return response.json();
                    }
                    throw new Error("Failed to modify client.");
                })
                .then(data => {
                    if (data.message && !data.message.includes("Erreur")) {
                        fetchAll();
                        setFeedback(`Client with ID ${id} modified successfully.`);
                    } else {
                        throw new Error(`Failed to modify client: ${data.message}`);
                    }
                })
                .catch(error => setFeedback(`Error modifying client: ${error.message}`));
            })
            .catch(error => setFeedback(`Error fetching original data: ${error.message}`));
    };


    const createNew = () => {
        const data = {};
        data.client_nom = prompt("Enter client name:");
        data.client_adresse1 = prompt("Enter address line 1:");
        data.client_adresse2 = prompt("Enter address line 2:");
        data.client_adresse3 = prompt("Enter address line 3:");
        data.client_cp = prompt("Enter postal code:");
        data.client_ville = prompt("Enter city:");
        data.client_coords = prompt("Enter coordinates:");
        data.client_siret = prompt("Enter SIRET number:");
        data.client_contact_principal = prompt("Enter contact principal:");

        fetch(`${BACKEND_URL}/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message && !data.message.includes("Erreur")) {
                fetchAll();
                setFeedback(`New client created successfully.`);
            } else {
                setFeedback(`Error creating client: ${data.message}`);
            }
        })
        .catch(error => setFeedback(`Error creating client: ${error.message}`));
    };


    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/clients/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.message && !data.message.includes("Erreur")) {
                fetchAll();
                setFeedback(`Client with ID ${id} deleted successfully.`);
            } else {
                setFeedback(`Error deleting client: ${data.message}`);
            }
        })
        .catch(error => setFeedback(`Error deleting client: ${error.message}`));
    };

    useEffect(fetchAll, []);

    return (
        <div>
            <h2>Clients</h2>
            <div>
                <button onClick={fetchAll}>View All</button>
                <button onClick={() => {
                    const id = prompt("Enter Client ID to view:");
                    if (id && !isNaN(id)) {
                        fetchById(parseInt(id, 10));
                    } else {
                        setFeedback("Invalid client ID provided.");
                    }
                }}>View by ID</button>
                <button onClick={() => modifyById(prompt("Enter ID to modify:"))}>Modify by ID</button>
                <button onClick={() => deleteById(prompt("Enter ID to delete:"))}>Delete</button>
                <button onClick={createNew}>Create New</button>
            </div>
            <p>{feedback}</p>
            <table>
                <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>nom</th>
                        <th>adresse1</th>
                        <th>adresse2</th>
                        <th>adresse3</th>
                        <th>cp</th>
                        <th>ville</th>
                        <th>coords</th>
                        <th>siret</th>
                        <th>contact_principal</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.client_id}>
                            <td>{client.client_id}</td>
                            <td>{client.client_nom}</td>
                            <td>{client.client_adresse1}</td>
                            <td>{client.client_adresse2}</td>
                            <td>{client.client_adresse3}</td>
                            <td>{client.client_cp}</td>
                            <td>{client.client_ville}</td>
                            <td>{client.client_coords}</td>
                            <td>{client.client_siret}</td>
                            <td>{client.client_contact_principal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Clients;
