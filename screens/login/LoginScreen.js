import React, { useContext, useState } from 'react';
import { Login_Container, Login_Head, Login_Desc, Login_BtnRegister, Login_BtnText, Header_Text } from './styles';

import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import InputLogin from '../../components/inputLogin/InputLoginComponent'

export default () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Login_Container>
            <Header_Text>BARBERSHOP</Header_Text>
            <Login_Head>
                <Login_Desc>Login:</Login_Desc>
            </Login_Head>

            <InputLogin
                icon="person"
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <InputLogin
                icon="vpn-key"
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <BtnConfirm title="Entrar"/>
            <BtnConfirm title="Cadastrar" />
        </Login_Container>
    )
}