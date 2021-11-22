/**
 * return template with user's activity chart
 * used in MainBloc.jsx
 * @param { array } props.datasActivity
 * @return { HTMLElement }
 */
 

import PropTypes from 'prop-types';


export default function UserActivityBarChart(props) {
    const sessions = props.datasActivity;
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
    datasActivity: PropTypes.array
};

