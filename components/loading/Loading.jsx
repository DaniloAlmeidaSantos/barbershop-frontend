import { useEffect, useState } from "react";
import { FlatList, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Colors from '../../constants/Theme';

import {
  Loading_Container,
  Loading_Text
} from './style.js'

export default function Loading() {

  return (
    <Loading_Container>

      <Icon name="loading1" size={40} style={{marginRight: 5}} color={Colors.Dark} />
      <Loading_Text>Carregando horários</Loading_Text>

    </Loading_Container>
  )

}