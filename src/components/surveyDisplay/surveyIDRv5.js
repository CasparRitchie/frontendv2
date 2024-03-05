import React, {useState, useCallback} from 'react';
import MySurvey from '../surveyTypes/surveytypeIDRv5';

const SurveyIDRv5 = () => {
        const [showPage, setShowPage] = useState(true);

        const onCompletePage = useCallback((data)=>{
            console.log(data);
            setShowPage(!showPage)
        },[showPage])
        
        const setFinalPage = () => {
            return(
                <main>
                    <h1>Très bonne journée à vous</h1>
                </main>
            )
        }
        return(
            <div className="App">
                {
                    showPage?
                    <MySurvey showCompletedPage={data=>onCompletePage(data)} />:
                    setFinalPage()
                }
            </div>
    )
}
export default SurveyIDRv5;
