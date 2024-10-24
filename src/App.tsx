import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InitialInfoGathering from "./InitialInfoGathering.tsx";
import Landing from "./Landing.tsx";
import UserDash from "./UserDash.tsx";


export function getUserInfo(){
    const info = JSON.parse(localStorage.getItem('userInfo-vultr'))

    if(!info) return {name: '',
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
            </Routes>
        </BrowserRouter>

    </div>
}
    export default App
