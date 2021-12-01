import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GetUserMainDatas, GetUserActivity, GetUserAverageSessions, GetUserPerformance} from "../Services/GetUserDatas.js";

import UserInfo from "./UserInfo.jsx";
import UserActivityBarChart from "./UserActivityBarChart.jsx";
import UserAverageSessionsLineChart from "./UserAverageSessionsLineChart.jsx";
import UserPerformanceRadarChart from "./UserPerformanceRadarChart.jsx";
import UserScoreRadialBarChart from "./UserScoreRadialBarChart.jsx";
import UserKeyDatas from "./UserKeyDatas.jsx";

/**
 * return html code that display user datas
 *
 * @component
 * @summary used in App.js<br />
 * required : { int } useParams().idUser
 * @return { HTMLElement }
*/
function MainComponent() {
    var idParams = parseInt(useParams().idUser); //store id passed in parameters
    const [statReturnApi, setSstatReturnApi] = useState('virgin');
    const [datasUserBase, setDatasUserBase] = useState([]); // allDatas = state, useState=hook, renvoie une paire de val : l’état actuel et une fct pour le modifier 
    const [datasActivity, setDatasActivity] = useState([]);
    const [datasAverageSessions, setDatasAverageSessions] = useState([]);
    const [datasUserPerformance, setDatasUserPerformance] = useState([]);
    console.log(`idParams : ${idParams}`)

    useEffect( () => { // nb : se déclenche après le rendu
        GetUserMainDatas(idParams)
            .then(returnedDatas => {

                if(returnedDatas === 'error') {
                    setSstatReturnApi('nok')
                } else {
                    setSstatReturnApi('ok')

                    //setDatasUserBase(await GetUserDatas(idParams))    
                    setDatasUserBase(returnedDatas)
                    //console.log(returnedDatas)

                    GetUserActivity(idParams)
                    .then(returnedDatas => {
                        setDatasActivity(returnedDatas);
                        //console.log(returnedDatas)
                    })
                    .catch(err =>console.log("pb api", err))
        
                    GetUserAverageSessions(idParams)
                        .then(returnedDatas => {
                            setDatasAverageSessions(returnedDatas) 
                            //console.log(returnedDatas)
                        })
                        .catch(err =>console.log("pb api", err))
            
                    GetUserPerformance(idParams)
                        .then(returnedDatas => {
                            setDatasUserPerformance(returnedDatas)
                            //console.log(returnedDatas)
                        })
                        .catch(err =>console.log("pb api", err))
                }
            })
            .catch((e) => {
                console.log("pb api1", e)      
                }
            )
    }, [idParams]); // idParams = tabelau de dépendances, pour préciser qu'on veut déclencher l'effet si idParams change

    //console.log(datasAverageSessions)

    if(typeof(datasUserBase) !== 'undefined' && typeof(datasUserBase.userInfos) !== 'undefined') {
        let theScore = 0;
        if(datasUserBase.todayScore !== undefined) theScore = datasUserBase.todayScore

        return (
        <section className="user-page">
            <UserInfo firstName={datasUserBase.userInfos.firstName} />
            <div className="user-page__graph">
                <div className="user-page__graph__left">
                    { datasActivity.length > 0 && 
                    <UserActivityBarChart datasActivity={datasActivity} />
                    }
                    <div className="user-page__graph__left__bottom">
                        { datasAverageSessions.length > 0 && 
                        <UserAverageSessionsLineChart datasAverageSessions={datasAverageSessions} />
                        }
                        { datasUserPerformance.length > 0 && 
                        <UserPerformanceRadarChart datasUserPerformance={datasUserPerformance} />
                        }
                        { theScore !== '' && 
                        <UserScoreRadialBarChart theScore={theScore} />
                        }
                    </div>
                </div>
                <div className="user-page__graph__right">
                    <UserKeyDatas keyData={datasUserBase.keyData} />
                </div>
            </div>
        </section> 
        )
    } 
    
    return (
        <section className="user-page">
            <div class="user-page__entete">
                <p>
                    {statReturnApi === 'nok' && <>Utilisateur inconnu</>}
                    {statReturnApi === 'virgin' && <>Chargement des données...</>}
                </p>
            </div>
        </section> 
        )
}

export default MainComponent