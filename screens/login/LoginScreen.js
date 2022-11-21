import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import {
  Login_Container,
  Header_Text,
  ButtonArea,
  Login_BtnText,
} from './styles';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import InputLogin from '../../components/inputLogin/InputComponent';
import BarberImage from '../../assets/Images/Logo_Rosa_Babershop.png';



async function authenticateUser(email, password, navigation) {
  if (email && password) {
    const authenticateRequest = {
      email: email,
      password: password,
    };

    let responseRequest = await fetch(
      'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/user/login',
      {
        method: 'POST',
        body: JSON.stringify(authenticateRequest),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );

    if (responseRequest.status == 200) {
      responseRequest.json().then(response => {
        console.log(response)
        navigation.navigate('Home', { response });
      })
    } else {
      alert('Login ou senha incorretos...');
    }
  } else {
    alert('Campos obrigatórios sem preenchimento...');
  }
}

export default function AuthenticateScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Login_Container>
      <View style={{alignContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Image style={{height: 250, width: 250}} source={BarberImage} />
      </View>
      <InputLogin
        icon="person"
        placeholder="E-mail"
        style={{color: 'black'}}
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
          style={{ flex: 1, backgroundColor: 'black'  }}
          title="Entrar"
          onPress={() => authenticateUser(email, password, navigation)}
        />
        <BtnConfirm
          style={{ flex: 2, backgroundColor: 'black' }}
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
}
