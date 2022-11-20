import react from 'react';
import { TouchableOpacity } from 'react-native';

import GButtom from '../../components/btnGlobal/BtnGlobal.jsx'

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';


import Colors from '../../constants/Theme';
import BarberImage from '../../assets/Images/Logo_Rosa_Babershop 1.png';

import {
  Header_Container,
  Header_Logo,
  Header_Name,
  Header_WrapperIcons
} from './styles';

export default function Header({ 
  isAdmin, 
  text, 
  btnGoBack, 
  actionBtsOn,
  onPressGoBack,
  onPressManage
}){
  return (
    <Header_Container>
      <Header_WrapperIcons>
        {btnGoBack ?
          <TouchableOpacity onPress={onPressGoBack}>
            <IconMaterial name="arrow-left-bold-circle" size={40} style={{marginRight: 5}} color={Colors.Dark} />
          </TouchableOpacity>:
          <Header_Logo source={BarberImage} />
        }
        <Header_Name>{text}</Header_Name>
      </Header_WrapperIcons>
      
      {actionBtsOn ?
      <Header_WrapperIcons>
        {isAdmin ? 
          <TouchableOpacity onPress={onPressManage}>
            <IconAwesome name="user-cog" size={33} style={{marginRight: 5}} color={Colors.Dark} /> 
          </TouchableOpacity>:<></>
        }
        
        <TouchableOpacity>
          <Icon name="settings" size={40} color={Colors.Dark} />
        </TouchableOpacity>
      </Header_WrapperIcons>:
      
      <GButtom 
        text="Salvar" 
        size={20}
      />
      }

    </Header_Container>
  )
}

Header.defaultProps = {
  isAdmin: true
}