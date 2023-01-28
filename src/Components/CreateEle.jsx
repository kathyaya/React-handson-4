import { useNavigate } from 'react-router-dom';

function Update(){
    const navigate = useNavigate();

    const Update=()=>{
        navigate('/student');
    }
    return (
        <>
            <div className="foam bg grid">
                <div className='center a'>
                    <input type="text" name="Name" className="input" placeholder='Name'/>
                </div>
                <div className='center b'>
                    <input type='number' name="Num" className="input" placeholder='Age'/>
                </div>
                <div className='center c'>
                    <input type="text" name="Course" className="input" placeholder='Course'/>
                </div>
                <div className='center d'>
                    <input type="text" name="Batch" className="input" placeholder='Batch'/>
                </div>
                <div className="BtnPlace e">
                    <input type="reset" value="Reset" className='btn'/>
                    <input type="submit" onClick={Update} value='Update'  className='btn'/>
                </div>
            </div>

        </>
    )
}
export default Update