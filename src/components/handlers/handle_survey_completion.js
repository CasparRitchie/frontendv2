import  createAudit  from '../../pages/Audits';
import { createConstat } from '../../pages/Constats';

function extractAuditData(surveyData) {
    console.log("extracting using extractAuditData and here is the survey data")
    console.log(surveyData)
    // Extracting relevant data from surveyData
    return {
        client_id: surveyData.client_nom,
        date_audit: surveyData.audit_date,
        client_contact_id: surveyData.client_contacts[0].client_contact_id,  // assuming there's always at least one contact
        gestionnaire_id: surveyData.restaurant_info[0].gestionnaire_nom,
        auditeur_id: surveyData.auditeur_nom,
        restaurant_id: surveyData.restaurant_info[0].restaurant_id,
        // Default values, adjust as per actual survey structure
        nombre_de_couverts: 0,
        horaires_du_self_debut: "11:30:00",  // or another default value
        horaires_du_self_fin: "14:00:00"  // or another default value
    };
}

function extractConstatData(surveyData, auditId) {
    const constatDataArray = [];
    console.log("extracting using extractConstatData and here is the survey data and audit ID")
    console.log(surveyData)
    console.log(auditId)
    // Iterating over all keys in surveyData to find relevant data
    for (const [key, value] of Object.entries(surveyData)) {
        if (key.startsWith("sous_titre")) {
            for (const response of value) {
                for (const [responseKey, responseValue] of Object.entries(response)) {
                    // Check if the key starts with "response_" to extract score
                    if (responseKey.startsWith("response_")) {
                        constatDataArray.push({
                            element_id: responseKey,
                            audit_id: auditId,
                            observations: response["comment_" + responseKey.split("_").slice(1).join("_")] || "",
                            score: responseValue
                        });
                    }
                }
            }
        }
    }

    return constatDataArray;
}
const submitSurvey = async (surveyData) => {
    console.log("About to submit Survey")
    try {
        const auditData = extractAuditData(surveyData);
        const auditResponse = await createAudit(auditData);

        const { audit_id: auditId } = auditResponse;

        const constatDataArray = extractConstatData(surveyData, auditId);
        for(const constatData of constatDataArray) {
            console.log("Looping through constatDataArray")
            try {
                await createConstat(constatData);
            } catch (error) {
                console.error("Error in constat creation loop:", error);
            }
        }
    } catch (error) {
        console.error("Error in submitSurvey function:", error);
    }
};

export default submitSurvey;
