import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/header/header.js';
import LabelDefaultComponent from '../../components/labelDefault/LabelDefaultComponent.js';
import InputComponent from '../../components/inputLogin/InputComponent'
import CheckBoxComponent from '../../components/checkbox/CheckBoxComponent.js'
import Loading from '../../components/loading/Loading.js';

import {
  Scheduling_Container,
  Scheduling_WrapperSchedules,
  Scheduling_SaveBtn,
  Scheduling_SaveBtnText
} from './styles.js'

async function saveSchedule(date, hour, response, navigation) {
  console.log(response.response.userId)
  const scheduleRequest = {
    customerId: response.response.userId,
    barberId: 2,
    servicesId: '1',
    date: date,
    time: hour + ":00"
  }
  let responseRequest = await fetch(
    'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/schedule',
    {
      method: 'POST',
      body: JSON.stringify(scheduleRequest),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );

  if (responseRequest.status == 200) {
    await navigation.navigate('Home', {response});
  } else {
    alert(
      'Error ao realizar agendamento, tente mais tarde...'
    );
  }
}

export default function SchedulingScreen({ navigation }) {
  const [date, setDate] = useState('');
  const [check, setCheck] = useState(false);
  const [hourRequest, setHourRequest] = useState('');
  const [loading, setLoading] = useState(true);
  const route = useRoute();

  const hour = ["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00"]

  function handleCheck(hour){
    setCheck(hour);
    setHourRequest(hour);
    console.log(route.params)
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
        placeholder="Por exemplo: 2023-04-04"
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

          <Scheduling_SaveBtn onPress={() => saveSchedule(date, hourRequest, route.params, navigation)}> 
            <Scheduling_SaveBtnText>Agendar Horário</Scheduling_SaveBtnText>
          </Scheduling_SaveBtn>
        </>

      }
    </Scheduling_Container> 
  )
}