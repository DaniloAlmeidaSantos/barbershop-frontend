import React from 'react';

import { Container, Head } from './home-style';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import { Text } from 'react-native'

function HomeScreen() {
    return(
        <Container>
          <Head>
            <Text>Rosa BarberShop</Text>
          </ Head>
          <BtnConfirm title="Agendar Serviço"/>
          <BtnConfirm title="Agendamentos"/>
          <BtnConfirm title="Configurações"/>
          <BtnConfirm title="Infos"/>
        </ Container>
    )
}

export default HomeScreen;