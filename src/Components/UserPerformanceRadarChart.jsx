/**
 * return template with user's performance radar chart, see https://recharts.org/
 * 
  */
 
 import PropTypes from 'prop-types';


 export default function UserPerformanceRadarChart(props) {
    const perfs = props.data;
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
    data: PropTypes.array
};