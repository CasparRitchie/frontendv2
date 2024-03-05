import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import questions_json from "./surveys/questionsIDRv5";
import themeJsonIDRv5 from "./surveyThemes/themeIDRv5";
import submitSurvey from "../components/handlers/handle_survey_completion";  // Importing the function
console.log(submitSurvey)

function SurveyComponent() {
    const survey = new Model(questions_json);
    survey.applyTheme(themeJsonIDRv5);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        submitSurvey(sender.data).catch(error => {  // Using the function
            console.error("Error submitting survey:", error);
        });
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;
