import Students from "./Students"


function App() {

    return (
        <>
           <Students name="Elmo" age={23} isStudent={true}/>
           <Students name="Lilop" age={21} isStudent={false}/>
           <Students name="Byllz" age={14} isStudent={true}/>
           <Students/>
        </>
    )
}

export default App
