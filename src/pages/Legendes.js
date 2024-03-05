import React, { useState, useEffect } from 'react';

function Legendes() {
    const [legendes, setLegendes] = useState([]);
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    useEffect(() => {
        fetch(`${BACKEND_URL}/legendes`)
            .then(response => response.json())
            .then(data => setLegendes(data))
            .catch(error => console.error('Error fetching Legendes:', error));
    }, []);

    return (
        <div>
            <h2>Legendes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Legende ID</th>
                        <th>legende_name, , </th>
                        <th>chapitre</th>
                        <th>legende_elements</th>
                    </tr>
                </thead>
                <tbody>
                    {legendes.map(legende => (
                        <tr key={legende.legende_id}>
                            <td>{legende.legende_id}</td>
                            <td>{legende.legende_name}</td>
                            <td>{legende.chapitre}</td>
                            <td>{legende.legende_elements}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Legendes;
