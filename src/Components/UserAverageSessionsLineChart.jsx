import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import LineChartCustomTooltipContent from "./Linechart/LineChartCustomTooltipContent.jsx";
import LineChartCustomTooltipCursor from "./Linechart/LineChartCustomTooltipCursor.jsx";

/**
 * Return html code with user's duration session chart
 *
 * @component
 * @summary used in MainComponent.jsx
 * @param { array.<{ day: Number, sessionLength: Number }> } props.datasAverageSessions
 * @param { Number } props.datasAverageSessions.day ex: 'L'
 * @param { Number } props.datasAverageSessions.sessionLength ex: 20
 * 
 * @return { HTMLElement }
 * ​
 * @example datasAverageSessions is an object array who contain for example
 *  0: Object { day: 'L', sessionLength: 10 }
 *  1: Object { day: 'M', sessionLength: 20 }
*/
function UserAverageSessionsLineChart(props) {
    var datatoDisplay = props.datasAverageSessions

    let arraySessionLength = datatoDisplay.map(el => el.sessionLength); // to keep sessionLength values only
    let maxSessionLength = Math.max(...arraySessionLength); // max for YAxis

    return (<div  className="user-page__graph__left__bottom__User-Average-Sessions-LineChart">
                <h2>Durée moyenne des<br />sessions</h2>

                {/*datatoDisplay.map((session) => (
                    <li key={ session.day }>
                        {session.day} : {session.sessionLength}
                    </li>
                ))*/}

                <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    data={datatoDisplay} 
                    width={200} height={200} 
                    margin={{ top: 60, right: 0, bottom: 0, left:0 }}>
                    <defs>
                        {/** to drow the line like figma dégrédé */}
                        <linearGradient id="LineGraphEffect" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
                        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                    </defs>

                    <Tooltip
                        content={<LineChartCustomTooltipContent />}
                        cursor={<LineChartCustomTooltipCursor />}
                    />
                    <XAxis
                        dataKey={"day"}
                        stroke="rgba(255, 255, 255, 0.5)"
                        tick={{ fontSize: 12, strokeWidth: 0.1, stroke: 'white'  }}
                        axisLine={false}
                        tickLine={false}
                        padding={{ left: 10, right: 10 }}
                    />

                    <YAxis
                        domain={[-10, maxSessionLength]}
                        hide={true}
                    />

                    <Line                  
                    dataKey="sessionLength" 
                    stroke="url(#LineGraphEffect)"
                    type="monotone" 
                    dot={false}

                    activeDot={{
                        stroke: "rgba(255, 255, 255, 0.40)",
                        strokeWidth: 8,
                        r: 5,
                        fill: "#FFFFFF"
                      }}
                    /> {/* monotone pour arondi 
                        r : diam du rond interne, strokeWidth : diam de l'ombre
                        stroke="#FFFFFF"<= nok car passe aussi le libellé du survol en blank */}

                </LineChart>
                </ResponsiveContainer>
        </div>)
}

UserAverageSessionsLineChart.propTypes = {
    datasAverageSessions: PropTypes.arrayOf(PropTypes.shape({
        day:PropTypes.string.isRequired, sessionLength: PropTypes.number.isRequired
      }))
};


export default UserAverageSessionsLineChart