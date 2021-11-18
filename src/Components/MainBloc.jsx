/**
 * display user datas
 * 
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetUserDatas, GetUserActivity, GetUserAverageSessions, GetUserPerformance} from "../Services/GetUserDatas.js";

import UserInfo from "./UserInfo.jsx";
import UserActivityBarChart from "./UserActivityBarChart.jsx";
import UserAverageSessionsLineChart from "./UserAverageSessionsLineChart.jsx";
import UserPerformanceRadarChart from "./UserPerformanceRadarChart.jsx";

 export default function MainBloc() {
    const idParams = parseInt(useParams().id); // recuperation de l'id passé en paramètre

    const [datasUserBase, setDatasUserBase] = useState([]); // allDatas = state, useState=hook, renvoie une paire de val : l’état actuel et une fct pour le modifier 
    const [datasActivity, setDatasActivity] = useState([]);
    const [datasAverageSessions, setDatasAverageSessions] = useState([]);
    const [datasUserPerformance, setDatasUserPerformance] = useState([]);

    console.log(`idParams : ${idParams}`)

    useEffect(() => { // nb : se déclenche après le rendu

        GetUserDatas(idParams)
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

    if(datasUserBase.userInfos !== undefined ) {return (
        <section className="user-page">
            <UserInfo data={datasUserBase.userInfos.firstName} />
            <div className="user-page__graph">
                <div className="user-page__graph__left">
                    <UserActivityBarChart data={datasActivity} />
                    <div className="user-page__graph__left__bottom">
                        <UserAverageSessionsLineChart data={datasAverageSessions} />
                        <UserPerformanceRadarChart data={datasUserPerformance} />
                    </div>
                </div>
                
            </div>
        </section> 
    )
    } else return (<div>op</div>)
}

