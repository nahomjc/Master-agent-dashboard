import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles1';

import { useHistory } from "react-router-dom";

export default function Overview() {
 
  return (
   <Section> 
  
 
  


<div className="analytic" id='a3'>

  <div className="content">
 
 

    <h1> 500</h1> 
     <h4>New Clients </h4> 
   <h6>15% Increase from Last Month</h6>  
  </div>
</div>


<div className="analytic" id='a1'>

  <div className="content">
  <h1>Top 10</h1> 
     <h4>Agents </h4> 
   <h6>5% Increase from Last Month</h6>  
  </div>
  
  
</div>
<div className="analytic" id='a2'>

  <div className="content">
    <h1>26</h1> 
     <h4>New Agent  </h4> 
   <h6>15% Increase from Last Month</h6>  
  </div>
</div>

   </Section>
  )
}
const Section= styled.section`

display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  #a1{
      
    background: rgba(69, 250, 93, 0.938);
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
      
    }
   
    }
    #a2{
      
      background: rgba(69, 250, 93, 0.938);
      &:hover {
        background-color: #ffc107;
        color: white;
        svg {
          color: white;
        }
        
      }
      }
      #a2{
      
        background: rgba(235, 232, 78, 0.938);
       
        }
  .analytic {
    
    ${cardStyle};
    
    height: 200px;
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    background: rgba(240, 138, 201, 0.938);
  
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
      
    }
    
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
      
    }
}

@media screen and (min-width: 280px) and (max-width: 720px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  .analytic {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      flex-direction: row-reverse;
    }
  }
}`;