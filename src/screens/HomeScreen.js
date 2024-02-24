import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

const DashboardScreen = () => {
  const data = [
    { title: 'Dairy  Records', icon: require('../assets/icons8-balance-scale-left-32.png') },
    { title: 'Income', icon: require('../assets/icons8-income-64.png') },
    { title: 'Analytics', icon: require('../assets/icons8-graph-32.png') },
    { title: 'Invoices', icon: require('../assets/icons8-info-48.png') },
    { title: 'Notepad', icon: require('../assets/icons8-note-50.png') },
    { title: 'My Farm', icon: require('../assets/icons8-cattle-64.png') },
    { title: 'Reports', icon: require('../assets/icons8-pie-chart-64.png') },
    { title: 'Expenses', icon: require('../assets/icons8-ubuntu-50.png') },
    { title: 'Management', icon: require('../assets/icons8-management-50.png') },
    { title: 'IOT', icon: require('../assets/icons8-iot-sensor-50.png') },
    { title: 'AI Assistant', icon: require('../assets/icons8-chipping-64.png') },
  ];

  const renderColumns = () => {
    const columns = [];
    const numColumns = Math.ceil(data.length / 6);
    for (let i = 0; i < numColumns; i++) {
      const columnCards = data.slice(i * 7, (i + 1) * 7);
      columns.push(
        <View key={`column_${i}`} style={styles.column}>
          {columnCards.map((card, index) => (
            <SmallCard key={index} title={card.title} icon={card.icon} />
          ))}
        </View>
      );
    }
    return columns;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome Back</Text>
      <View style={styles.row}>
        {renderColumns()}
      </View>
    </View>
  );
};

const SmallCard = ({ title, icon }) => {
  return (
    <TouchableOpacity onPress={() => console.log(`Pressed ${title}`)}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image source={icon} style={styles.icon} />
          <View style={styles.titleContainer}>
            <Title style={styles.title}>{title}</Title>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  welcome:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'maroon',
    fontFamily: 'cursive',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  column: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    marginVertical: 5,
    width: 180,
    height: 80,
    backgroundColor: '#fff',
    borderWidth: 0.9,
    borderColor: 'black',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center',
    fontFamily:'stencil'
  },
  icon: {
    width: 35,
    height: 30,
    marginBottom: 5,
  },
});

export default DashboardScreen;
