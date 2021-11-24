/**
 * return template with user's activity chart
 * used in MainBloc.jsx
 * tmp comment : help on recharts : https://www.geeksforgeeks.org/create-a-radar-chart-using-recharts-in-reactjs/
 * @param { array } props.datasActivity
 * @return { HTMLElement }
 */
 

import PropTypes from 'prop-types';
import { BarChart, Bar } from 'recharts'

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
          <BarChart data={sessions}>
            <Bar
              yAxisId="kilo"
              dataKey="kilogram"
            />
           </BarChart>
        </div>)
}

UserActivityBarChart.propTypes = {
    datasActivity: PropTypes.array
};

