 import PropTypes from 'prop-types'; // permet de déclarer le type des props qui est attendu lorsque vous les récupérez dans vos composants, et de déclencher un warning si ça ne correspond pas

 /**
 * Return html code with key Datas (Calories, Proteines, Glucides, Lipides)
 *
 * @component
 * @summary used in MainComponent.jsx
 * @param { array.<{ calorieCount: Number, proteinCount: Number, lipidCount: Number }> } props.keyDatas
 * @param { Number } props.keyDatas.calorieCount ex: 1
 * @param { Number } props.keyDatas.proteinCount ex: 20
 * @param { Number } props.keyDatas.lipidCount ex: 20
 * 
 * @return { HTMLElement }
 */
 function UserKeyDatas(props) {

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

 UserKeyDatas.propTypes = {
    keyData: PropTypes.shape({
        calorieCount:PropTypes.number.isRequired, proteinCount: PropTypes.number.isRequired, carbohydrateCount: PropTypes.number.isRequired
      }),
 }

 export default UserKeyDatas


 /**
 * Private function that return html code with a single Key Data
 * @summary used in UserKeyDatas
 * @private
 * @param { string } name A label for the Data, also used in css
 * @param { string } value The value of the data
 * @param { string } picture The name of picture ti display, with extension
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

 
