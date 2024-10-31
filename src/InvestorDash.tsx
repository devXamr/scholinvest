import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import fireworks from './assets/undraw_fireworks_re_2xi7.svg'
import InvestorDash1 from "./InvestorDash1.tsx";
import {InvestorDash2} from "./InvestorDash2.tsx";
import InvestorDash3 from "./InvestorDash3.tsx";

export default function InvestorDash({username}){
    return <div className='pb-6'>
        <InvestorDash1 username='Ammar'/>
        <InvestorDash2/>
        <InvestorDash3/>
    </div>
}