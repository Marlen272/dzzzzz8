import React from 'react'
import Ref from "./page/ref/Ref";
import ModalProvider from "./page/context/ModalProvider";
import About from "./components/about/About";
import Main from "./components/main/Main";



const App = () => {

    return (
        <div>
            <ModalProvider>
                <About/>

               <Main/>
            </ModalProvider>



            <Ref/>
        </div>
    )
}

export default App