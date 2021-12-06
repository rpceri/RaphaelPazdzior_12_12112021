/**
 * Return user's activtiy datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * @param   {array} user's activtiy datas to transform
 * @returns {array} transformed user's activtiy datas
 */
export function FormatUserActivity(dataToFormat) {
    for (let x = 0; x < dataToFormat.length; x++) dataToFormat[x].day = x+1; // replace date in day by num like figma
    return dataToFormat
}

/**
 * Return user's average session datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * @param   {array} user's  average session datas to transform
 * @returns {array} transformed user's  average session datas
 */
export function FormatAverageSessions(dataToFormat) {

    // replace  day by initial
    let joursSeamine = {'1':'L', '2':'M', '3':'Me', '4':'J', '5':'V', '6':'S', '7':'D'}
    for (let x = 0; x < dataToFormat.length; x++) {
        let valJour = dataToFormat[x].day // may be a number beetwenn  1 and 7
        if(joursSeamine[valJour]) dataToFormat[x].day = joursSeamine[valJour]
    }

    return dataToFormat
}

/**
 * Return user's performance datas in an array
 * 
 * @summary Used in MainComponent.jsx<br>
 * @param   {array} user's performance datas to transform
 * @returns {array} transformed user's performance datas
 */
export function FormatUserPerformance(dataToFormat) {

    //var perfsUnordered = props.datasUserPerformance // attention si on fait cela et qu'on modifie le 2d tableau, le 1er va aussi etre modifié
    var perfsUnordered = JSON.parse(JSON.stringify(dataToFormat)) // BE VERY CARREFUL ATTENTION : copy an objet table shoud be like that, either, props.datasUserPerformance is also modified

    let kindLabels = {'1':'Cardio', '2':'Energie', '3':'Endurance', '4':'Force', '5':'Vitesse', '6':'Intensité'} // to replace kind number by appropriate label
    let kindOrder = {'1':5, '2':4, '3':3, '4':2, '5':1, '6':0} // to order datas like figma
    var perfsOrdered = []; // will contin ordered datats

    for (let x = 0; x < perfsUnordered.length; x++) {
        let numKind = perfsUnordered[x].kind // may be a number beetwenn  1 and 6
        if(kindLabels[numKind] && kindOrder[numKind] !== undefined) {
            perfsUnordered[x].kind = kindLabels[numKind]  //to change the label

            // to order :
            let indice = kindOrder[numKind]
            //console.log(numKind + ' => indice :' + indice)
            perfsOrdered[indice] = perfsUnordered[x]
        }
    }

    return perfsOrdered
}