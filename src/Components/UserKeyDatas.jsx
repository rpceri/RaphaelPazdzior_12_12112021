/**
 * return template with key Datas
 * used in MainBloc.jsx
 * @param { string } props.keyDatas
 * @return { HTMLElement }
 */

 import PropTypes from 'prop-types'; // permet de déclarer le type des props qui est attendu lorsque vous les récupérez dans vos composants, et de déclencher un warning si ça ne correspond pas

 export default function UserKeyDatas(props) {
     if(props.keyData !== undefined ) {
         return (        
             <> 
              {keyData('Calories', props.keyData.calorieCount + 'kCal', 'calories-icon.png') }
              {keyData('Proteines', props.keyData.proteinCount + 'g', 'protein-icon.png') }
              {keyData('Glucides', props.keyData.carbohydrateCount + 'g', 'carbs-icon.png') }
              {keyData('Lipides', props.keyData.lipidCount + 'g', 'fat-icon.png') }
             </>
         )
     }
     return (<div>Données en attente</div>)
 }

 /**
 * return template with a single Key Data
 * used in MainBloc.jsx
 * @param { string } a label for the Data, also used in css
 * @param { string } the value of the data
 * @param { string } the name of picture ti display, with extension
 * @return { HTMLElement }
 */

function keyData(name, value, picture) {
    
    if(name !== '') {   
        //if(!(value > 0)) value = 0 

        // { name !== '' && <h1>calorieCount:  <span>{ name}</span></h1> }    
        return (<article className="user-page__graph__right__keyData">
            { picture !== '' && 
                <div className={`icon user-page__graph__right__keyData__${name}`}>
                    <img src={`${process.env.PUBLIC_URL}/pictures/${picture}`} alt={name} />                
                </div>
            }
            <div>
                <p className="user-page__graph__right__keyData__value">{value}</p>
                <p className="user-page__graph__right__keyData__name">{name}</p>
            </div>
        </article>)
    }
}

 
 UserKeyDatas.propTypes = {
    keyData: PropTypes.object
 }