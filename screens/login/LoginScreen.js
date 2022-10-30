import React, { useContext, useState } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import {
    Login_Container,
    Login_Head,
    Login_Desc,
    Login_BtnRegister,
    Login_BtnText,
    Header_Text,
    ButtonArea,
} from './styles';

import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import InputLogin from '../../components/inputLogin/InputLoginComponent';

export default () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Login_Container>
            <Header_Text>Carlos Rosa Barbearia</Header_Text>
            <Login_Head> </Login_Head>

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

            <ButtonArea style={{ flexDirection: 'row' }}>
                <BtnConfirm style={{ flex: 1 }} title="Entrar" />
                <BtnConfirm style={{ flex: 2 }} title="Cadastrar" />
            </ButtonArea>

            <View
                style={{
                    position: 'fixed',
                    bottom: 0,
                    flex: 1,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    margin: 20
                }}>
                <View>
                    <Text>© 2022-2022 Senacsp. All Rights Reserved. </Text>
                </View>
            </View>
        </Login_Container>
    );
};
