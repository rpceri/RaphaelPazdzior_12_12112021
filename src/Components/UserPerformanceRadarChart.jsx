 import PropTypes from 'prop-types';
 import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

 /**
 * return html code with user's performance radar chart
 * used in MainComponent.jsx
 *
 * @component
 * @param { array.<{ value: Number, kind: Number }> } props.datasUserPerformance
 * @return { HTMLElement }
 * ​
 *  datasUserPerformance is an object array who contain for example
 * 0: Object { value: 100, kind: 1 }
​ * 1: Object { value: 101, kind: 2 }
 */

function UserPerformanceRadarChart(props) {
    //var perfsUnordered = props.datasUserPerformance // attention si on fait cela et qu'on modifie le 2d tableau, le 1er va aussi etre modifié
    var perfsUnordered = JSON.parse(JSON.stringify(props.datasUserPerformance)) // BE VERY CARREFUL ATTENTION : copy an objet table shoud be like that, either, props.datasUserPerformance is also modified

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

    //console.log(perfsOrdered)
  
    return (<div className="user-page__graph__left__bottom__radar-chart">
                {   /*

                perfsUnordered.map((perf) => (
                    <li key={ perf.value }>
                        {perf.value} : {perf.kind}
                    </li>
                )) */}
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={perfsOrdered} >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} ticks={false} tick={{ fontSize: 10 }} />
                        <Radar dataKey="value" stroke="rgba(230, 0, 0, 0)" fill="#e60000" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
        </div>)
}

UserPerformanceRadarChart.propTypes = {
    datasUserPerformance: PropTypes.array
}

export default UserPerformanceRadarChart