/**
 * return template with key Datas
 * used in MainBloc.jsx
 * @param { string } props.keyDatas
 * @return { HTMLElement }
 */

 import PropTypes from 'prop-types'; // permet de déclarer le type des props qui est attendu lorsque vous les récupérez dans vos composants, et de déclencher un warning si ça ne correspond pas

 export default function KeyDatas(props) {
     if(props.keyData !== undefined ) {
         const calorieCount = props.keyData.calorieCount;
         const proteinCount = props.keyData.proteinCount;
         const carbohydrateCount = props.keyData.carbohydrateCount;
         const lipidCount = props.keyData.lipidCount;
         console.log(`calorieCount is : ${calorieCount}`)
         return (        
             <div>
              {calorieCount !== '' && <h1>calorieCount:  <span>{calorieCount}</span></h1> }
              {proteinCount !== '' && <h1>proteinCount:  <span>{proteinCount}</span></h1> }
              {carbohydrateCount.length !== '' && <h1>carbohydrateCount:  <span>{carbohydrateCount}</span></h1> }
              {lipidCount.length !== '' && <h1>proteinCount:  <span>{lipidCount}</span></h1> }
             </div>
         )
     }
     return (<div>Données en attente</div>)
 }
 
 KeyDatas.propTypes = {
    keyData: PropTypes.object
 }