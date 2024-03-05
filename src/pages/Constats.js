import React, { useState, useEffect } from 'react';
const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

const createConstat = async (constatData) => {
    try {
        const response = await fetch(`${BACKEND_URL}/constats/`, {
            method: 'POST',
            body: JSON.stringify(constatData),
            headers: {'Content-Type': 'application/json'}
        });
        return response.json();
    } catch (error) {
        console.error('Error creating constat:', error);
        throw error;
    }
};

function Constats() {
    const [constats, setConstats] = useState([]);
    const [feedback, setFeedback] = useState("");

    const getModifiedValue = (promptMessage, originalValue) => {
        let response = prompt(promptMessage, originalValue);
        return (response !== null && response !== "") ? response : originalValue;
    };

const fetchAll = () => {
    fetch(`${BACKEND_URL}/constats/`)
        .then(response => response.json())
        .then(data => setConstats(data))
        .catch(error => setFeedback(`Error fetching constats: ${error.message}`));
};

const fetchById = (id) => {
    fetch(`${BACKEND_URL}/constats/${id}/`)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Failed to fetch constat by ID.");
        })
        .then(data => {
            if (data) {
                setConstats([data]);
            } else {
                throw new Error("No constat data received.");
            }
        })
        .catch(error => setFeedback(error.message));
};

const createNew = () => {
    const data = {};
    data.element_id = prompt("Enter element ID:");
    data.audit_id = prompt("Enter audit ID:");
    data.observations = prompt("Enter observations:");
    data.score = prompt("Enter score:");

    fetch(`${BACKEND_URL}/constats/`, {
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
            setFeedback(`New constat created successfully.`);
        } else {
            setFeedback(`Error creating constat: ${data.message}`);
        }
    })
    .catch(error => setFeedback(`Error creating constat: ${error.message}`));
};

const modifyById = (id) => {
    fetch(`${BACKEND_URL}/constats/${id}/`)
        .then(response => response.json())
        .then(originalData => {
            const data = {};
            data.element_id = getModifiedValue("Enter element ID:", originalData.element_id);
            data.audit_id = getModifiedValue("Enter audit ID:", originalData.audit_id);
            data.observations = getModifiedValue("Enter observations:", originalData.observations);
            data.score = getModifiedValue("Enter score:", originalData.score);

            fetch(`${BACKEND_URL}/constats/${id}/`, {
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
                throw new Error("Failed to modify constat.");
            })
            .then(data => {
                if (data.message && !data.message.includes("Erreur")) {
                    fetchAll();
                    setFeedback(`Constat with ID ${id} modified successfully.`);
                } else {
                    throw new Error(`Failed to modify constat: ${data.message}`);
                }
            })
            .catch(error => setFeedback(`Error modifying constat: ${error.message}`));
        })
        .catch(error => setFeedback(`Error fetching original data: ${error.message}`));
};

const deleteById = (id) => {
    fetch(`${BACKEND_URL}/constats/${id}/`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.message && !data.message.includes("Erreur")) {
            fetchAll();
            setFeedback(`Constat with ID ${id} deleted successfully.`);
        } else {
            setFeedback(`Error deleting constat: ${data.message}`);
        }
    })
    .catch(error => setFeedback(`Error deleting constat: ${error.message}`));
};

    useEffect(fetchAll, []);

    return (
        <div>
            <h2>Constats</h2>
            <div>
                <button onClick={fetchAll}>View All</button>
                <button onClick={() => fetchById(prompt("Enter Constat ID to view:"))}>View by ID</button>
                <button onClick={() => modifyById(prompt("Enter ID to modify:"))}>Modify by ID</button>
                <button onClick={() => deleteById(prompt("Enter ID to delete:"))}>Delete</button>
                <button onClick={createNew}>Create New</button>
            </div>
            <p>{feedback}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Element ID</th>
                        <th>Audit ID</th>
                        <th>Observations</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {constats.map(constat => (
                    <tr key={constat.constat_id}>
                        <td>{constat.constat_id}</td>
                        <td>{constat.element_id}</td>
                        <td>{constat.audit_id}</td>
                        <td>{constat.observations}</td>
                        <td>{constat.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Constats;
export {createConstat};
