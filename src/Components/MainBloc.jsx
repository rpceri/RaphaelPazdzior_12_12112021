/**
 * return html code that display user datas
 * used in App.js
 * required : { int } useParams().idUser
 * @return { HTMLElement }
 */
 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GetUserMainDatas, GetUserActivity, GetUserAverageSessions, GetUserPerformance} from "../Services/GetUserDatas.js";

import UserInfo from "./UserInfo.jsx";
import UserActivityBarChart from "./UserActivityBarChart.jsx";
import UserAverageSessionsLineChart from "./UserAverageSessionsLineChart.jsx";
import UserPerformanceRadarChart from "./UserPerformanceRadarChart.jsx";
import UserScoreRadialBarChart from "./UserScoreRadialBarChart.jsx";
import UserKeyDatas from "./UserKeyDatas.jsx";


 export default function MainBloc() {
    const idParams = parseInt(useParams().idUser); //store id passed in parameters

    const [datasUserBase, setDatasUserBase] = useState([]); // allDatas = state, useState=hook, renvoie une paire de val : l’état actuel et une fct pour le modifier 
    const [datasActivity, setDatasActivity] = useState([]);
    const [datasAverageSessions, setDatasAverageSessions] = useState([]);
    const [datasUserPerformance, setDatasUserPerformance] = useState([]);

    //console.log(`idParams : ${idParams}`)

    useEffect( () => { // nb : se déclenche après le rendu
        //setDatasUserBase(await GetUserDatas(idParams))
        GetUserMainDatas(idParams)
            .then(returnedDatas => {
                setDatasUserBase(returnedDatas); 
        })
        GetUserActivity(idParams)
            .then(returnedDatas => {
                setDatasActivity(returnedDatas); 
            })
         GetUserAverageSessions(idParams)
            .then(returnedDatas => {
                setDatasAverageSessions(returnedDatas); 
            })
        GetUserPerformance(idParams)
            .then(returnedDatas => {
                setDatasUserPerformance(returnedDatas); 
            })

    }, [idParams]); // idParams = tabelau de dépendances, pour préciser qu'on veut déclencher l'effet si idParams change

    //console.log(datasAverageSessions)

    let theScore = 0;
    if(datasUserBase.todayScore !== undefined) theScore = datasUserBase.todayScore
    //console.log(theScore)

    if(datasUserBase.userInfos !== undefined ) {return (
        <section className="user-page">
            <UserInfo firstName={datasUserBase.userInfos.firstName} />
            <div className="user-page__graph">
                <div className="user-page__graph__left">
                    <UserActivityBarChart datasActivity={datasActivity} />
                    <div className="user-page__graph__left__bottom">
                        <UserAverageSessionsLineChart datasAverageSessions={datasAverageSessions} />
                        <UserPerformanceRadarChart datasUserPerformance={datasUserPerformance} />
                        <UserScoreRadialBarChart theScore={theScore} />
                    </div>
                </div>
                <div className="user-page__graph__right">
                    <UserKeyDatas keyData={datasUserBase.keyData} />
                </div>
            </div>
        </section> 
    )
    } else return (<div>No datats</div>)
}

