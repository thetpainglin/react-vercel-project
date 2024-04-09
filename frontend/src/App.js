import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import {userSelector} from "./football_project/playerList/backendCall/userSlice";
import IndexKaeDaungFootballClub from "./football_project/playerList/IndexKaeDaungFootballClub";

import EcomerceProjectIndex from "./ecomerce/EcomerceProjectIndex";
import TestCode from "./ecomerce/TestCode";
import "./index.css";
import "./App.css";
import "./ecomerce/ecomerce.css";
import allCodeTest from "./TestCode/AllCodeTest";
import ReducerDemo from "./TestCode/ReducerDemo";
import HelmetSEOTest from "./HelmetSEOTest";

function App() {

let user = useSelector(userSelector);
  return (
    < div className="bg-white">
    <HelmetSEOTest
        title="RI Institute"
        description="provide a Unique
        learning. Students are surrounded by abroad study possibly
        and foreign job opportunity on many diverse areas.
        We offer academia, technology, foreign language, sport and
        community responsibility."
        name="fb or twitter"
        type="website"
      />
        {/*
            football project code

             <IndexKaeDaungFootballClub/>

             *****************************************************
        */}


        {/*
        Starting Next Ecommerce Project

        test for backend code
        <TestCode/>
        <EcomerceProjectIndex/>
        <Success/>

        */}

        <EcomerceProjectIndex/>

    </div>
  );
}
export default App;
