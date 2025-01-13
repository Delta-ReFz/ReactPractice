import UserGreeting from "./UserGreeting.jsx"


function App() {

    return (
        <>
           <UserGreeting isLoggedIn={true} username="Elmo"/>
           <UserGreeting />
        </>
    )
}

export default App
