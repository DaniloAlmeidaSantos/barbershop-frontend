import React, { useState } from 'react';
import {
  Register_Container,
  ButtonArea,
  Register_Head,
  Register_label,
} from './styles';
import InputRegister from '../../components/inputLogin/InputComponent';
import BtnRegister from '../../components/btnRegister/BtnRegisterComponent';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';

async function registerUser(
  name,
  email,
  cpf,
  password,
  phone,
  confirmPassword,
  navigation
) {
  const registerRequest = {
    name: name,
    email: email,
    cpf: cpf,
    password: password,
    phone: phone,
    userType: 'C',
  };

  if (name && cpf && email && password && phone) {
    if (password === confirmPassword && password && confirmPassword) {
      let responseRequest = await fetch(
        'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/user/register',
        {
          method: 'POST',
          body: JSON.stringify(registerRequest),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      if (responseRequest.status == 200) {
        await navigation.navigate('Authenticate', { responseRequest });
      } else {
        alert(
          'Error ao realizar cadastro, revise seus dados, ou tente novamente mais tarde...'
        );
      }
    } else {
      alert('Revise sua confirmação de senha, não estão em conformidade');
    }
  } else {
    alert('Preencha os campos obrigatórios.')
  }
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
        value={name}
      />
      <InputRegister
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
        value={cpf}
      />
      <InputRegister
        placeholder="Telefone"
        onChangeText={(text) => setPhone(text)}
        value={phone}
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
        value={confirmPassword}
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
