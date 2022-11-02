import React from 'react';

import { Container } from './stylehome';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import { Text } from 'react-native'

function HomeScreen() {
    return(
        <Container>
            <Text>Rosa BarberShop</Text>
            <BtnConfirm title="Agendar Serviço"/>
            <BtnConfirm title="Agendamentos"/>
            <BtnConfirm title="Configurações"/>
            <BtnConfirm title="Infos"/>
        </ Container>
    )
}

export default HomeScreen;