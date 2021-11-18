/**
 * return template with user's duration session chart, see https://recharts.org/
 * 
  */
 
import PropTypes from 'prop-types';


 export default function UserAverageSessionsLineChart(props) {
    const sessions = props.data;
    //console.log(sessions)
  
    return (<div>
                <h2>Durée moyenne des<br />sessions</h2>

                {sessions.map((session) => (
                    <li key={ session.day }>
                        {session.day} : {session.sessionLength}
                    </li>
                ))}
        </div>)
}

UserAverageSessionsLineChart.propTypes = {
    data: PropTypes.array
};