import React, { useState } from 'react';

function Attachments() {
    const [feedback, setFeedback] = useState('');
    const [constatId, setConstatId] = useState('');
    const [attachments, setAttachments] = useState([]);
    const BACKEND_URL = 'https://idrv6-backend-6fbb6710fe14.herokuapp.com';

    const handleUpload = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', event.target.file.files[0]);
        formData.append('constat_id', constatId);

        fetch(`${BACKEND_URL}/attachments/`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.message);
            viewAll();  // Refresh the list of attachments after uploading a new one
        })
        .catch(error => setFeedback(`Error uploading attachment: ${error.message}`));
    };

    const viewAll = () => {
        fetch(`${BACKEND_URL}/attachments/`)
        .then(response => response.json())
        .then(data => {
            setAttachments(data.attachments);  // Assuming your backend sends data in this format
        })
        .catch(error => setFeedback(`Error fetching attachments: ${error.message}`));
    };

    return (
        <div>
            <h2>Upload Attachment</h2>
            <form onSubmit={handleUpload}>
                <input type="number" placeholder="Constat ID" value={constatId} onChange={(e) => setConstatId(e.target.value)} required />
                <input type="file" name="file" required />
                <button type="submit">Upload</button>
            </form>
            <button onClick={viewAll}>View All Attachments</button>
            <ul>
                {attachments.map(attachment => (
                    <li key={attachment.attachment_id}>
                        Constat ID: {attachment.constat_id}
                        <img
                            src={`data:image/jpeg;base64,${attachment.file}`}
                            alt={`Attachment for Constat ID: ${attachment.constat_id}`}
                            style={{ maxWidth: '100px', maxHeight: '100px' }}  // Thumbnail style
                        />
                    </li>
                ))}
            </ul>

            <p>{feedback}</p>
        </div>
    );
}

export default Attachments;
