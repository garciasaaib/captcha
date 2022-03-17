import React, { useEffect, useState } from 'react'
import { NumberContainer, Error, Success, Title } from './captchaStyles'
import { getRandomNumber } from '../helpers/getRandom'


export const CaptchaNumeros = ({setcaptchaNumber}) => {

    const [operando, setOperando] = useState(0)
    const [operando1, setOperando1] = useState(0)
    const [signo, setSigno] = useState()
    const [error, setError] = useState({errorStatus:"", msg:""})
    const [userNumber, setUserNumber] = useState()
    const[total, setTotal] = useState()

    useEffect(() => {
        setOperando(getRandomNumber(15))
        setOperando1(getRandomNumber(15))
    }, [])

    useEffect(() => {

        operacion()
      
    }, [operando, operando1])
    


    const operacion = ()=>{

        const numeroSigno = getRandomNumber(2);
        
        switch (numeroSigno) {
            case 1:
                setSigno("+")
                setTotal(operando+operando1);
                break;
            case 2:
                setSigno("-")
                setTotal(operando-operando1);
                break;
            case 3:
                setSigno("*")
                setTotal(operando*operando1);
                break;                     
            default:
                break;
        }
    }

    const handleVerification = (e)=>{
        e.preventDefault();


        if(total !== parseInt(userNumber)){
            setError({errorStatus:true, msg: "Numbers are not the same"})
        }else{
            setError({errorStatus:false, msg: "You can continue"})
        }
    }

    const handleRefresh = (e)=>{
        e.preventDefault();
        setOperando(getRandomNumber(15))
        setOperando1(getRandomNumber(15))
    } 
  return (

    <NumberContainer>
        <Title>Solve the following math operation and input the result.</Title>
        <p>
            {`${operando} ${signo} ${operando1}`}
        </p>

        <div>
            <input
                type="number"
                name='userNumber'
                value={userNumber}
                onChange={e => setUserNumber(e.target.value)}
            />
            <button onClick={handleVerification}>
                Check
            </button>
            <button onClick={handleRefresh}>
                Refresh
            </button>
            <button onClick={()=>setcaptchaNumber(0)}>
                Try with images
            </button>
        </div>


        {
            error.errorStatus && <Error>{error.msg}</Error> 
        }
        {
            (error.errorStatus !== "" && !error.errorStatus) && <Success>{error.msg}</Success>
        }   



    </NumberContainer>
  )
}

