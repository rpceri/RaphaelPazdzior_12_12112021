/**
 * fetch API datas and return it in an array, or return mocked datas if const mokedDatas = true
 *  used in MainBloc.jsx
 * for each function :
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */
 


import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from  "./datas.js"

const apisUrl = 'http://localhost:3000'
let mokedDatas = true // if we want to use test datas or real datas api
console.log(`mokedDatas in 'GetUserDatas  : ${mokedDatas}`)

/**
 * return USER_MAIN_DATA in an array
 * @param   {number} id user id
 * //@return  {array |"error"}     user datas in an array
 * @returns {Object}  
 * @throws {Error}
 */

 export async function GetUserMainDatas(id) {
  try {
    id = validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data;
      //moins bien :
      //let dataUser = await fetch(`${apisUrl}/user/${id}`).then((response) => response.json())     
      return dataUser.data
    } 
    return  USER_MAIN_DATA[0];
  } catch (error) {
    throw error;
  }
}/*
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
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */

export async function GetUserActivity(id) {
  try {
      id = validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}/activity`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data;
      //moins bien :
      //let dataUser = await fetch(`${apisUrl}/user/${id}`).then((response) => response.json())     
      return dataUser.data.sessions
    } 
    return  USER_ACTIVITY[0].sessions;
  } catch (error) {
    throw error;
  }
}


/**
 * return USER_AVERAGE_SESSIONS datas in an array
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */


export async function GetUserAverageSessions(id) { // ressemble a activity dans la structure
  try {
    id = validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}/average-sessions`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data.sessions
      //moins bien :
      //let dataUser = await fetch(`${apisUrl}/user/${id}`).then((response) => response.json())     
      return dataUser.data.sessions
    } 
    return  USER_AVERAGE_SESSIONS[0].sessions;
  } catch (error) {
    throw error;
  }
}


/**
 * return USER_PERFORMANCE datas in an array
 * @param   {Integer} id user id
 * @return  {array |"error"}     user datas in an array
 */

export async function GetUserPerformance(id) {
  try {
    id = validInteger(id);
    if (!mokedDatas) {
      const response = await fetch(`${apisUrl}/user/${id}/performance`);
      const dataUser = await response.json();
      //et surtout pas return await response.json().data.data
      //moins bien :
      //let dataUser = await fetch(`${apisUrl}/user/${id}`).then((response) => response.json())     
      return dataUser.data.data
    } 
    return  USER_PERFORMANCE[0].data
  } catch (error) {
    throw error;
  }
}




function validInteger(num){
  num = parseInt(num);
  if (isNaN(num)) throw new Error("id is not an Integer");
  return num;
}