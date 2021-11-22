/**
 * return template with user's performance radar chart
 * used in MainBloc.jsx
 * @param { array } props.datasUserPerformance
 * @return { HTMLElement }
 */
 
 import PropTypes from 'prop-types';


 export default function UserPerformanceRadarChart(props) {
    const perfs = props.datasUserPerformance;
    //console.log(perfs)
  
    return (<div> perfs :
                {perfs.map((perf) => (
                    <li key={ perf.value }>
                        {perf.value} : {perf.kind}
                    </li>
                ))}
        </div>)
}

UserPerformanceRadarChart.propTypes = {
    datasUserPerformance: PropTypes.array
};