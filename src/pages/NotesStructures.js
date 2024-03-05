import React, { useState, useEffect } from 'react';

function NotesStructures() {
    const [notesStructures, setNotesStructures] = useState([]);
    const [feedback, setFeedback] = useState(""); // To display feedback to the user
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/notes-structures`)
            .then(response => response.json())
            .then(data => setNotesStructures(data))
            .catch(error => setFeedback(error.message));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/notes-structures/${id}`)
            .then(response => response.json())
            .then(data => setNotesStructures([data]))
            .catch(error => setFeedback(error.message));
    };

    const modifyById = (id) => {
        const newNotesStructureNom = prompt("Enter new notes structure name:");
        const newElementAudite = prompt("Enter new element audite:");
        const newEstActif = prompt("Is it active? (true/false)"); // This can be enhanced for better user experience

        if (newNotesStructureNom) {
            fetch(`${BACKEND_URL}/notes-structures/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    notes_structure_nom: newNotesStructureNom,
                    element_audite: newElementAudite,
                    est_actif: newEstActif === "true"
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message && !data.message.includes("Erreur")) {
                    fetchAll();
                } else {
                    console.error('Failed to modify notes structure:', data.message);
                }
            })
            .catch(error => console.error('Error modifying notes structure:', error));
        }
    };

    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/notes-structures/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.message && !data.message.includes("Erreur")) {
                fetchAll();
                setFeedback(`Notes structure with ID ${id} deleted successfully.`);
            } else {
                console.error('Failed to delete notes structure:', data.message);
            }
        })
        .catch(error => console.error('Error deleting notes structure:', error));
    };

    const createNew = () => {
        const newNotesStructureNom = prompt("Enter notes structure name:");
        const newElementAudite = prompt("Enter element audite:");
        const newEstActif = prompt("Is it active? (true/false)");

        if (newNotesStructureNom) {
            fetch(`${BACKEND_URL}/notes-structures/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    notes_structure_nom: newNotesStructureNom,
                    element_audite: newElementAudite,
                    est_actif: newEstActif === "true"
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message && !data.message.includes("Erreur")) {
                    fetchAll();
                    setFeedback(`Notes structure ${newNotesStructureNom} created successfully.`);
                } else {
                    console.error('Failed to create notes structure:', data.message);
                }
            })
            .catch(error => console.error('Error creating notes structure:', error));
        }
    };

    useEffect(fetchAll, []);

    return (
        <div>
            <h2>NotesStructures</h2>
            <div>
                <button onClick={fetchAll}>Voir tous</button>
                <button onClick={() => fetchById(prompt("Enter ID:"))}>Voir par ID</button>
                <button onClick={() => modifyById(prompt("Enter ID:"))}>Modifier par ID</button>
                <button onClick={() => deleteById(prompt("Enter ID:"))}>Effacer</button>
                <button onClick={createNew}>Créer Nouveau</button>
            </div>
            <p>{feedback}</p>
            <table>
                <thead>
                    <tr>
                        <th>Notes Structure ID</th>
                        <th>notes_structure_nom</th>
                        <th>element_audite</th>
                        <th>est_actif</th>
                    </tr>
                </thead>
                <tbody>
                    {notesStructures.map(notes_structure => (
                        <tr key={notes_structure.notes_structure_id}>
                            <td>{notes_structure.notes_structure_id}</td>
                            <td>{notes_structure.notes_structure_nom}</td>
                            <td>{notes_structure.element_audite}</td>
                            <td>{notes_structure.est_actif.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NotesStructures;
