import { useEffect, useState } from "react";
import { FlatList, RefreshControl } from 'react-native';

import Header from '../../components/header/header.jsx';
import GButtom from '../../components/btnGlobal/BtnGlobal.jsx';
import EmptyList from '../../components/emptyList/EmptyList.jsx';
import SchedulingItem from '../../components/schedulingItem/SchedulingItem.jsx';

import {
  Home_Container,
  Home_BarberStatus,
  Home_BarberStatus_Text
} from './style.js'

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => { getSchedules() }, [])
    
  async function getSchedules(email, password, navigation) {
      setRefresh(true);
      let responseRequest = await fetch( 'https://backend-barbershop-carlosrosa.herokuapp.com/barbershop/services/scheduled?userId=2', { method: 'GET'})
      .then((response) => {
        return response.json();

      }).then((data) => { 
        setData(data);
        setRefresh(false);
      })
  }


  return (
    <Home_Container>
      <Header
        actionBtsOn={true}
        isAdmin={true}
        text="Carlos Rosa Barbearia"
        onPressManage={() => navigation.navigate("Manager")}
      />

      <Home_BarberStatus>
        <Home_BarberStatus_Text>Estamos Funcionando Agora</Home_BarberStatus_Text>
        
        <GButtom 
          iconName="calendar-plus" 
          text="Agendar" 
          size={20} 
          onPress={() => navigation.navigate("Scheduling")}
        />
      </Home_BarberStatus>

     <FlatList
        data={data}
        refreshControl={
          <RefreshControl onRefresh={getSchedules} refreshing={refresh} />
        }
        style={{ flex: 1, width: "100%", alignSelf: "center", marginBottom: 6 }}
        keyExtractor={(data, index) => String(data.indentifications)}
        renderItem={({ item: data }) => (
            <SchedulingItem
              services={data.jobs} 
              date={data.date}
              hour={data.time}
            />
        )}
      />

    </Home_Container> 
  )
}