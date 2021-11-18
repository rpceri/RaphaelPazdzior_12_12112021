/**
 * fetch API datas and return it in an array>
 * @param   {number} id <user id>
 * @return  {array}     <user datas in an array>
 */

import { USER_MAIN_DATA } from  "./datas.js"


export async function GetUserDatas(id) {
    
    let mokedDatas = true 
    console.log(`mokedDatas in 'GetUserDatas  : ${mokedDatas}`)
    let result = ''
    
    if(!mokedDatas) {
      let dataUser = ''
      let isError = false;
        try {
          dataUser = await 
            fetch(`http://localhost:3000/user/${id}`).then((response) => response.json())
    
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
}
  

  