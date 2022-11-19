import react from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../constants/Theme';
import BarberImage from '../../assets/Images/Logo_Rosa_Babershop 1.png';

import {
  Header_Container,
  Header_Logo,
  Header_Name,
  Header_WrapperIcons
} from './styles';

export default function Header({ isAdmin, barberShopName }){
  return (
    <Header_Container>
      <Header_WrapperIcons>
        <Header_Logo source={BarberImage} />
        <Header_Name>{barberShopName}</Header_Name>
      </Header_WrapperIcons>
      
      <Header_WrapperIcons>
        {isAdmin ? 
          <TouchableOpacity>
            <IconAwesome name="user-cog" size={33} style={{marginRight: 5}} color={Colors.Dark} /> 
          </TouchableOpacity>:

          <></>
        }
        
        <TouchableOpacity>
          <Icon name="settings" size={40} color={Colors.Dark} />
        </TouchableOpacity>
      </Header_WrapperIcons>

    </Header_Container>
  )
}

Header.defaultProps = {
  isAdmin: true
}