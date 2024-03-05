import React, { useState, useEffect } from 'react';

function ReponsesPossibles() {
    const [reponses, setReponses] = useState([]);
    const [feedback, setFeedback] = useState(""); // To display feedback to the user
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/reponses-possibles/`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch reponses possibles.");
            })
            .then(data => setReponses(data))
            .catch(error => setFeedback(error.message));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/reponses-possibles/${id}`)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Failed to fetch this reponses possible.");
        })
        .then(data => {
            if (data.reponse) {
                setReponses([data.reponse]);
            } else if (data.response_id) {
                // If the response is the reponse object directly, without a wrapper key
                setReponses([data]);
            } else {
                throw new Error("No reponse possible data received.");
            }
        })
        .catch(error => setFeedback(error.message));
    };


    const modifyById = (id) => {
        const newResponseValue = prompt("Enter new response value:");
        const newNotesStructureId = prompt("Enter new notes structure ID:");

        if (newResponseValue) {
            fetch(`${BACKEND_URL}/reponses-possibles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    response_value: newResponseValue,
                    notes_structure_id: newNotesStructureId
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message && !data.message.includes("Erreur")) {
                    fetchAll();
                } else {
                    console.error('Failed to modify reponse:', data.message);
                }
            })
            .catch(error => console.error('Error modifying reponse:', error));
        }
    };

    const deleteById = (id) => {
        fetch(`${BACKEND_URL}/reponses-possibles/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchAll();
                setFeedback(`Reponse with ID ${id} deleted successfully.`);
            } else {
                throw new Error("Failed to delete reponse.");
            }
        })
        .catch(error => setFeedback(error.message));
    };

    const createNew = () => {
        const newResponseValue = prompt("Enter response value:");
        const newNotesStructureId = prompt("Enter notes structure ID:");

        if (newResponseValue) {
            fetch(`${BACKEND_URL}/reponses-possibles`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    response_value: newResponseValue,
                    notes_structure_id: newNotesStructureId
                })
            })
            .then(response => {
                if (response.ok) {
                    fetchAll();
                    setFeedback(`Reponse ${newResponseValue} created successfully.`);
                } else {
                    throw new Error("Failed to create reponse.");
                }
            })
            .catch(error => setFeedback(error.message));
        }
    };

    useEffect(fetchAll, []);

    return (
        <div>
            <h2>Reponses Possibles</h2>
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
                        <th>Reponse ID</th>
                        <th>Reponse Value</th>
                        <th>Notes Structure ID</th>
                        <th>Notes Structure Nom</th>
                    </tr>
                </thead>
                <tbody>
                    {reponses.map(reponse => (
                        <tr key={reponse.response_id}>
                            <td>{reponse.response_id}</td>
                            <td>{reponse.response_value}</td>
                            <td>{reponse.notes_structure_id}</td>
                            <td>{reponse.notes_structure_nom}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReponsesPossibles;


// import React, { useState, useEffect } from 'react';

// function ReponsesPossibles() {
//     const [reponses, setReponses] = useState([]);
//     const [feedback, setFeedback] = useState(""); // To display feedback to the user
//     const BACKEND_URL = 'https://idrv5-5a4cb3ac619e.herokuapp.com';

//     const fetchAll = () => {
//         fetch(`${BACKEND_URL}/reponses_possibles`)
//             .then(response => response.json())
//             .then(data => setReponses(data.reponses_possibles))
//             .catch(error => setFeedback(error.message));
//     };

//     const fetchById = (id) => {
//         fetch(`${BACKEND_URL}/reponses_possibles/${id}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.reponse_possible) {
//                     setReponses([data.reponse_possible]);
//                 } else {
//                     throw new Error("No reponse possible data received.");
//                 }
//             })
//             .catch(error => setFeedback(error.message));
//     };

//     const modifyById = (id) => {
//         // Add fields as necessary based on your structure
//         const newReponse = prompt("Enter new reponse:");

//         if (newReponse) {
//             fetch(`${BACKEND_URL}/reponses_possibles/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     // Update fields as necessary
//                     reponse: newReponse
//                 })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message && !data.message.includes("Erreur")) {
//                     fetchAll();
//                 } else {
//                     console.error('Failed to modify reponse:', data.message);
//                 }
//             })
//             .catch(error => console.error('Error modifying reponse:', error));
//         }
//     };

//     const deleteById = (id) => {
//         fetch(`${BACKEND_URL}/reponses_possibles/${id}`, {
//             method: 'DELETE'
//         })
//         .then(response => {
//             if (response.ok) {
//                 fetchAll();
//                 setFeedback(`Reponse with ID ${id} deleted successfully.`);
//             } else {
//                 throw new Error("Failed to delete reponse.");
//             }
//         })
//         .catch(error => setFeedback(error.message));
//     };

//     const createNew = () => {
//         const newReponse = prompt("Enter reponse:");

//         if (newReponse) {
//             fetch(`${BACKEND_URL}/reponses_possibles`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     reponse: newReponse
//                     // Add other fields as necessary
//                 })
//             })
//             .then(response => {
//                 if (response.ok) {
//                     fetchAll();
//                     setFeedback(`Reponse ${newReponse} created successfully.`);
//                 } else {
//                     throw new Error("Failed to create reponse.");
//                 }
//             })
//             .catch(error => setFeedback(error.message));
//         }
//     };

//     useEffect(fetchAll, []);

//     return (
//         <div>
//             <h2>Reponses Possibles</h2>
//             <div>
//                 <button onClick={fetchAll}>Voir tous</button>
//                 <button onClick={() => fetchById(prompt("Enter ID:"))}>Voir par ID</button>
//                 <button onClick={() => modifyById(prompt("Enter ID:"))}>Modifier par ID</button>
//                 <button onClick={() => deleteById(prompt("Enter ID:"))}>Effacer</button>
//                 <button onClick={createNew}>Créer Nouveau</button>
//             </div>
//             <p>{feedback}</p>
//             <table>
//                 <thead>
//                     {/* Update table headers as necessary */}
//                     <tr>
//                         <th>Reponse ID</th>
//                         <th>Reponse</th>
//                         <th>Associated Notes Structure</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {reponses.map(reponse => (
//                         <tr key={reponse.id}>
//                             {/* Update fields as necessary */}
//                             <td>{reponse.id}</td>
//                             <td>{reponse.response_value}</td>
//                             <td>{reponse.notes_structure_id}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ReponsesPossibles;
