import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  Login_Container,
  Header_Text,
  ButtonArea,
  Login_BtnText,
} from './styles';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import InputLogin from '../../components/inputLogin/InputComponent';

function authenticateUser(email, password, navigation) {
  navigation.navigate('Register');
}

export default function AuthenticateScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Login_Container>
      <View>
        <Header_Text>Carlos Rosa Barbearia</Header_Text>
      </View>
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
      <Login_BtnText>Esqueceu a senha?</Login_BtnText>
      <ButtonArea style={{ flexDirection: 'row' }}>
        <BtnConfirm
          style={{ flex: 1 }}
          title="Entrar"
          onPress={() => authenticateUser(email, password, navigation)}
        />
        <BtnConfirm
          style={{ flex: 2 }}
          title="Cadastrar"
          onPress={() => navigation.navigate('Register')}
        />
      </ButtonArea>

      <View
        style={{
          position: 'fixed',
          bottom: -100,
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          margin: 20,
        }}>
        <Text>© 2022-2022 Senacsp. All Rights Reserved.</Text>
      </View>
    </Login_Container>
  );
};
