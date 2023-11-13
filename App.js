import React from "react";
import GlobalStyle from "./Components/styles/globalStyles"
import Rotas from "./Components/Rotas";
import Header from "./Components/Navbar"


const App = () => {
   return(
      <div>
         <GlobalStyle />
         <Header/>
         <Rotas/>

      </div>
)
}

export default App;