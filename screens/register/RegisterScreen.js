import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {
  Register_Container,
  ButtonArea,
  Register_Head,
  Register_label,
} from './styles';
import InputRegister from '../../components/inputLogin/InputComponent';
import BtnRegister from '../../components/btnRegister/BtnRegisterComponent';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';

function registerUser(
  name,
  email,
  cpf,
  password,
  phone,
  confirmPassword,
  navigation
) {
  if (password === confirmPassword) {
    const registerRequest = {
      name: name,
      email: email,
      cpf: cpf,
      password: password,
      phone: phone,
      userType: 'C',
    };

    // Need request to endpoint /barbershop/user/register for register user
    // I don't receive json, endpoint return status code 200 for success & 400 for failed request
  }

  navigation.navigate('Authenticate');
}



export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Register_Container>
      <Register_Head>
        <Register_label>Realizar Cadastro</Register_label>
      </Register_Head>

      <InputRegister
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <InputRegister
        placeholder="Nome Completo"
        onChangeText={(text) => setName(text)}
        value={email}
      />
      <InputRegister
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
        value={email}
      />
      <InputRegister
        placeholder="Telefone"
        onChangeText={(text) => setPhone(text)}
        value={email}
      />
      <InputRegister
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <InputRegister
        placeholder="Confirma senha"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
        value={email}
      />

      <ButtonArea>
        <BtnRegister
          style={{ flex: 1 }}
          title="Confirmar cadastro"
          onPress={() =>
            registerUser(
              name,
              email,
              cpf,
              password,
              phone,
              confirmPassword,
              navigation
            )
          }
        />
        <BtnConfirm
          style={{ flex: 2 }}
          title="Retornar"
          onPress={() => navigation.navigate('Authenticate')}
        />
      </ButtonArea>
    </Register_Container>
  );
}
