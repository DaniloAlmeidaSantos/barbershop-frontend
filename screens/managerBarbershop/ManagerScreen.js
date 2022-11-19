import React, { useState } from 'react';
import Header from '../../components/header/header.jsx';
import LabelDefaultComponent from '../../components/labelDefault/LabelDefaultComponent.jsx';
import { ManagerContainer } from './Styles';
import CheckBox from '../../components/checkbox/CheckBoxComponent.jsx';

getParameters();
let responseRequest;

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
      responseRequest = data;
      console.log(data);
    });
}

function getInitialsDays(day) {
  console.log(responseRequest.daysWork);
  let days = responseRequest;
  alert(days);
  console.log(days);
}

export default function ManagerScreen({ navigation }) {
  const [sunday, setSunday] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);

  return (
    <ManagerContainer>
      <Header isAdmin={true} barberShopName="Carlos Rosa Barbearia" />

      <LabelDefaultComponent text="Definir horário de funcionamento" />

      <LabelDefaultComponent text="Definir dias de trabalho da semana" />

      <CheckBox
        onPress={() => getInitialsDays('1')}
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

      <LabelDefaultComponent text="Definir Serviços oferecidos" isServiceScreen={true} />
    </ManagerContainer>
  );
}
