import React,{useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillEnvelopeFill,BsFillPersonFill } from "react-icons/bs";

const FunctionCounter = () => {
    const [input, setInput] = useState({user: '', email: ''});

    const inputUserName =(e)=>{
        setInput({...input, username: e.target.value})
    }

    const inputEmail =(e)=>{
        setInput({...input, email: e.target.value})
    }

    return(
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><BsFillPersonFill/></InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text" value={input.username} onChange={inputUserName} placeholder="username" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><BsFillEnvelopeFill/></InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text" value={input.email} onChange={inputEmail} placeholder="email" />
            </InputGroup>
            <p className="p"> Your UserName is : { input.username} </p>
            <p> Your Email is : { input.email} </p> 
        </div>
    )
}

export default FunctionCounter


