import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from '../surveys/questionsIDRv5';
import submitSurvey from '../handlers/handle_survey_completion';  // Adjust path accordingly

const MySurvey = (props) => {
    const onComplete = (survey) => {
        // Sending the survey data upon completion
        submitSurvey(survey.data);
        props.showCompletedPage(survey.data.valuesHash);
    };

    return (
        <Survey.Survey 
            showCompletedPage={false}
            onComplete={onComplete}
            json={Json} 
        />
    );
};

export default MySurvey;
