import React, { useState, useEffect } from 'react';

function Salutations() {
    const [salutations, setSalutations] = useState([]);
    const [feedback, setFeedback] = useState(""); // To display feedback to the user
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/salutations`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch salutations.");
            })
            .then(data => setSalutations(data.salutations))
            .catch(error => setFeedback(error.message));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/salutations/${id}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch salutation by ID.");
            })
            .then(data => {
                if (data.salutation) {
                    setSalutations([data.salutation]);
                } else {
                    throw new Error("No salutation data received.");
                }
            })
            .catch(error => setFeedback(error.message));
    };

    const modifyById = (id) => {
        const newSalutation = prompt("Nouvelle Salutation:");
        if (newSalutation) {
            fetch(`${BACKEND_URL}/salutations/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    salutation: newSalutation
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message.includes("succès")) {
                    fetchAll();
                } else {
                    setFeedback(data.message);
                }
            })
            .catch(error => setFeedback(error.message));
        }
    };

    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/salutations/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchAll();
                setFeedback(`Salutation with ID ${id} deleted successfully.`);
            } else {
                throw new Error("Failed to delete salutation.");
            }
        })
        .catch(error => setFeedback(error.message));
    };

    const createNew = () => {
        const newSalutation = prompt("Enter new salutation:");
        if (newSalutation) {
            fetch(`${BACKEND_URL}/salutations/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ salutation: newSalutation })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message.includes("succès")) {
                    fetchAll();
                    setFeedback(`Salutation ${newSalutation} created successfully.`);
                } else {
                    setFeedback(data.message);
                }
            })
            .catch(error => setFeedback(error.message));
        }
    };

    useEffect(fetchAll, []);

    return (
        <div>
            <h2>Salutations</h2>
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
                        <th>Salutation_id</th>
                        <th>Salutation</th>
                    </tr>
                </thead>
                <tbody>
                    {salutations.map(salutation => (
                        <tr key={salutation.salutation_id}>
                            <td>{salutation.salutation_id}</td>
                            <td>{salutation.salutation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Salutations;
