import React, { useState, useEffect } from 'react';

function Gestionnaires() {
    const [gestionnaires, setGestionnaires] = useState([]);
    const [feedback, setFeedback] = useState('');
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/gestionnaires/`)
        .then(response => response.json())
        .then(data => {
            setGestionnaires(data.gestionnaires);
        })
        .catch(error => setFeedback(`Error fetching data: ${error.message}`));
    };


    const addNewGestionnaire = () => {
        let newNom = prompt("Enter Gestionnaire Nom", "");
        let newCoords = prompt("Enter Gestionnaire Coords", "");

        let newData = {
            gestionnaire_nom: newNom,
            gestionnaire_coords: newCoords
        };

        fetch(`${BACKEND_URL}/gestionnaires/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            fetchAll();
        })
        .catch(error => setFeedback(`Error adding new gestionnaire: ${error.message}`));
    };

    const getModifiedGestionnaireInfo = (promptMessage, originalValue) => {
        let response = prompt(promptMessage, originalValue);
        return (response !== null && response !== "") ? response : originalValue;
    };

    const modifyGestionnaire = (gestionnaire) => {
        let modifiedNom = getModifiedGestionnaireInfo("Modify Gestionnaire Nom", gestionnaire.gestionnaire_nom);
        let modifiedCoords = getModifiedGestionnaireInfo("Modify Gestionnaire Coords", gestionnaire.gestionnaire_coords);

        let modifiedData = {
            gestionnaire_nom: modifiedNom,
            gestionnaire_coords: modifiedCoords
        };

        modifyGestionnaireByID(gestionnaire.gestionnaire_id, modifiedData);
    };

    const modifyGestionnaireByID = (id, data) => {
        fetch(`${BACKEND_URL}/gestionnaires/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            fetchAll();
        })
        .catch(error => setFeedback(`Error updating gestionnaire: ${error.message}`));
    };


    const deleteGestionnaire = (id) => {
        fetch(`${BACKEND_URL}/gestionnaires/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            fetchAll();
        })
        .catch(error => setFeedback(`Error deleting gestionnaire: ${error.message}`));
    };

    return (
        <div>
            <h2>Gestionnaires</h2>
            <button onClick={addNewGestionnaire}>Add New Gestionnaire</button>
            <ul>
                {gestionnaires.map(gestionnaire => (
                    <li key={gestionnaire.gestionnaire_id}>
                        {gestionnaire.gestionnaire_nom} - {gestionnaire.gestionnaire_coords}
                        <button onClick={() => modifyGestionnaire(gestionnaire)}>Modify</button>
                        <button onClick={() => deleteGestionnaire(gestionnaire.gestionnaire_id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <p>{feedback}</p>
        </div>
    );
}

export default Gestionnaires;
