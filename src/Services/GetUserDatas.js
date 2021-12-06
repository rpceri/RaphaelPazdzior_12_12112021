
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from  "./datas.js"

const apisUrl = 'http://localhost:3000'
const mokedDatas = false // if we want to use test datas or real datas api
console.log(`mokedDatas in 'GetUserDatas  : ${mokedDatas}`)

/**
 * Return USER_MAIN_DATA in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * in this file, you can change mokedDatas (true or false) to choose source of datas<br>
 * you can also change the url of the api (const apisUrl )
 * @param   {number} id user id
 * @returns {Object | "error"}  user datas : id,  keyData  { calorieCount, proteinCount, carbohydrateCount, lipidCount }, todayScore, userInfos: Object { firstName, lastName, ag e}
 * can return the "error" string if the user id is not found by the api
 * @throws {Error}
 */
 export async function GetUserMainDatas(id) {
  try {
    id = _validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}`);
      const dataUser = await response.json()
      //et surtout pas return await response.json().data;
      //moins bien :
      //let dataUser = await fetch(`${apisUrl}/user/${id}`).then((response) => response.json())
      if(dataUser === 'can not get user') return 'error';
      return dataUser.data
    } 
    return  USER_MAIN_DATA[0];
  } catch (error) {
    throw error;
  }
}
/*
export async function GetUserDatasH(id) {      
    let result = ''

    if(!mokedDatas) {
      let dataUser = ''
      let isError = false;
        try {
          dataUser = await 
            fetch(`${apisUrl}/user/${id}`).then((response) => response.json())
        } catch (error) {
          console.log(error)
          isError = true;
        }
      
      result = isError ? "error" : dataUser.data
    }
    else {
      result = USER_MAIN_DATA[0]
    }
    //console.log(result) 
    return result;
}*/


/**
 * return USER_ACTIVITY datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * in this file, you can change mokedDatas (true or false) to choose source of datas<br>
 * you can also change the url of the api (const apisUrl )
 * @param   {number} id user id
 * @return  {array } user datas in an array
 * @throws {Error}
 */
export async function GetUserActivity(id) {
  try {
      id = _validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}/activity`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data;  
      return dataUser.data.sessions
    } 
    return  USER_ACTIVITY[0].sessions;
  } catch (error) {
    throw error;
  }
}


/**
 * Return USER_AVERAGE_SESSIONS in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * in this file, you can change mokedDatas (true or false) to choose source of datas<br>
 * you can also change the url of the api (const apisUrl )
 * 
 * @param   {number} id user id
 * @return  {array} user datas in an array
 * @throws {Error}
 */
export async function GetUserAverageSessions(id) { // ressemble a activity dans la structure
  try {
    id = _validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}/average-sessions`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data.sessions
      return dataUser.data.sessions
    } 
    return  USER_AVERAGE_SESSIONS[0].sessions;
  } catch (error) {
    throw error;
  }
}


/**
 * Return USER_PERFORMANCE in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * in this file, you can change mokedDatas (true or false) to choose source of datas<br>
 * you can also change the url of the api (const apisUrl )
 * @param   {Integer} id user id
 * @return  {array} user datas in an array
 * @throws {Error}
 */
export async function GetUserPerformance(id) {
  try {
    id = _validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}/performance`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data.data  
      return dataUser.data.data
    } 
    return  USER_PERFORMANCE[0].data
  } catch (error) {
    throw error;
  }
}


/**
 * @summary used by other functions in this file to check if a value is an integer
 * @param { * } num 
 * @private
 * @returns { Number }
 */
function _validInteger(num){
  num = parseInt(num);
  if (isNaN(num)) throw new Error("id is not an Integer");
  return num;
}