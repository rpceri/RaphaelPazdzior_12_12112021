/**
 * return template with user's activity chart
 * used in MainBloc.jsx
 * tmp comment : help on recharts : https://www.geeksforgeeks.org/create-a-radar-chart-using-recharts-in-reactjs/ & https://recharts.org/en-US/api/BarChart
 * @param { array } props.datasActivity
 * @return { HTMLElement }
 *  datasActivity is an object array who contain for example :
 *  0: Object { day: "2022-07-01", kilogram: 8, calories: 240 }    ​
 *  1: Object { day: "2022-07-02", kilogram: 80, calories: 220 }
 */
 

import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function UserActivityBarChart(props) {
    const sessions = props.datasActivity;

    for (let x = 0; x < sessions.length; x++) sessions[x].day = x+1; // replace date in day by num like figma

    //console.log(sessions)      
    let arrayKilo = sessions.map(el => el.kilogram);
    let arrayCalories = sessions.map(el => el.calories);
    let minKilo = Math.min(...arrayKilo); // opérateur de décomposition (spread opérator) because  Math.min whaiting for a suit of number in argument (ex : 1 ,8, 0)
    let maxKilo = Math.max(...arrayKilo);
    let minCalories = Math.min(...arrayCalories);
    let maxCalories = Math.max(...arrayCalories) ;
    
    return <article className="user-page__graph__left__activity-chart">
        <h2 className="user-page__graph__left__activity-chart__title">Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sessions}
              margin={{
                top: 100,
                left: 20,
                bottom: 20,
              }}
              barGap={10}
              barSize={10}
              width={850} height={250}
            > {/*  width={850} heigh : no effect when ResponsiveContainerused */ }

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
                cursor={{ fill: "#C4C4C4" }}
                />   {/* fill : fond de la zone */} 
    
                <Legend verticalAlign="top" hei ght={36}
                /> {/** could be perosnalised, see https://recharts.org/en-US/api/Legend */} 

                <Bar
                    name="Poids (Kg)"
                    yAxisId="kiloBar"
                    dataKey="kilogram"
                    radius={[50, 50, 0, 0]}
                    fill="#000"
                />
                <Bar
                    name="Calories brûlées"
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
    datasActivity: PropTypes.array
};

