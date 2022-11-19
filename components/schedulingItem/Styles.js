import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const Scheduling_Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;

    width: 90%;

    margin-top: 15px;

    padding: 6px;

    border-radius: 6px;

    background-color: ${Colors.LightAlternative}
`;


export const Scheduling_WrapperLeft = styled.View`
  flex-direction: column;
  justify-content: center;

  width: 80%;

  margin-left: 10px;
`

export const Scheduling_InnerLeft = styled.View`
  flex-direction: row;
  justify-content: space-between

`

export const Scheduling_BoldText = styled.Text`
  font-family: 'SegoeBold';
  font-size: 17px;
`

export const Scheduling_Text = styled.Text`
  font-family: 'Segoe'
`


export const  Scheduling_DeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #FF8D8D;

  border-radius: 6px;
  padding: 15px;
`

