import React, { useState, useEffect } from 'react';

function CreateAudit() {
    const [auditStructure, setAuditStructure] = useState([]);
    const [feedback, setFeedback] = useState('');
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    useEffect(() => {
        fetch(`${BACKEND_URL}/create-audit/audit_structure`)
        .then(response => response.json())
        .then(data => {
            setAuditStructure(data.audit_structure);
        })
        .catch(error => setFeedback(`Error fetching audit structure: ${error.message}`));
    }, []);

    return (
        <div>
            {feedback && <div className="feedback">{feedback}</div>}
            {auditStructure.map(chapitre => (
                <div key={chapitre.chapitre}>
                    <h2>{chapitre.chapitre}</h2>
                    {chapitre.titres.map(titre => (
                        <div key={titre.titre}>
                            <h3>{titre.titre}</h3>
                            {titre.elements.map(detailElement => (
                                <div key={`${detailElement.element_id}-${detailElement.element_nom}`}>
                                    {detailElement.sous_titre && <h4>{detailElement.sous_titre}</h4>}
                                    <p>{detailElement.element_nom}</p>
                                    <select name="response">
                                        {detailElement.reponses_possibles.map(response => (
                                            <option key={response.response_id} value={response.response_id}>
                                                {response.response_value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

}

export default CreateAudit;
