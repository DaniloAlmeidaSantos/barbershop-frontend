import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, RefreshControl } from 'react-native';

import Header from '../../components/header/header.js';
import GButtom from '../../components/btnGlobal/BtnGlobal.js';
import EmptyList from '../../components/emptyList/EmptyList.js';
import SchedulingItem from '../../components/schedulingItem/SchedulingItem.js';

import {
  Home_Container,
  Home_BarberStatus,
  Home_BarberStatus_Text,
} from './style.js';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const route = useRoute();

  useEffect(() => {
    getSchedules();
  }, []);

  async function deleteService(indentifications) {
    console.log(indentifications)
  }

  async function getSchedules() {
    setRefresh(true);
    let responseRequest = await fetch(
      `https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/services/scheduled?userId=${route.params.response.userId}`,
      { method: 'GET' }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setRefresh(false);
      });
  }

  return (
    <Home_Container>
      <Header
        actionBtsOn={true}
        isAdmin={route.params.response.typeUser == 'A' ? true : false}
        text="Carlos Rosa Barbearia"
        onPressManage={() => navigation.navigate('Manager')}
      />

      <Home_BarberStatus>
        <Home_BarberStatus_Text>
          Estamos Funcionando Agora
        </Home_BarberStatus_Text>

        <GButtom
          iconName="calendar-plus"
          text="Agendar"
          size={20}
          onPress={() =>
            navigation.navigate('Scheduling', {
              response: route.params.response,
            })
          }
        />
      </Home_BarberStatus>

      <FlatList
        data={data}
        refreshControl={
          <RefreshControl onRefresh={getSchedules} refreshing={refresh} />
        }
        style={{ flex: 1, width: '100%', alignSelf: 'center', marginBottom: 6 }}
        keyExtractor={(data, index) => String(data.indentifications)}
        renderItem={({ item: data }) => (
          <SchedulingItem
            services={data.jobs}
            date={data.date}
            hour={data.time}
            isDeleted={data.status == 'FEITO' || data.status == 'CANCELADO' ? false : true}
            onPressDelete={() => deleteService(data.indentifications)}
          />
        )}
      />
    </Home_Container>
  );
}
