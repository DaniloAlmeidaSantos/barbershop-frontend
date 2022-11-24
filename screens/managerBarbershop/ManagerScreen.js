import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.js';
import { TouchableOpacity, Modal, RefreshControl } from 'react-native';
import Colors from '../../constants/Theme';
import LabelDefaultComponent from '../../components/labelDefault/LabelDefaultComponent.js';
import InputComponent from '../../components/inputLogin/InputComponent';
import {
  ManagerContainer,
  HourArea,
  HourInput,
  Label,
  ServiceArea,
  Joker,
  ModalContainer,
  ModalView,
  LabelTitle,
  ButtonArea,
} from './Styles';
import BtnConfirm from '../../components/btnConfirm/BtnConfirmComponent';
import CheckBox from '../../components/checkbox/CheckBoxComponent.js';
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
  const [modalActivity, setModalActivity] = useState(false);
  const [nameService, setNameService] = useState('');
  const [priceService, setPriceService] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getParameters();
  }, []);

  async function saveService() {
    let payload = {
      jobId: null,
      jobPrice: priceService,
      jobName: nameService,
    };
    console.log(payload);
    if (nameService != '' && priceService != '') {
      let response = await fetch(
        'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/parameter/service',
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      if (response.status == 200) {
        setModalActivity(!modalActivity);
        getParameters();
      } else {
        alert('Erro ao cadastrar serviço!');
      }
    } else {
      alert('Preencha os campos obrigatórios');
    }
  }

  async function getParameters() {
    setRefresh(true);
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
        setRefresh(false);
      });
  }

  return (
    <ManagerContainer
      refreshControl={
        <RefreshControl onRefresh={getParameters} refreshing={refresh} />
      }>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalActivity}
        onRequestClose={() => {
          setModalActivity(!modalActivity);
        }}>
        <ModalContainer>
          <ModalView
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <LabelTitle> Adicionar trabalho </LabelTitle>
            <InputComponent
              value={nameService}
              placeholder="Digite o nome do serviço desejado"
              secureTextEntry={false}
              onChangeText={(value) => setNameService(value)}
            />
            <InputComponent
              value={priceService}
              placeholder="Digite o preço do serviço desejado"
              secureTextEntry={false}
              onChangeText={(value) => setPriceService(value)}
            />
            <ButtonArea style={{ flexDirection: 'row' }}>
              <BtnConfirm
                style={{ flex: 1, backgroundColor: '#17D92B' }}
                title="Adicionar"
                onPress={() => saveService()}
              />
              <BtnConfirm
                style={{ flex: 2, backgroundColor: '#E20000' }}
                title="Cancelar"
                onPress={() => setModalActivity(!modalActivity)}
              />
            </ButtonArea>
          </ModalView>
        </ModalContainer>
      </Modal>
      <LabelDefaultComponent
        text="Definir Serviços oferecidos"
        isServiceScreen={true}
        onPress={() => setModalActivity(!modalActivity)}
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
