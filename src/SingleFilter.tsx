import {FaAngleDown} from "react-icons/fa";

export default function SingleFilter({name, number, funcGiven}) {



    return <div onClick={() => funcGiven(number)} className='px-2 rounded-full mx-1 shadow-sm flex bg-green-400 w-full mt-1.5 text-center'>
        <div>{name}</div>
        <FaAngleDown className='mt-1.5' />
    </div>
}