/**
 * display user datas
 * 
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetUserDatas } from "../Services/GetUserDatas.js";
import UserInfo from "./UserInfo.jsx";


 export default function MainBloc() {

    const [allDatas, setAllDatas] = useState([]); // allDatas = state, useState=hook, renvoie une paire de val : l’état actuel et une fct pour le modifier 
    const [error, setError] = useState();
    const idParams = parseInt(useParams().id); // recuperation de l'id passé en paramètre
    console.log(`idParams : ${idParams}`)

    useEffect(() => { // nb : se déclenche après le rendu
        let mounted = true;
        GetUserDatas(idParams)
            .then(returnedDatas => {
                if (mounted) {
                    setAllDatas(returnedDatas);
                }
            })
            .catch(items => {
                if (mounted) {
                    setError(items.message);
                }
            })
        return () => mounted = false;
    }, [idParams, error]); // idParams, error = tabelau de dépendances, pour préciser qu'on veut déclencher l'effet si idParams ou error change
    
    if(allDatas.userInfos !== undefined ) {return (
       <UserInfo data={allDatas.userInfos.firstName} /> 
    )
    } else return (<div>op</div>)
}

