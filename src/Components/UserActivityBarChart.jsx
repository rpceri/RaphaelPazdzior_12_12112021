import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import BarChartCustomTooltip from "./BarChart/BarChartCustomTooltip.jsx";

/**
 * Return html code with user's activity chart
 *
 * @component
 * @summary used in MainComponent.jsx
 * @param { array.<{ date: String, kilogram: Number, calories: Number }> } props.datasActivity
 * @param { String } props.datasActivity.day ex: 2022-07-01
 * @param { Number } props.datasActivity.kilogram wheight in kg, ex : 80
 * @param { Number } props.datasActivity.calories burned calories, ex : 220
 * @return { HTMLElement }
 * @example datasActivity is an object array who contain for example :
 *  0: Object { day: "2022-07-01", kilogram: 81, calories: 240 }    ​
 *  1: Object { day: "2022-07-02", kilogram: 80, calories: 220 }
*/
 function UserActivityBarChart(props) {
    var datatoDisplay = JSON.parse(JSON.stringify(props.datasActivity))

    for (let x = 0; x < datatoDisplay.length; x++) datatoDisplay[x].day = x+1; // replace date in day by num like figma

    //console.log(datatoDisplay)      
    let arrayKilo = datatoDisplay.map(el => el.kilogram);
    let arrayCalories = datatoDisplay.map(el => el.calories);
    let minKilo = 0; 
    let maxKilo = Math.max(...arrayKilo); // opérateur de décomposition (spread opérator) because  Math.min waiting for a suit of number in argument (ex : 1 ,8, 0)
    let minCalories = 0 //Math.min(...arrayCalories);
    let maxCalories = Math.max(...arrayCalories) ;

  // console.log(`maxCalories: ${maxCalories}`)


    return <article className="user-page__graph__left__activity-chart">
        <h2 className="user-page__graph__left__activity-chart__title">Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={datatoDisplay}
              margin={{
                top: 100,
                left: 20,
                bottom: 20,
              }}
              barGap={10}
              barSize={10}
              width={850} height={250}
            > {/*  width & height : no effect when ResponsiveContaineru sed */ }

                <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* strokeDasharray  pattern of dashes and gaps used to paint the lines of the grid = lignes du fond dans graph */ }

                <XAxis
                dataKey="day"
                tickLine={false} 
                tick={{ fontSize: 12, strokeWidth: 0.5, stroke: '#C4C4C4' }}
                dy={15}
                />{/* tickLine = marqueur juste on top of the tick (tick = caption) */ }

                <YAxis
                yAxisId="kiloBar"
                orientation="right"
                interval="number"
                allowDecimals={false}
                tickLine={false}
                axisLine={false}
                hide={false}
                tick={{ fontSize: 12, strokeWidth: 0.5, stroke: '#C4C4C4' }}
                domain={[minKilo, maxKilo]}
                />
                <YAxis
                yAxisId="calBar"
                hide={true}
                domain={[minCalories, maxCalories]}
                /> {/* hide={true} becaus figma no show this info */ }

                <Tooltip
                cursor={{ fill: "#dfdfdf" }}
                content={<BarChartCustomTooltip />}
                />   {/* fill : fond de la zone */} 
    
                <Legend verticalAlign="top" height={36} align="right" iconType="circle"
                /> {/** could be perosnalised, see https://recharts.org/en-US/api/Legend */} 

                <Bar
                    name="Poids (Kg)"
                    yAxisId="kiloBar"
                    dataKey="kilogram"
                    radius={[50, 50, 0, 0]}
                    fill="#000"
                />
                <Bar
                    name="Calories brûlées (Kcal)"
                    yAxisId="calBar"
                    dataKey="calories"
                    fill="#E60000"
                    radius={[50, 50, 0, 0]}
                />
          </BarChart>
        </ResponsiveContainer>
      </article>
}

UserActivityBarChart.propTypes = {
    //datasActivity: PropTypes.array
    datasActivity: PropTypes.arrayOf(PropTypes.shape({
      day:PropTypes.string.isRequired, kilogram:PropTypes.number.isRequired, calories: PropTypes.number.isRequired
    }))
}

export default UserActivityBarChart