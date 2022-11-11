import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Login_Container, Login_Head, Header_Text, ButtonArea } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import InputLogin from '../../components/inputLogin/InputLoginComponent';
import RegisterScreen from '../Register/RegisterScreen';

const Stack = createNativeStackNavigator();

function authenticateUser(email, password, navigation) {}

function AuthenticateScreen({ navigation }) {
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
          bottom: 0,
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          margin: 20,
        }}>
        <View>
          <Text>© 2022-2022 Senacsp. All Rights Reserved. </Text>
        </View>
      </View>
    </Login_Container>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalsRouteName="Authenticate"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Authenticate" component={AuthenticateScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
