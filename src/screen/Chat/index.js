import React, {useContext} from 'react';
import {
    Container,
    Texto
} from './styles';

import {UsuarioContext } from '../../../contexts/user'

const Chat = () => {

    const {user} = useContext(UsuarioContext)

    return (
        <Container>
            <Texto>{user.email}</Texto>
        </Container>
    );

}

export default Chat;