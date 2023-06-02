import React, { useState } from 'react'
import { Text, View, FlatList, SectionList, Alert, Switch, TextInput, Modal, Pressable, StyleSheet, Button } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RNSpeedometer from 'react-native-speedometer';
import DatePicker from 'react-native-date-picker';

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
);

export const Charts = () => {
    state = {
        value: 50,
    };

    onChange = (value) => this.setState({ value: parseInt(value) });
    const labels = [
        {
            name: 'Low Risk',
            labelColor: '#ff2900',
            activeBarColor: '#ff2900',
        },
        {
            name: 'Medium Risk',
            labelColor: '#f4ab44',
            activeBarColor: '#f4ab44',
        },
        {
            name: 'High Risk',
            labelColor: '#00ff6b',
            activeBarColor: '#00ff6b',
        },
    ];
    const size = 200;
    return (
        <View style={{ flex: 1, flexDirection: 'column', rowGap: 40 }}>
            <Row>
                <View style={[styles.col, { flex: 1 }]}>
                    <Text style={styles.chartTitle}>Food Volume Measurement</Text>
                    <CircularProgress
                        value={50}
                        activeStrokeColor={'#000046'}
                        activeStrokeSecondaryColor={'#1CB5E0'}
                        radius={80}
                        activeStrokeWidth={20}
                        inActiveStrokeWidth={20}
                        valueSuffix={'%'}
                    />
                </View>
            </Row>
            <Row>
                <View style={[styles.col, { flex: 1, paddingBottom: 50 }]}>
                    <Text style={styles.chartTitle}>Water Turbidity Measurement</Text>
                    <RNSpeedometer
                        value={this.state.value}
                        size={size}
                        labels={labels} />
                </View>
            </Row>
            <Row>
                <View style={[styles.col, { flex: 1 }]}>
                    {/* <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={this.onChange} /> */}
                    <Text style={styles.chartTitle}>Ph Level Measurement</Text>
                    {/* https://github.com/pritishvaidya/react-native-speedometer#defaults */}
                    <RNSpeedometer
                        // value={this.state.value}
                        value={70}
                        size={size}
                        labels={labels} />
                </View>
            </Row>
        </View>
    )
};

export const Alarm = () => {
    const showSection = (section) => {
        // switch (section) {
        //     case 'Alarm':
        //         this.setState({ showAlarm: true });
        //         this.setState({ showHistory: false });
        //         this.setState({ showAutoConfig: false });
        //         break;
        //     case 'History':
        //         this.setState({ showAlarm: false });
        //         this.setState({ showHistory: true });
        //         this.setState({ showAutoConfig: false });
        //         break;
        //     case 'ShwoAutoConfig':
        //         this.setState({ showAlarm: false });
        //         this.setState({ showHistory: false });
        //         this.setState({ showAutoConfig: true });
        //         break;
        // }
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', rowGap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', columnGap: 10 }}>
                <Pressable
                    onPress={() => showSection("History")}>
                    <MaterialIcon name='library-books' size={20} />
                </Pressable>
                <Pressable
                    onPress={() => showSection("AutoConfig")}>
                    <FontAwesome name='gears' size={20} />
                </Pressable>
            </View>
            <AlarmList />
            {/* <History /> */}
            {/* <AutoConfig /> */}
        </View>
    )
};

const AutoConfig = () => {
    const createAutoConfig = () =>
    Alert.alert('Do you want to create a auto configuration for your tank?', '', [
        {
            text: 'Cancel',
            style: 'cancel',
        },
        { text: 'CONFIRM', onPress: () => console.log("config tank")},
    ]);
    return (
        <View style={{ flexDirection: 'column', rowGap: 20 }}>
            <Text>Fish Type</Text>
            <TextInput style={styles.inputContainer} inputMode='text' placeholder="Fish Type"></TextInput>
            <Text>Living Condition</Text>
            <TextInput style={styles.inputContainer} placeholder="Salt Water / Sea Water"></TextInput>
            <Text>Fish Number</Text>
            <TextInput style={styles.inputContainer} inputMode='numeric' placeholder="Total Fish"></TextInput>
            <Button
                onPress={createAutoConfig}
                title="Configure"
                color="#1c4ae0"
            />
        </View>
    )
}

const History = () => {
    const DATA = [
        {
            title: 'Thursday, 2022/12/20',
            data: ['10:20AM', '2:00PM', '6:30PM'],
        },
        {
            title: 'Wednesday, 2022/12/19',
            data: ['10:20AM', '2:00PM', '6:30PM'],
        },
        {
            title: 'Tuesday, 2022/12/18',
            data: ['10:20AM', '2:00PM', '6:30PM'],
        },
    ];
    return (
        <View>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    )
}
const AlarmList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    const createAlarm = () => {
        setModalVisible(true);
    };

    const alarmAlert = () =>
        Alert.alert('Are you sure you want to create the new alarm', '', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'CONFIRM', onPress: () => setModalVisible(!modalVisible) },
        ]);
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    onPress={createAlarm}
                    title="Create Alarm"
                    color="#1c4ae0"
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, { rowGap: 10 }]}>
                            <Text style={styles.modalText}>Create Your New Alarm🎉!</Text>
                            <DatePicker date={date} onDateChange={setDate} mode="time" />
                            <Button
                                onPress={alarmAlert}
                                title="Create Alarm"
                                color="#1c4ae0"
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>CLOSE</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <Row>
                <AlarmFormat />
            </Row>
        </View>
    )
};

const AlarmFormat = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const Item = ({ title, dateTime }) => (
        <View style={styles.item}>
            <View style={{ flex: 2, flexDirection: 'column' }}>
                <Text style={styles.title}>{title}</Text>
                <Text>{dateTime}</Text>
            </View>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
    var newTime = new Date().toLocaleTimeString();
    const DATA = [
        {
            title: newTime,
            dateTime: 'Thursday, Friday'
        },
        {
            title: newTime,
            dateTime: 'everyday'
        },
        {
            title: newTime,
            dateTime: 'Monday Friday'
        },
    ];

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} dateTime={item.dateTime} />}
        />
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 40
    },
    input: {
        height: 70,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        alignItems: 'center'
    },
    chartTitle: {
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#1CB5E0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
})