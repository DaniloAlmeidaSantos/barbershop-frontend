import react from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../constants/Theme';

import {
  Scheduling_Container,


  Scheduling_WrapperLeft,
  Scheduling_InnerLeft,
  Scheduling_BoldText,
  Scheduling_Text,


  Scheduling_DeleteButton
} from './Styles';

export default function SchedulingItem({ services, date, hour, isDeleted, onPressDelete }){


  return (
    <Scheduling_Container>

      <Scheduling_WrapperLeft>
        <Scheduling_InnerLeft>
          <Scheduling_BoldText>Serviço à Fazer:</Scheduling_BoldText>
          <Scheduling_BoldText>{date}</Scheduling_BoldText>
        </Scheduling_InnerLeft>

        <Scheduling_InnerLeft>
          <Scheduling_Text>{services}</Scheduling_Text>
          <Scheduling_Text>{`${hour.slice(0, 5)}Hrs`}</Scheduling_Text>
        </Scheduling_InnerLeft>
      </Scheduling_WrapperLeft>


      {
        isDeleted ? 
          <Scheduling_DeleteButton onPress={() => onPressDelete}>
            <Icon name="trash" size={25} color={Colors.Light} />
          </Scheduling_DeleteButton>
          : <></>
      }
      

    </Scheduling_Container>
  )
}

SchedulingItem.defaultProps = {
  isAdmin: true
}