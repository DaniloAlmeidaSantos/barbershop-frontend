import React, { useState } from 'react';
import Header from '../../components/header/header.jsx'

import {
  Home_Container
} from './style.js'

export default function HomeScreen({ navigation }) {
  return (
    <Home_Container>
      <Header 
        isAdmin={true}
        barberShopName="Carlos Rosa Barbearia"
      />
    </Home_Container> 
  )
}