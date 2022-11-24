import react from 'react';
import GButtom from '../btnGlobal/BtnGlobal.js'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Theme';

import {
  EmptyList_Container,
  EmptyList_MainText,
  EmptyList_Text
} from './styles';

export default function EmptyList({ iconName, mainText, text }){
  return (
    <EmptyList_Container>
      <Icon name={iconName} size={200} style={{marginRight: 5}} color={Colors.Dark} />

      <EmptyList_MainText>{mainText}</EmptyList_MainText>
      <EmptyList_Text>{text}</EmptyList_Text>

      <GButtom iconName="calendar-plus" text="Agendar" size={20} onPress={() => navigation.navigate('Scheduling')} />

    </EmptyList_Container>
  );
}

EmptyList.defaultProps = {
}