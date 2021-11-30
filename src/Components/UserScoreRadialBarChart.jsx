
import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

/**
 * return template with user'sxcore radial bar chart
 *
 * @component
 * used in MainComponent.jsx
 * @param { number } props.theScore
 * @return { HTMLElement }
 * ​
 *  theScore contains the data t display (float)
*/

function UserScoreRadialBarChart(props) {

    const theScore = props.theScore;
    const formatedScore = [
       { name: 'score', value: theScore*100, fill:"#e60000" }
        ];

    return <article className="user-page__graph__left__bottom__score-chart">
        <div className="user-page__graph__left__bottom__score-chart__background"></div>
        <div className="user-page__graph__left__bottom__score-chart__score">{theScore * 100}%</div>
        <div className="user-page__graph__left__bottom__score-chart__text">de votre<br></br>objectif</div>
        
        <ResponsiveContainer height="100%" width="100%">
             
                <RadialBarChart
                    data={formatedScore}
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={-270}
                    endAngle={180}
                    > {/*  endAngle = 360 - 270 (startAngle) */ }
      
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                />
              
                <RadialBar
                    background={false}
                    clockWise={true}
                    dataKey="value"
                    cornerRadius={15}
                />

                <text
                    x={35}
                    y={25}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="user-page__graph__left__bottom__score-chart__progress-label"
                    >
                    Score
                </text>
                </RadialBarChart>
            </ResponsiveContainer>
         </article>
}

UserScoreRadialBarChart.propTypes = {
    data: PropTypes.number
};

export default UserScoreRadialBarChart