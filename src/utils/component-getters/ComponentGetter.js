import React, { Component } from "react";
import { MY_RENDER_APP } from "../Constants";
import FirstCard from '../../components/homePage/FirstCard'
import SecondCard from "../../components/homePage/SecondCard";
import ThirdCard from "../../components/homePage/ThirdCard";
import FourthCard from "../../components/homePage/FourthCard";
import FifthCard from "../../components/homePage/FifthCard";
import SixthCard  from "../../components/homePage/SixthCard";


function componentGetter(props){

  const {componentId} = props;

    switch (componentId) {
      case MY_RENDER_APP.FIRST_CARD:
        return (                   
              <FirstCard />         
        );
      case MY_RENDER_APP.SECOND_CARD:
        return (
              <SecondCard  />
        );
        case MY_RENDER_APP.THIRD_CARD:
          return (                   
              <ThirdCard />         
        );
        case MY_RENDER_APP.FOURTH_CARD:
          return (                   
                <FourthCard />         
        );
        case MY_RENDER_APP.FIFTH_CARD:
          return (                   
                <FifthCard />         
        );
        case MY_RENDER_APP.SIXTH_CARD:
          return (                   
                <SixthCard />         
        );
      
      default:
        return null;
        }
}

export default componentGetter;
