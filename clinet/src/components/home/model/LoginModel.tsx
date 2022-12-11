import {
    Modal,
    ModalOverlay,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function LoginModel() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [IsLoginView, setIsLoginView] = useState(true)

    return (
        <>
            <Button onClick={onOpen}>Login</Button>
            

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
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