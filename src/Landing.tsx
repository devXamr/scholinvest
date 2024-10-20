import {getUserInfo} from "./App.tsx";
import {useNavigate} from "react-router-dom";

export default function Landing(){
    const userExists = getUserInfo()



    const nav = useNavigate()

    function handleNav(){
        console.log(userExists.isInfoComplete)
        console.log()
        if(userExists.isInfoComplete === false){
            nav('/info')

        } else {
            nav('/dashboard')
        }
    }



    return <div>
        <div>This is the landing page</div>
        <div onClick={handleNav}>go next</div>
    </div>
}