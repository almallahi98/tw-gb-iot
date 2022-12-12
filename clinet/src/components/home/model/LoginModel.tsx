import {
    Modal,
    ModalOverlay,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import React, {  useState } from 'react'
import Login from './Login'
import Register from './Register'

function LoginModel(props:any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [IsLoginView, setIsLoginView] = useState(true)
    const isLogedin=()=>{
        if(localStorage.getItem('token')==null){
            return 'Login'
        }else{
            return 'Logout'
        }
    }
    return (
        <>
            <Button onClick={e=>{
                console.log(e.currentTarget.innerText);
                
                if(e.currentTarget.innerText==='Login'){
                    onOpen()
                }else{
                    localStorage.removeItem('token')
                }
                
            }}>{isLogedin()}</Button>
            

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                
                {(IsLoginView)? <Login onClose={onClose} setIsLoginView={setIsLoginView}/> : <Register onClose={onClose} setIsLoginView={setIsLoginView}/>}
            </Modal>
        </>
    )
}
export default LoginModel