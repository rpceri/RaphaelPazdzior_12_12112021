/**
 * return template with user's activity chart, see https://recharts.org/
 * 
  */
 

import PropTypes from 'prop-types';


export default function UserActivityBarChart(props) {
    const sessions = props.data;
    //console.log(sessions)
  
    return (<div>
                <h2 >Activité quotidienne</h2>

                {sessions.map((session) => (
                    <li key={ session.day }>
                        {session.day} : {session.kilogram}
                    </li>
                ))}
        </div>)
}

UserActivityBarChart.propTypes = {
    data: PropTypes.array
};

