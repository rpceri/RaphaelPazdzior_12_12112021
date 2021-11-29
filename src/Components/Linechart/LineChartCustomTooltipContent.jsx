/**
 * return html code for LineChart tooltip 
 * used in UserAverageSessionsLineChart.jsx
 * @return { HTMLElement }
 * ​
 */

export default function LineChartCustomTooltipContent({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="line-chart-custom-tooltip-content">
          <p>{`${payload[0].value} min`}</p>
        </div>
      )
    }
  
    return null
  };