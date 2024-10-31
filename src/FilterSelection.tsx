import {TiTick} from "react-icons/ti";

export default function FilterSelection({optionChosen, options, optionPicker, modalPick}){
    return <div className='border rounded-md font-cabinet w-max px-5 relative z-10'>

        {options.map((eachOption) => <div className='flex' onClick={() => optionPicker(options.indexOf(eachOption))}>
            {modalPick === 1 && optionChosen.cgpa === (options.indexOf(eachOption)) && <TiTick/>}
            {modalPick === 2 && optionChosen.amount === options.indexOf(eachOption)  && <TiTick/>}
            {modalPick === 3 && optionChosen.interest === options.indexOf(eachOption) && <TiTick/>}
            {modalPick === 4 && optionChosen.rating === options.indexOf(eachOption) && <TiTick/>}
            <div>{eachOption}</div>

        </div>)}

    </div>}

