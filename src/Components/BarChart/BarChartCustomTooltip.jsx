export default function BarChartCustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="user-page__graph__left__activity-chart__tooltip">
              <p>{`${payload[0].value} kg`}</p>
              <p>{`${payload[1].value} kcal`}</p>
        </div>
      );
    }
  
    return null;
  };