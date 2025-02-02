import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import Pet from "./components/pets/Pet";


/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees,
//       owners,
//       pets,
//     };
//   }

//   render() {
//     const { employees, owners, pets } = this.state;
//     return (
//       <div className="wrapper">
//         <Nav />
//         <Home employees={employees} owners={owners} pets={pets} />
//         <StaffList employees={employees} />
//         <PetsList pets={pets} />
//         <Footer />
//       </div>
//     );
//   }
// }

const App = (props) => {
  // const [employees, setEmployees] = useState([]);
  // const [owners, setOwners] = useState([]);
  // const [pets, setPets] = useState([]);

// const {employees,pets,owners} = props

  // setPets(pets)

  const setupvar = () => {
    console.log(employees);
    // setEmployees(props.employees)
  }



  return (
    <>
    {/* {setupvar()} */}
    
    <div className="wrapper">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />}/>
          <Route path="/staff" element={<StaffList employees={employees} />}/>
          <Route path="/pets" element={<PetsList pets={pets}/>}/>

          <Route path="/pets/*" element={<PetsList pets={pets} />}/>
          {/* <Route path="/pets/:kind" element={<Pet pets={pets} kind={pets.kind}/>}/> */}

        </Routes>

        <Footer />
      </Router>
    </div>
    </>
   
  );
};

export default App;
