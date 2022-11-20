import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const Scheduling_Container = styled.View`
    background-color: ${Colors.Light};
    width: 100%;
    height: 100%;
`;

export const Scheduling_WrapperSchedules = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  flexWrap: wrap;

  width: 100%;
  
  padding: 20px;
`

export const Scheduling_SaveBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 90%;

  padding: 10px;

  border-radius: 10;

  background-color: #17D92B;

`

export const Scheduling_SaveBtnText = styled.Text`
  font-family: 'Segoe';
  font-size: 16px;
  color: ${Colors.Light}
`

