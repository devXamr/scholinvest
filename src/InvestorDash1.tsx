import {CgProfile} from "react-icons/cg";
import {FaAngleDown} from "react-icons/fa";
import fireworks from "./assets/undraw_fireworks_re_2xi7.svg";
import {useState} from "react";
import SingleFilter from "./SingleFilter.tsx";
import { TiTick } from "react-icons/ti";
import FilterSelection from "./FilterSelection.tsx";

export default function InvestorDash1({username}) {
    interface Preferences {
        cgpa: number,
        amount: number,
        interest: number,
        rating: number
    }

    //modal opener and selector
    const [modalPick, setModalPick] = useState(0)
    const [optionChosen, setOptionChosen]: Preferences = useState({cgpa:0,
        amount:0,
        interest:0,
        rating:0})

    function modalNumberPicker(number: number){
        console.log('the current value is: ' + number)
        if(modalPick === number){
            setModalPick(0)
        } else {setModalPick(number)}
    }

    function optionPicker(numberGiven: number){
        console.log(modalPick, numberGiven)

        if(modalPick === 1) setOptionChosen(prev => ({...prev, cgpa: numberGiven}))
        if(modalPick === 2) setOptionChosen(prev => ({...prev, amount: numberGiven}))
        if(modalPick === 3) setOptionChosen(prev => ({...prev, interest: numberGiven}))
        if(modalPick === 4) setOptionChosen(prev => ({...prev, rating: numberGiven}))

        console.log(optionChosen.cgpa)
    }

    return <div>
        <div className='mx-3 flex text-3xl justify-between mt-4 font-cabinet px-4 border-b rounded-md py-3'>
            <div>Hello, <span className='decoration-2 underline decoration-green-400'>{username}</span></div>
            <CgProfile className='mt-1 text-2xl text-green-600'/>


        </div>
        <div className='mx-3 rounded-md pt-2 pb-16 shadow-md border mt-4 '>
            <div className='text-center text-2xl font-cabinet mt-6 mb-3'>Filters</div>
            <div className='flex text-lg font-cabinet justify-center pb-10 flex-wrap'>
                <div>
                <SingleFilter name='cgpa' funcGiven={modalNumberPicker} number={1}/>
                <div className='fixed'>
                { modalPick === 1 && <FilterSelection modalPick={modalPick} optionChosen={optionChosen} optionPicker={optionPicker} options={['9 or more', '8-9', '6-8', 'lower than 6']}/>}
                </div>
                </div>

                <div>
                <SingleFilter name='amount' funcGiven={modalNumberPicker} number={2}/>
                <div className='fixed'>
                { modalPick === 2 && <FilterSelection modalPick={modalPick} optionChosen={optionChosen} optionPicker={optionPicker} options={['9 or more', '8-9', '6-8', 'lower than 6']}/>}
                </div>
                </div>

                <div>
                <SingleFilter name='interest' funcGiven={modalNumberPicker} number={3}/>
                <div className='fixed'>
                { modalPick === 3 && <FilterSelection modalPick={modalPick} optionChosen={optionChosen} optionPicker={optionPicker} options={['9 or more', '8-9', '6-8', 'lower than 6']}/>}
                </div>
                </div>

                <div>
                <SingleFilter name='rating' funcGiven={modalNumberPicker} number={4}/>
                <div className='fixed'>
                { modalPick === 4 && <FilterSelection modalPick={modalPick} optionChosen={optionChosen} optionPicker={optionPicker} options={['9 or more', '8-9', '6-8', 'lower than 6']}/>}
                </div>
                </div>







            </div>



            <div>
                <img src={fireworks} alt='fireworks' className='h-40 mx-auto'/>
                <div className='text-center font-cabinet font-light mt-1 text-lg'>no new student applications found</div>
            </div>
        </div>

    </div>

}