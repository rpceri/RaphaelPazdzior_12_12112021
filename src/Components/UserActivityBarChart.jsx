/**
 * return template with user's activity chart
 * used in MainBloc.jsx
 * tmp comment : help on recharts : https://www.geeksforgeeks.org/create-a-radar-chart-using-recharts-in-reactjs/
 * @param { array } props.datasActivity
 * @return { HTMLElement }
 *  datasActivity est un tabelau d'objet contenant :
 *  0: Object { day: "2022-07-01", kilogram: 8, calories: 240 }    ​
 *  1: Object { day: "2022-07-02", kilogram: 80, calories: 220 }
 */
 

import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function UserActivityBarChart(props) {
    const sessions = props.datasActivity;

    for (let x = 0; x < sessions.length; x++) sessions[x].day = x+1; // replace date in day by num like figma

    //console.log(sessions)      
    let arrayKilo = sessions.map(el => el.kilogram);
    let arrayCalories = sessions.map(el => el.calories);
    let minKilo = Math.min(...arrayKilo); // opérateur de décomposition (spread opérator) car Math.min attent une suite de ciffre en argument (ex : 1 ,8, 0)
    let maxKilo = Math.max(...arrayKilo);
    let minCalories = Math.min(...arrayCalories);
    let maxCalories = Math.max(...arrayCalories) ;
    
    return <article className="user-page__graph__left__activity-chart">
        <h2 className="user-page__graph__left__activity-chart__title">Activité quotidienne</h2>

            <BarChart
              data={sessions}
              margin={{
                top: 100,
                right: 0,
                left: 20,
                bottom: 20,
              }}
              barGap={10}
              barSize={10}
              width={850} height={250}
            >

            <CartesianGrid strokeDasharray="3 3" vertical={false} /> 
              <XAxis
                dataKey="day"
                tickLine={false}
                tick={{ fontSize: 12, strokeWidth: 0.5, stroke: 'grey' }}
                dy={15}
              />

              <YAxis
                yAxisId="kilo"
                orientation="right"
                interval="number"
                allowDecimals={false}
                tickLine={false}
                axisLine={false}
                hide={false}
                tick={{ fontSize: 14 }}
                domain={[minKilo, maxKilo]}
              />
              <YAxis
                yAxisId="cal"
                hide={true}
                domain={[minCalories, maxCalories]}
              />


              <Bar
                yAxisId="kilo"
                dataKey="kilogram"
                radius={[50, 50, 0, 0]}
                fill="#000"
              />
              <Bar
                yAxisId="cal"
                dataKey="calories"
                fill="#e60000"
                radius={[50, 50, 0, 0]}
              />
          </BarChart>

      </article>
}

UserActivityBarChart.propTypes = {
    datasActivity: PropTypes.array
};

