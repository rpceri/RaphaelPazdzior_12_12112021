import PropTypes from 'prop-types'; // permet de déclarer le type des props qui est attendu lorsque vous les récupérez dans vos composants, et de déclencher un warning si ça ne correspond pas

/**
 * Return template with userName
 *
 * @component
 * @summary used in MainComponent.jsx
 * @param { string } props.userName ex : Raph
 * @return { HTMLElement }
*/
function UserInfo(props) {
    if(props.firstName !== undefined ) {
        const firstName = props.firstName;
        //console.log(`firstName is : ${firstName}`)
        return (        
            <div className='user-page__entete'>
             {firstName.length > 0 && <h1>Bonjour <span>{firstName}</span></h1> }
                <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
            </div>
        )
    }
    return (<div>Données en attente</div>)
}

UserInfo.propTypes = {
    userName: PropTypes.string
}

export default UserInfo