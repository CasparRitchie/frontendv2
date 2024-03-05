import React, { useState, useEffect } from 'react';

function ElementsAuditesDetailsPrestations() {
    const [elementsAuditesDetailsPrestations, setElementsAuditesDetailsPrestations] = useState([]);
    const [feedback, setFeedback] = useState('');
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/details-prestations`)
            .then(response => response.json())
            .then(data => setElementsAuditesDetailsPrestations(data))
            .catch(error => setFeedback(`Error fetching elementsAuditesDetailsPrestations: ${error.message}`));
    };

    const createNew = () => {
        let newNom = prompt("Enter Nom", "");
        let newGrammage = prompt("Enter Grammage", "");
        let newTemperature = prompt("Enter Temperature", "");
        let newSousTitre = prompt("Enter Sous Titre", "");

        let newData = {
            elements_audites_details_prestation_nom: newNom,
            elements_audites_details_prestation_grammage: newGrammage,
            elements_audites_details_prestation_temperature: newTemperature,
            elements_audites_details_prestation_sous_titre: newSousTitre
        };
        fetch(`${BACKEND_URL}/details-prestations/`, {
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
        .catch(error => setFeedback(`Error adding new element: ${error.message}`));
    };

    const getModifiedValue = (promptMessage, originalValue) => {
        let response = prompt(promptMessage, originalValue);
        return (response !== null && response !== "") ? response : originalValue;
    };

    const modifyElement = (element) => {
        let modifiedNom = getModifiedValue("Modify Nom", element.elements_audites_details_prestation_nom);
        let modifiedGrammage = getModifiedValue("Modify Grammage", element.elements_audites_details_prestation_grammage);
        let modifiedTemperature = getModifiedValue("Modify Temperature", element.elements_audites_details_prestation_temperature);
        let modifiedSousTitre = getModifiedValue("Modify Sous Titre", element.elements_audites_details_prestation_sous_titre);

        let modifiedData = {
            elements_audites_details_prestation_nom: modifiedNom,
            elements_audites_details_prestation_grammage: modifiedGrammage,
            elements_audites_details_prestation_temperature: modifiedTemperature,
            elements_audites_details_prestation_sous_titre: modifiedSousTitre
        };

        modifyById(element.elements_audites_details_prestation_id, modifiedData);
    };

    const modifyById = (id, data) => {
        fetch(`${BACKEND_URL}/details-prestations/${id}`, {
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
        .catch(error => setFeedback(`Error updating element: ${error.message}`));
    };

    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/details-prestations/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            fetchAll();
        })
        .catch(error => setFeedback(`Error deleting element: ${error.message}`));
    };
    // ... Rest of the CRUD methods ...

    return (
    <div>
        <h2>ElementsAuditesDetailsPrestations</h2>
        {feedback && <p>{feedback}</p>}
        <button onClick={() => createNew()}>Add New</button>
        <table>
            <thead>
                <tr>
                    <th>nom</th>
                    <th>grammage</th>
                    <th>temperature</th>
                    <th>sous_titre</th>
                    <th>Modify</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {elementsAuditesDetailsPrestations.map(element => (
                    <tr key={element.elements_audites_details_prestation_id}>
                        <td>{element.elements_audites_details_prestation_nom}</td>
                        <td>{element.elements_audites_details_prestation_grammage}</td>
                        <td>{element.elements_audites_details_prestation_temperature}</td>
                        <td>{element.elements_audites_details_prestation_sous_titre}</td>
                        <td><button onClick={() => modifyElement(element)}>Modify</button></td>
                        <td><button onClick={() => deleteById(element.elements_audites_details_prestation_id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default ElementsAuditesDetailsPrestations;
