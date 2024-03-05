import React, { useState, useEffect } from 'react';

function ClientContacts() {
    const [clientContacts, setClientContacts] = useState([]);
    const [feedback, setFeedback] = useState("");
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/client-contacts/`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch client contacts.");
            })
            .then(data => setClientContacts(data))
            .catch(error => setFeedback(error.message));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/client-contacts/${id}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch client contact by ID.");
            })
            .then(data => {
                if (data) {
                    setClientContacts([data]);
                } else {
                    throw new Error("No client contact data received.");
                }
            })
            .catch(error => setFeedback(error.message));
    };

    const modifyById = (id) => {
        const getModifiedValue = (promptMessage, originalValue) => {
            let response = prompt(promptMessage, originalValue);
            return (response !== null && response !== "") ? response : originalValue;
        };

        // Fetch the original data first
        fetch(`${BACKEND_URL}/client-contacts/${id}`)
            .then(response => response.json())
            .then(originalData => {
                const data = {};
                data.salutation_id = getModifiedValue("Enter salutation ID:", originalData.client_contact_salutation_id);
                data.prenom = getModifiedValue("Enter first name:", originalData.client_contact_prenom);
                data.nom = getModifiedValue("Enter last name:", originalData.client_contact_nom);
                data.adresse1 = getModifiedValue("Enter address line 1:", originalData.client_contact_adresse1);
                data.adresse2 = getModifiedValue("Enter address line 2:", originalData.client_contact_adresse2);
                data.adresse3 = getModifiedValue("Enter address line 3:", originalData.client_contact_adresse3);
                data.cp = getModifiedValue("Enter postal code:", originalData.client_contact_cp);
                data.ville = getModifiedValue("Enter city:", originalData.client_contact_ville);
                data.coords = getModifiedValue("Enter coordinates:", originalData.client_contact_coords);
                data.email = getModifiedValue("Enter email:", originalData.client_contact_email);
                data.tel = getModifiedValue("Enter telephone number:", originalData.client_contact_tel);
                data.role = getModifiedValue("Enter role:", originalData.client_contact_role);
                data.client_id = getModifiedValue("Enter client ID:", originalData.client_id);

                // Send the updated data
                fetch(`${BACKEND_URL}/client-contacts/${id}`, {
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
                    throw new Error("Failed to modify client contact.");
                })
                .then(data => {
                    if (data.message && !data.message.includes("Erreur")) {
                        fetchAll();
                        setFeedback(`Client contact with ID ${id} modified successfully.`);
                    } else {
                        throw new Error(`Failed to modify client contact: ${data.message}`);
                    }
                })
                .catch(error => setFeedback(`Error modifying client contact: ${error.message}`));
            })
            .catch(error => setFeedback(`Error fetching original data: ${error.message}`));
    };





    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/client-contacts/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchAll();  // Refresh the list after deletion
                setFeedback(`Client contact with ID ${id} deleted successfully.`);
            } else {
                throw new Error("Failed to delete client contact.");
            }
        })
        .catch(error => setFeedback(error.message));
    };


    const createNew = () => {
        const data = {};
        data.client_contact_salutation_id = prompt("Enter salutation ID:");
        data.client_contact_prenom = prompt("Enter first name:");
        data.client_contact_nom = prompt("Enter last name:");
        data.client_contact_adresse1 = prompt("Enter address line 1:");
        data.client_contact_adresse2 = prompt("Enter address line 2:");
        data.client_contact_adresse3 = prompt("Enter address line 3:");
        data.client_contact_cp = prompt("Enter postal code:");
        data.client_contact_ville = prompt("Enter city:");
        data.client_contact_coords = prompt("Enter coordinates:");
        data.client_contact_email = prompt("Enter email:");
        data.client_contact_tel = prompt("Enter telephone number:");
        data.client_contact_role = prompt("Enter role:");
        data.client_contact_client_id = prompt("Enter client ID:");

        fetch(`${BACKEND_URL}/client-contacts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                fetchAll();  // Refresh the list after creation
                setFeedback(`New client contact created successfully.`);
            } else {
                throw new Error("Failed to create new client contact.");
            }
        })
        .catch(error => setFeedback(error.message));
    };


    useEffect(fetchAll, []);

    return (
        <div>
            <h2>Client Contacts</h2>
            <div>
                <button onClick={fetchAll}>View All</button>
                <button onClick={() => fetchById(prompt("Enter ID to view:"))}>View by ID</button>
                <button onClick={() => modifyById(prompt("Enter ID to modify:"))}>Modify by ID</button>
                <button onClick={() => deleteById(prompt("Enter ID to delete:"))}>Delete</button>
                <button onClick={createNew}>Create New</button>
            </div>
            <p>{feedback}</p>
            <table>
                <thead>
                    <tr>
                        <th>client_contact_id</th>
                        <th>client_contact_prenom</th>
                        <th>client_contact_nom</th>
                        <th>client_contact_adresse1</th>
                        <th>client_contact_adresse2</th>
                        <th>client_contact_adresse3</th>
                        <th>client_contact_cp</th>
                        <th>client_contact_ville</th>
                        <th>client_contact_coords</th>
                        <th>client_contact_email</th>
                        <th>client_contact_tel</th>
                        <th>client_contact_role</th>
                        <th>client_id</th>
                    </tr>
                </thead>
                <tbody>
                    {clientContacts.map(clientContact => (
                        <tr key={clientContact.client_contact_id}>
                            <td>{clientContact.client_contact_id}</td>
                            <td>{clientContact.client_contact_prenom}</td>
                            <td>{clientContact.client_contact_nom}</td>
                            <td>{clientContact.client_contact_adresse1}</td>
                            <td>{clientContact.client_contact_adresse2}</td>
                            <td>{clientContact.client_contact_adresse3}</td>
                            <td>{clientContact.client_contact_cp}</td>
                            <td>{clientContact.client_contact_ville}</td>
                            <td>{clientContact.client_contact_coords}</td>
                            <td>{clientContact.client_contact_email}</td>
                            <td>{clientContact.client_contact_tel}</td>
                            <td>{clientContact.client_contact_role}</td>
                            <td>{clientContact.client_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                {feedback}
            </div>
        </div>
    );
}


export default ClientContacts;
