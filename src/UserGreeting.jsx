import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcolmeMessage = <h2 className="welcolme-message">Welcolme {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Well im sorry {props.username} you dont have the authority to get in here</h2>


   return(props.isLoggedIn ? welcolmeMessage : loginPrompt)

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "man",
}

export default UserGreeting;