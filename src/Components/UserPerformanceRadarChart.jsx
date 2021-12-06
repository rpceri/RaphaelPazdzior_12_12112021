 import PropTypes from 'prop-types';
 import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

 /**
 * Return html code with user's performance radar chart
 *  
 * @summary used in MainComponent.jsx
 *
 * @component
 * @param { array.<{ value: Number, kind: String }> } props.datasUserPerformance
 * @param { Number } props.datasUserPerformance.value ex: 100
 * @param { String } props.datasUserPerformance.kind ex: 'Force'
 * @return { HTMLElement }
 * ​
 * @example datasUserPerformance is an object array who contain for example<br>
 * 0: Object { value: 100, kind: 'Intensité' }<br>
​ * 1: Object { value: 101, kind: 'Force' }
 */
function UserPerformanceRadarChart(props) {
    let perfsOrdered = props.datasUserPerformance
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
    datasUserPerformance: PropTypes.arrayOf(PropTypes.shape({
        value:PropTypes.number.isRequired, kind: PropTypes.string.isRequired
      }))
}

export default UserPerformanceRadarChart