import PropTypes from 'prop-types'; // permet de déclarer le type des props qui est attendu lorsque vous les récupérez dans vos composants, et de déclencher un warning si ça ne correspond pas
/**
 * display userName.
 * 
  */
export default function UserInfo(props) {
    if(props.data !== undefined ) {
        //const firstName = props.data[0].data.userInfos.firstName;
        const firstName = props.data;
        console.log(`firstName is : ${firstName}`)
        return (
        <section className="user-page">
                <div className='user-page__entete'>
             {firstName.length > 0 && <h1>Bonjour <span>{firstName}</span></h1> }
                <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
            </div>
        </section>)
    }
    return (<div>Données en attente</div>)
}

UserInfo.propTypes = {
    userName: PropTypes.string
}