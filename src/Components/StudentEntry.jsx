import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Create(check){
    const navigate = useNavigate();
    let [mainD,updateD]=useState([])
    let [data,updataData]=useState({
        id:new Date().toLocaleString(),
        Name:'',
        Num:'',
        Batch:'',
        Course:''
        })
    const updateData=(e)=>{
        updataData((val)=>{
            const newState = { ...val };
            newState[e.target.name] = e.target.value;
            return newState;
        })
    }
    const Submit=()=>{
        updateD((val)=>{
            const newState = [...val];
            newState.push(data);
            return newState;
        })
        check.PropRes(mainD)
        navigate('/student');
    }
    return (
        <>
            <div className="foam bg grid">
                <div className='center a'>
                    <input type="text" name="Name" className="input" value={data.Name} onChange={updateData} placeholder='Name'/>
                </div>
                <div className='center b'>
                    <input type='number' name="Num" className="input" value={data.Num} onChange={updateData} placeholder='Age'/>
                </div>
                <div className='center c'>
                    <input type="text" name="Course" className="input" value={data.Course} onChange={updateData} placeholder='Course'/>
                </div>
                <div className='center d'>
                    <input type="text" name="Batch" className="input" value={data.Batch} onChange={updateData} placeholder='Batch'/>
                </div>
                <div className="BtnPlace e">
                    <input type="reset" value="Reset" className='btn'/>
                    <input type="submit" value={check.val} onClick={Submit} className='btn'/>
                </div>
            </div>
        </>
    )
}
export default Create