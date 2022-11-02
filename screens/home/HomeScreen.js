import React from 'react';

import { Container, Title } from './home-style';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import { Text } from 'react-native';

function HomeScreen() {
    return(
        <Container>
            <Title>Rosa BarberShop</Title>
            <BtnConfirm>Agendar Serviço</BtnConfirm>
            <BtnConfirm>Agendamentos</BtnConfirm>
            <BtnConfirm>Configurações</BtnConfirm>
            <BtnConfirm>Infos</BtnConfirm>
        </Container>
    )
}

export default HomeScreen;