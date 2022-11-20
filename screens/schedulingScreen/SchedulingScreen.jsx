import React, { useEffect, useState } from 'react';
import { View} from 'react-native'

import Header from '../../components/header/header.jsx';
import LabelDefaultComponent from '../../components/labelDefault/LabelDefaultComponent.jsx';
import InputComponent from '../../components/inputLogin/InputComponent'
import CheckBoxComponent from '../../components/checkbox/CheckBoxComponent.jsx'
import Loading from '../../components/loading/Loading.jsx';

import {
  Scheduling_Container,
  Scheduling_WrapperSchedules,
  Scheduling_SaveBtn,
  Scheduling_SaveBtnText
} from './styles.js'

export default function SchedulingScreen({ navigation }) {
  const [date, setDate] = useState('');
  const [check, setCheck] = useState(false);
  const [dates, setDates] = useState({});
  const [loading, setLoading] = useState(true);

  const hour = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"]

  // useEffect(() => { getHours() },[])

  // async function getHours(){
  //   await fetch('https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/schedule?date=2022-11-07', { method: 'GET'})
  //   .then((response) => {
  //     return response.json();

  //   }).then((data) => {
  //     setDates(data.hoursAvailables);
  //     console.log(dates); 
  //   })
  // }
    
  // async function setSchedule() {
  //     setRefresh(true);
  //     // let responseRequest = await fetch( 'https://backend-barbershop-carlosrosa.herokuapp.com/schedule', { body: data , method: 'POST'})
  //     const content = await responseRequest.json();
  //     console.log(content)
      
  // }

  function handleCheck(hour){
    setCheck(hour);
  }

  return (
    <Scheduling_Container>

    <Header
      actionBtsOn={false} 
      btnGoBack={true}
      onPressGoBack={() => navigation.goBack()}
      text="Agendamento"
    />

    <LabelDefaultComponent text="Digite a data que deseja agendar:" />

    <InputComponent
      onChangeText={(index) => setDate(index)}
      value={date}
      placeholder="Por exemplo: 14/04/2023"
      icon="calendar-month"
      secureTextEntry={false}
      onSubmitEditing={() => setLoading(false)}
    />

    {loading ?
      <Loading />
      :
      <>
        <LabelDefaultComponent text={`Horários disponíveis para o dia ${date}`} />
        <Scheduling_WrapperSchedules>
          {hour.map(index => {
            return (
              <CheckBoxComponent
                title={index}
                onPress={() => handleCheck(index)}
                isChecked={check === index}
                typeWidth="Half"
              />
            )
          })}
        </Scheduling_WrapperSchedules>

        <Scheduling_SaveBtn> 
          <Scheduling_SaveBtnText>Agendar Horário</Scheduling_SaveBtnText>
        </Scheduling_SaveBtn>
      </>

    }

    </Scheduling_Container> 
  )
}