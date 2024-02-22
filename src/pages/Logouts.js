import {useNavigate} from 'react-router-dom'
export default function Logouts(){
    const navegate = useNavigate()
    const handleClick =() =>{
        navegate("/")

    }
    return(
        <div>
            <h1>Logouts</h1>
            <button onClick={handleClick}>
                regresar
          
            </button>
        </div>
    )

    
}