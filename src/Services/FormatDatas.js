/**
 * Return user's activtiy datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * @param   {array} user's activtiy datas to transform
 * @returns {array} transformed user's activtiy datas
 */
export function FormatUserActivity(data) {
    for (let x = 0; x < data.length; x++) data[x].day = x+1; // replace date in day by num like figma
    return data
}

/**
 * Return user's average session datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * @param   {array} user's  average session datas to transform
 * @returns {array} transformed user's  average session datas
 */
export function FormatAverageSessions(data) {
    // replace  day by initial
    let joursSeamine = {'1':'L', '2':'M', '3':'Me', '4':'J', '5':'V', '6':'S', '7':'D'}
    for (let x = 0; x < data.length; x++) {
        let valJour = data[x].day // may be a number beetwenn  1 and 7
        if(joursSeamine[valJour]) data[x].day = joursSeamine[valJour]
    }

    return data
}

/**
 * Return user's performance datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * @param   {array} user's performance datas to transform
 * @returns {array} transformed user's performance datas
 */
export function FormatUserPerformance(data) {
    let kindLabels = {'1':'Cardio', '2':'Energie', '3':'Endurance', '4':'Force', '5':'Vitesse', '6':'Intensité'} // to replace kind number by appropriate label
    let kindOrder = {'1':5, '2':4, '3':3, '4':2, '5':1, '6':0} // to order datas like figma
    var perfsOrdered = []; // will contin ordered datats

    for (let x = 0; x < data.length; x++) {
        let numKind = data[x].kind // may be a number beetwenn  1 and 6
        if(kindLabels[numKind] && kindOrder[numKind] !== undefined) {
            data[x].kind = kindLabels[numKind]  //to change the label

            // to order :
            let indice = kindOrder[numKind]
            //console.log(numKind + ' => indice :' + indice)
            perfsOrdered[indice] = data[x]
        }
    }

    return perfsOrdered
}