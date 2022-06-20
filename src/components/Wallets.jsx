import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";

import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack} from "react-icons/gi";

import { useHistory } from "react-router-dom";
import scrollreveal from "scrollreveal";

export default function Wallets() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      analytic, logo
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
 
  return (
   <Section> 
  
 
  


<div className="analytic">
<div className="logo">
<GiMoneyStack/>
</div>


  <div className="content">
    <h1>Your Current Balance</h1>
    300,000 Birr
  </div>
</div>


<div className="analytic">

  <div className="content">
    <h1>Commission You Get </h1>
    30,000 Birr

   
  </div>
  <div className="logo">
  <GiReceiveMoney/>
  </div>
  
</div>

   </Section>
  )
}
const Section= styled.section`

display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  .analytic {
    ${cardStyle};
    height: 250px;
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
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