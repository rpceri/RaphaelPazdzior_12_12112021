/**
 * return template with user's duration session chart
 * used in MainBloc.jsx
 * @param { array } props.datasAverageSessions
 * @return { HTMLElement }
 * ​
 *  datasAverageSessions is an object array who contain for example
 *  0: Object { day: 1, sessionLength: 10 }
 *  1: Object { day: 2, sessionLength: 20 }
 */
 
import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

 export default function UserAverageSessionsLineChart(props) {
    const sessions = props.datasAverageSessions;

    // replace  day by initial
    let joursSeamine = {'1':'L', '2':'M', '3':'Me', '4':'J', '5':'V', '6':'S', '7':'D'}
    for (let x = 0; x < sessions.length; x++) {
        let valJour = sessions[x].day // may be a number beetwenn  1 and 7
        if(joursSeamine[valJour]) sessions[x].day = joursSeamine[valJour]
    }
    //console.log(sessions)
    const arraySessionLength = sessions.map(el => el.sessionLength); // to keep sessionLength values only
    //console.log(arraySessionLength)
    const maxSessionLength = Math.max(...arraySessionLength);

    return (<div  className="user-page__graph__left__bottom__User-Average-Sessions-LineChart">
                <h2>Durée moyenne des<br />sessions</h2>

                {/*sessions.map((session) => (
                    <li key={ session.day }>
                        {session.day} : {session.sessionLength}
                    </li>
                ))*/}

                <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    data={sessions} 
                    width={200} height={200} 
                    margin={{ top: 60, right: 0, bottom: 0, left:0 }}>

                    <XAxis
                        dataKey={"day"}
                        tick={{ fontSize: 12, strokeWidth: 0.1, stroke: 'white'  }}
                        padding={{ left: 10, right: 10 }}
                    />

                    <YAxis
                        domain={[-10, maxSessionLength]}
                        hide={true}
                    />
                    <Tooltip />

                    <Line                  
                    dataKey="sessionLength" 
                    />

                </LineChart>
                </ResponsiveContainer>
        </div>)
}

UserAverageSessionsLineChart.propTypes = {
    datasAverageSessions: PropTypes.array
};