/**
 * fetch API datas and return it in an array, or return mocked datas if const mokedDatas = true
 *  used in MainBloc.jsx
 * for each function :
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */
 


import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from  "./datas.js"

const apisUrl = 'http://localhost:3000'
let mokedDatas = false // if we want to use test datas or real datas api
console.log(`mokedDatas in 'GetUserDatas  : ${mokedDatas}`)

/**
 * return USER_MAIN_DATA in an array
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */

export async function GetUserDatas(id) {      
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
    console.log(result) 
    return result;
}


/**
 * return USER_ACTIVITY datas in an array
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */

export async function GetUserActivity(id) {
  let result = ''

  if(!mokedDatas) {
    let dataUser = ''
    let isError = false;
      try {
        dataUser = await 
          fetch(`${apisUrl}/user/${id}/activity`).then((response) => response.json())
      } catch (error) {
        console.log(error)
        isError = true;
      }
    
    result = isError ? "error" : dataUser.data.sessions
  }
  else {
    result = USER_ACTIVITY[0].sessions
  }
 //console.log(result) 
  return result;
}


/**
 * return USER_AVERAGE_SESSIONS datas in an array
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */


export async function GetUserAverageSessions(id) { // ressemble a activity dans la structure
  let result = ''

  if(!mokedDatas) {
    let dataUser = ''
    let isError = false;
      try {
        dataUser = await 
          fetch(`${apisUrl}/user/${id}/average-sessions`).then((response) => response.json())
      } catch (error) {
        console.log(error)
        isError = true;
      }
    
    result = isError ? "error" : dataUser.data.sessions
  }
  else {
    result = USER_AVERAGE_SESSIONS[0].sessions
  }
  //console.log(result) 
  return result;
}


/**
 * return USER_PERFORMANCE datas in an array
 * @param   {number} id user id
 * @return  {array |"error"}     user datas in an array
 */

export async function GetUserPerformance(id) {
  let result = ''

  if(!mokedDatas) {
    let dataUser = ''
    let isError = false;
      try {
        dataUser = await 
          fetch(`${apisUrl}/user/${id}/performance`).then((response) => response.json())
      } catch (error) {
        console.log(error)
        isError = true;
      }
    
    result = isError ? "error" : dataUser.data.data
  }
  else {
    result = USER_PERFORMANCE[0].data
  }
  //console.log(result) 
  return result;
}