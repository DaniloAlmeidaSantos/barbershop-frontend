import React from 'react';

import { KeyboardView, Container, Title, ButtonSubmit } from './home-style';
import { Text } from 'react-native';

function HomeScreen() {
    return(
        <KeyboardView>
          <Container>
            <Title>Rosa BarberShop</Title>
            <ButtonSubmit><Text>Agendar serviço</Text></ButtonSubmit>
            <ButtonSubmit><Text>Meus agendamentos</Text></ButtonSubmit>
            <ButtonSubmit><Text>Configurar Dados</Text></ButtonSubmit>
            <ButtonSubmit><Text>Info</Text></ButtonSubmit>
          </Container>
        </KeyboardView>
    )
}

export default HomeScreen;