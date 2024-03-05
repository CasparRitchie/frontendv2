import React, { useState, useEffect } from 'react';

function Elements() {
    const [elements, setElements] = useState([]);
    const [feedback, setFeedback] = useState('');
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/elements`)
            .then(response => response.json())
            .then(data => setElements(data))
            .catch(error => setFeedback(`Error fetching elements: ${error.message}`));
    };

    const createNewElement = () => {
        let chapitre = prompt("Enter Chapitre", "");
        let titre = prompt("Enter Titre", "");
        let sousTitre = prompt("Enter Sous Titre", "");
        let elementNom = prompt("Enter Element Nom", "");
        let notes_structure_id = prompt("Enter Notes Structure ID", "");

        let newData = {
            chapitre: chapitre,
            titre: titre,
            sous_titre: sousTitre,
            element_nom: elementNom,
            notes_structure_id: notes_structure_id
        };

        fetch(`${BACKEND_URL}/elements/`, {
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

    const modifyElement = (element) => {
        let modifiedChapitre = prompt("Modify Chapitre", element.chapitre);
        let modifiedTitre = prompt("Modify Titre", element.titre);
        let modifiedSousTitre = prompt("Modify Sous Titre", element.sous_titre);
        let modifiedElementNom = prompt("Modify Element Nom", element.element_nom);
        let modifiedElementNotesStructure = prompt("Modify Element Notes Structure", element.notes_structure_id);

        let modifiedData = {
            chapitre: modifiedChapitre,
            titre: modifiedTitre,
            sous_titre: modifiedSousTitre,
            element_nom: modifiedElementNom,
            notes_structure_id: modifiedElementNotesStructure
        };

        fetch(`${BACKEND_URL}/elements/${element.element_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifiedData)
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            fetchAll();
        })
        .catch(error => setFeedback(`Error updating element: ${error.message}`));
    };

    const deleteById = (elementId) => {
        fetch(`${BACKEND_URL}/elements/${elementId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            fetchAll();
        })
        .catch(error => setFeedback(`Error deleting element: ${error.message}`));
    };
    return (
    <div>
        <h2>Elements</h2>
        {feedback && <p>{feedback}</p>}
        <button onClick={() => createNewElement()}>Add New</button>
        <table>
            <thead>
                <tr>
                    <th>Chapitre</th>
                    <th>Nom</th>
                    <th>Sous Titre</th>
                    <th>Titre</th>
                    <th>Notes Structure ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {elements.map(element => (
                        <tr key={`${element.element_id}-${element.element_nom}`}>
                        <td>{element.chapitre}</td>
                        <td>{element.element_nom}</td>
                        <td>{element.sous_titre}</td>
                        <td>{element.titre}</td>
                        <td>{element.notes_structure_id}</td>
                        <td>
                            <button onClick={() => modifyElement(element)}>Modify</button>
                            <button onClick={() => deleteById(element.element_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Elements;
