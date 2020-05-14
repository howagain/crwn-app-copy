import React from 'react';
import './App.css';

import Homepage from "./Pages/Homepage/Homepage.component"
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import Header from "./Components/Header/Header.component"

import {
  Switch, Route
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Homepage/>
//     </div>
//   );
// }

// export default App;
