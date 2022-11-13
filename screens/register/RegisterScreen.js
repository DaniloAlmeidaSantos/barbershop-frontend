import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {
  Register_Container,
  Register_Head,
  BtnRegister,
  Register_label,
  Header_Text,
  ButtonArea,
} from './styles';
import InputRegister from '../../components/inputLogin/InputComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function verifyConfirmationPassword(text) {
}

function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView>
      <Register_Container>
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
          onChangeText={(text) => setSenha(text)}
          value={email}
        />
        <InputRegister
          placeholder="Confirma senha"
          onChangeText={(text) => setConfirmPassword(text)}
          value={email}
        />

        <ButtonArea>
          <BtnRegister text="Realizar cadastro" />
        </ButtonArea>
      </Register_Container>
    </SafeAreaView>
  );
}

export default function App() {
  return(
    <RegisterScreen/>
  );
}
