import React, { useState, useEffect } from 'react';

function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [feedback, setFeedback] = useState(""); // Display feedback to the user
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const fetchAll = () => {
        fetch(`${BACKEND_URL}/restaurants`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch restaurants.");
            })
            .then(data => setRestaurants(data.restaurants))
            .catch(error => setFeedback(error.message));
    };

    const fetchById = (id) => {
        fetch(`${BACKEND_URL}/restaurants/${id}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch restaurant by ID.");
            })
            .then(data => {
                if (data.restaurant) {
                    setRestaurants([data.restaurant]);
                } else {
                    throw new Error("No restaurant data received.");
                }
            })
            .catch(error => setFeedback(error.message));
    };

    // You might want to add more fields to modify as required
    const modifyById = (id) => {
        const newNom = prompt("Nouveau Nom:");
        const newAdresse1 = prompt("Nouvelle Adresse 1:");
        const newAdresse2 = prompt("Nouvelle Adresse 2:");
        const newAdresse3 = prompt("Nouvelle Adresse 3:");
        const newCP = prompt("Nouveau CP:");
        const newVille = prompt("Nouvelle Ville:");
        const newCoords = prompt("Nouvelles Coordonnées:");
        const newClientId = prompt("Nouveau Client ID:");

        if (newNom) {  // You can add more validation checks as needed
            fetch(`${BACKEND_URL}/restaurants/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    restaurant_nom: newNom,
                    restaurant_adresse1: newAdresse1,
                    restaurant_adresse2: newAdresse2,
                    restaurant_adresse3: newAdresse3,
                    restaurant_cp: newCP,
                    restaurant_ville: newVille,
                    restaurant_coords: newCoords,
                    client_id: newClientId
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
        fetch(`${BACKEND_URL}/restaurants/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchAll();
                setFeedback(`Restaurant with ID ${id} deleted successfully.`);
            } else {
                throw new Error("Failed to delete restaurant.");
            }
        })
        .catch(error => setFeedback(error.message));
    };

    const createNew = () => {
        const newNom = prompt("Nouveau Nom:");
        const newAdresse1 = prompt("Nouvelle Adresse 1:");
        const newAdresse2 = prompt("Nouvelle Adresse 2:");
        const newAdresse3 = prompt("Nouvelle Adresse 3:");
        const newCP = prompt("Nouveau CP:");
        const newVille = prompt("Nouvelle Ville:");
        const newCoords = prompt("Nouvelles Coordonnées:");
        const newClientId = prompt("Nouveau Client ID:");

        if (newNom) {  // You can add more validation checks as needed
            fetch(`${BACKEND_URL}/restaurants/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    restaurant_nom: newNom,
                    restaurant_adresse1: newAdresse1,
                    restaurant_adresse2: newAdresse2,
                    restaurant_adresse3: newAdresse3,
                    restaurant_cp: newCP,
                    restaurant_ville: newVille,
                    restaurant_coords: newCoords,
                    client_id: newClientId
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message.includes("succès")) {
                    fetchAll();
                    setFeedback(`Restaurant ${newNom} created successfully.`);
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
            <h2>Restaurants</h2>
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
                        <th>restaurant_id</th>
                        <th>restaurant_nom</th>
                        <th>restaurant_adresse1</th>
                        <th>restaurant_adresse2</th>
                        <th>restaurant_adresse3</th>
                        <th>restaurant_cp</th>
                        <th>restaurant_ville</th>
                        <th>restaurant_coords</th>
                        <th>client_id</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map(restaurant => (
                        <tr key={restaurant.restaurant_id}>
                            <td>{restaurant.restaurant_id}</td>
                            <td>{restaurant.restaurant_nom}</td>
                            <td>{restaurant.restaurant_adresse1}</td>
                            <td>{restaurant.restaurant_adresse2}</td>
                            <td>{restaurant.restaurant_adresse3}</td>
                            <td>{restaurant.restaurant_cp}</td>
                            <td>{restaurant.restaurant_ville}</td>
                            <td>{restaurant.restaurant_coords}</td>
                            <td>{restaurant.client_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Restaurants;
