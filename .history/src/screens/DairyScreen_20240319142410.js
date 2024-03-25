import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput as PaperTextInput, Button } from 'react-native-paper';

const DairyScreen = () => {
  const [records, setRecords] = useState([]);
  const [selectedCattle, setSelectedCattle] = useState('');
  const [morningAmount, setMorningAmount] = useState('');
  const [afternoonAmount, setAfternoonAmount] = useState('');
  const [eveningAmount, setEveningAmount] = useState('');
  const [usageType, setUsageType] = useState('');
  const [dailyUsageSummary, setDailyUsageSummary] = useState({});
  const [shiftProductionSummary, setShiftProductionSummary] = useState({});
  const [currentShift, setCurrentShift] = useState('');

  // Dummy data for cattle and shift
  const cattleData = ['Cattle 1', 'Cattle 2', 'Cattle 3', 'Cattle 4'];
  const shifts = ['Morning', 'Afternoon', 'Evening'];

  // Function to add production record
  const addRecord = () => {
    if (!selectedCattle || !morningAmount || !afternoonAmount || !eveningAmount) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }
    const newRecord = { 
      cattle: selectedCattle, 
      morningAmount, 
      afternoonAmount, 
      eveningAmount,
      shift: currentShift // Include current shift in the record
    };
    setRecords([...records, newRecord]);
    setSelectedCattle('');
    setMorningAmount('');
    setAfternoonAmount('');
    setEveningAmount('');
  };

  // Function to record milk usage
  const recordUsage = () => {
    if (!usageType) {
      Alert.alert('Missing Information', 'Please select a usage type.');
      return;
    }
    // Implement logic to record milk usage
    console.log('Usage Type:', usageType);
    // Clear usage type after recording
    setUsageType('');
  };

  // Function to calculate daily milk usage summary
  const calculateDailyUsageSummary = () => {
    // Dummy data for daily usage summary
    const summaryData = {
      Sales: 100,
      Consumption: 50,
      FriendsCalves: 20,
      // Add other types as needed
    };
    setDailyUsageSummary(summaryData);
  };

  // Function to calculate production summary for each shift
  const calculateShiftProductionSummary = () => {
    // Dummy data for shift production summary
    const summaryData = {
      Morning: { total: 200 },
      Afternoon: { total: 150 },
      Evening: { total: 180 },
    };
    setShiftProductionSummary(summaryData);
  };

  // Function to determine the current shift based on the current time
  const getCurrentShift = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 13) {
      return 'Morning';
    } else if (currentTime >= 13 && currentTime < 21) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  };

  useEffect(() => {
    const shift = getCurrentShift();
    setCurrentShift(shift);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.heading}>Dairy Records</Text>
        <View style={styles.formContainer}>
          <Picker
            selectedValue={selectedCattle}
            onValueChange={(itemValue) => setSelectedCattle(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Cattle" value="" />
            {cattleData.map((cattle, index) => (
              <Picker.Item key={index} label={cattle} value={cattle} />
            ))}
          </Picker>
          <View style={styles.shiftContainer}>
            <Text style={styles.shiftText}>Shift: {currentShift}</Text>
          </View>
          <PaperTextInput
            label="Morning Amount"
            value={morningAmount}
            onChangeText={setMorningAmount}
            style={styles.input}
          />
          <PaperTextInput
            label="Afternoon Amount"
            value={afternoonAmount}
            onChangeText={setAfternoonAmount}
            style={styles.input}
          />
          <PaperTextInput
            label="Evening Amount"
            value={eveningAmount}
            onChangeText={setEveningAmount}
            style={styles.input}
          />
          <Button 
            mode="contained" 
            onPress={addRecord} 
            style={styles.addButton}
            disabled={currentShift !== 'Morning'} // Disable if not morning shift
          >
            Add Production Record
          </Button>
        </View>
        <Text style={styles.sectionHeading}>Record Milk Usage</Text>
        <Picker
          selectedValue={usageType}
          onValueChange={(itemValue) => setUsageType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Usage Type" value="" />
          <Picker.Item label="Sales" value="Sales" />
          <Picker.Item label="Consumption" value="Consumption" />
          <Picker.Item label="Friends/Calves" value="Friends/Calves" />
          {/* Add other usage types as needed */}
        </Picker>
        <Button 
          mode="contained" 
          onPress={recordUsage} 
          style={styles.addButton}
          disabled={!records.some(record => record.shift === currentShift)} // Disable if produce not recorded for current shift
        >
          Record Usage
        </Button>
        <Text style={styles.sectionHeading}>Daily Milk Usage Summary</Text>
        <View style={styles.usageSummary}>
          {Object.entries(dailyUsageSummary).map(([type, amount]) => (
            <Text key={type} style={styles.summaryText}>{type}: {amount}</Text>
          ))}
        </View>
        <Text style={styles.sectionHeading}>Shift Production Summary</Text>
        <View style={styles.shiftSummary}>
          {Object.entries(shiftProductionSummary).map(([shift, { total }]) => (
            <Text key={shift} style={styles.summaryText}>{shift}: {total}</Text>
          ))}
        </View>
        <Text style={styles.sectionHeading}>Milk Production Records</Text>
        <FlatList
          data={records}
          renderItem={({ item }) => (
            <View style={styles.recordItem}>
              <Text style={styles.recordText}>Cattle: {item.cattle}</Text>
              <Text style={styles.recordText}>Morning: {item.morningAmount}</Text>
              <Text style={styles.recordText}>Afternoon: {item.afternoonAmount}</Text>

<Text style={styles.recordText}>Evening: {item.eveningAmount}</Text>
</View>
)}
keyExtractor={(item, index) => index.toString()}
style={styles.recordList}
/>
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
scrollViewContent: {
flexGrow: 1,
paddingVertical: 20,
paddingHorizontal: 15,
},
heading: {
  fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: 'maroon',
},
formContainer: {
backgroundColor: 'white',
padding: 15,
borderRadius: 10,
marginBottom: 20,
},
picker: {
height: 50,
marginBottom: 10,
},
shiftContainer: {
flexDirection: 'row',
marginBottom: 10,
},
shiftText: {
fontSize: 16,
fontWeight: 'bold',
marginRight: 5,
},
shiftOption: {
fontSize: 16,
marginBottom: 5,
},
input: {
marginBottom: 10,
backgroundColor:"transparent"
},
addButton: {
marginBottom: 10,
},
sectionHeading: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
fontFamily: 'Arial',
},
usageSummary: {
marginBottom: 20,
},
shiftSummary: {
marginBottom: 20,
},
summaryText: {
fontSize: 16,
marginBottom: 5,
fontFamily: 'Arial',
},
recordItem: {
backgroundColor: '#f0f0f0',
padding: 15,
borderRadius: 2,
marginBottom: 10,
},
recordText: {
fontSize: 16,
marginBottom: 5,
fontFamily: 'Arial',
},
recordList: {
marginBottom: 20,
},
});

export default DairyScreen;
