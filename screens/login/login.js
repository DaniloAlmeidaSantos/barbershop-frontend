import React, { useContext, useState } from 'react';
import { Login_Container, Login_Head, Login_Desc, Login_BtnRegister, Login_BtnText } from './styles';

import AsyncStorage from '@react-native-community/async-storage';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import InputLogin from '../../components/inputLogin/InputLoginComponent'
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { user, setUser } = useContext(UserContext);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        // Service API
    }

    return (
        <Login_Container>
            <Header
                whichScreen="Login"
                text="ROSA BARBERSHOP"
            // Teamimg={require('../../assets/img/')}
            />
            <Login_Head>
                <Login_Desc>Login:</Login_Desc>
                <Login_BtnRegister>
                    <Login_BtnText>Cadastrar</Login_BtnText>
                </Login_BtnRegister>
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

            <BtnConfirm title="Entrar" /*onPress={handleLogin}*/ onPress={alert("Login realizado com sucesso")} />
        </Login_Container>
    )
}