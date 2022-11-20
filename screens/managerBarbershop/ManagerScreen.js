import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.jsx';
import { TouchableOpacity } from 'react-native';
import Colors from '../../constants/Theme';
import LabelDefaultComponent from '../../components/labelDefault/LabelDefaultComponent.jsx';
import {
  ManagerContainer,
  HourArea,
  HourInput,
  Label,
  ServiceArea,
  Joker
} from './Styles';
import CheckBox from '../../components/checkbox/CheckBoxComponent.jsx';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

export default function ManagerScreen({ navigation }) {
  const [sunday, setSunday] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [hourInit, setHourInit] = useState('');
  const [hourEnd, setHourEnd] = useState('');
  const [dataParameters, setDataParameters] = useState({});
  const [dataServices, setDataServices] = useState([]);

  useEffect(() => {
    getParameters();
  }, []);

  async function getParameters() {
    await fetch(
      'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/parameter',
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHourInit(data.hourInitWork.slice(0, 5));
        setHourEnd(data.hourEndWork.slice(0, 5));
        setDataParameters(data);
        let daysSplitted = data.daysWork.split(',');

        daysSplitted.forEach((day) => {
          if (day == '1') {
            setSunday(true);
          }

          if (day == '2') {
            setMonday(true);
          }

          if (day == '3') {
            setTuesday(true);
          }

          if (day == '4') {
            setWednesday(true);
          }

          if (day == '5') {
            setThursday(true);
          }

          if (day == '6') {
            setFriday(true);
          }

          if (day == '7') {
            setSaturday(true);
          }
        });
      });

    await fetch(
      'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/parameter/service',
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataServices(data);
        console.log(data);
      });
  }

  function UnlessServiceLabels(price, nameService, id) {
    console.log(dataServices);
    return (
      <ServiceArea>
        <Label> {nameService} </Label>
        <Label> Valor: {price} </Label>

        <TouchableOpacity
          style={{
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF8D8D',
            borderRadius: 50,
          }}>
          <IconAwesome
            name="trash"
            size={15}
            color={Colors.Light}
            style={{
              padding: 10,
            }}
          />
        </TouchableOpacity>
      </ServiceArea>
    );
  }

  return (
    <ManagerContainer>
      <Header
        btnGoBack={true}
        text="Carlos Rosa Barbearia"
        onPressGoBack={() => navigation.goBack()}
      />
      <LabelDefaultComponent text="Definir horário de funcionamento" />

      <HourArea>
        <HourInput
          placeholder="06:00"
          value={hourInit}
          onChangeText={(value) => setHourInit(value)}
        />
        <Label> Até </Label>
        <HourInput
          placeholder="18:00"
          value={hourEnd}
          onChangeText={(value) => setHourEnd(value)}
        />
      </HourArea>

      <LabelDefaultComponent text="Definir dias de trabalho da semana" />

      <CheckBox
        onPress={() => setSunday(!sunday)}
        title="Domingo"
        isChecked={sunday}
      />
      <CheckBox
        onPress={() => setMonday(!monday)}
        title="Segunda-Feira"
        isChecked={monday}
      />
      <CheckBox
        onPress={() => setTuesday(!tuesday)}
        title="Terça-Feira"
        isChecked={tuesday}
      />
      <CheckBox
        onPress={() => setWednesday(!wednesday)}
        title="Quarta-Feira"
        isChecked={wednesday}
      />
      <CheckBox
        onPress={() => setThursday(!thursday)}
        title="Quinta-Feira"
        isChecked={thursday}
      />
      <CheckBox
        onPress={() => setFriday(!friday)}
        title="Sexta-Feira"
        isChecked={friday}
      />
      <CheckBox
        onPress={() => setSaturday(!saturday)}
        title="Sábado"
        isChecked={saturday}
      />

      <LabelDefaultComponent
        text="Definir Serviços oferecidos"
        isServiceScreen={true}
      />
      {dataServices.map((index) => {
        return (
          <ServiceArea>
            <Label> {index.jobName} </Label>
            <Label> Valor: {index.jobPrice} </Label>

            <TouchableOpacity
              style={{
                marginRight: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF8D8D',
                borderRadius: 50,
              }}>
              <IconAwesome
                name="trash"
                size={15}
                color={Colors.Light}
                style={{
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </ServiceArea>
        );
      })}
      <Joker></Joker>
    </ManagerContainer>
  );
}
