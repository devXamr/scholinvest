
import InvestorDash1 from "./InvestorDash1.tsx";
import {InvestorDash2} from "./InvestorDash2.tsx";
import InvestorDash3 from "./InvestorDash3.tsx";

export default function InvestorDash(){
    return <div className='pb-6'>
        <InvestorDash1 username='Ammar'/>
        <InvestorDash2/>
        <InvestorDash3/>
    </div>
}