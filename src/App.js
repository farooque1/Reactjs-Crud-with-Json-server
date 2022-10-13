import Nav from "./component/Nav";
import Cards from "./component/Cards";
import Edit from "./component/Edit";
import Form from "./component/Form";
import Home from './Crud/Home';
import Insert from './Crud/Form';
import Update from './Crud/Updatedata';
import Users from './Crud/Viewusers';


import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <>
    <Nav />
    <Routes>
    <Route exact path="/" element={ < Cards />} />
    <Route exact path="/edit/:id" element={ < Edit />} />
    <Route exact path="/form" element={ < Form />} />

    {/* //New project link */}
    <Route exact path="/home" element={ < Home />} />
    <Route exact path="/insert" element={ < Insert />} />
    <Route exact path="/update/:id" element={ < Update />} />
    <Route exact path="/users/:id" element={ < Users />} />

    </Routes>

    {/* < Home />      */}
      {/* <Cards />
      <Edit />
      <Form /> */}
      
    </>
    </Router>

  );
}

export default App;
