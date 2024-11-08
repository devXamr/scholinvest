import {BrowserRouter, Route, Routes} from "react-router-dom";
import InitialInfoGathering from "./InitialInfoGathering.tsx";
import Landing from "./Landing.tsx";
import UserDash from "./UserDash.tsx";
import InvestorDash from "./InvestorDash.tsx";


export function getUserInfo(){
    const info = JSON.parse(localStorage.getItem('userInfo-vultr')!)

    if(!info) return {
        name: '',
        courseEnrolled: '',
        uni: '',
        cgpa: '',
        annualIncome: '',
        graduationYear: '',
        briefDescription: '',
        isInfoComplete: false
    }

    return info
}
function App() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/info' element={<InitialInfoGathering/>}/>
                <Route path='/dashboard' element={<UserDash/>}/>
                <Route path='/investorDash' element={<InvestorDash/>}/>
            </Routes>
        </BrowserRouter>

    </div>
}
    export default App
