import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container1}>
      <ImageBackground style={styles.img} source={{ uri: 'https://img.freepik.com/premium-vector/vector-simple-blue-gradient-background-vector-business_408922-312.jpg' }}>

        <View style={styles.box1}>
          <Image style={styles.logo} source={{ uri: 'https://png.pngtree.com/png-vector/20191015/ourmid/pngtree-light-bulb-vector-glowing-bright-light-bulb-icon-fluorescent-invention-3d-png-image_1788706.jpg' }}></Image>
          <Text style={styles.name}>Task-1</Text>
        </View>
        <View style={styles.box2}>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.txt}>LogIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.txt}>SignUp</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container2}>
          <View style={styles.content}><Text style={styles.heading}>Overview</Text></View>
          <View style={styles.content}><Text style={styles.heading}>Profile</Text></View>
          <View style={styles.content}><Text style={styles.heading}>Analytics</Text></View>
          <View style={styles.content}><Text style={styles.heading}>Notifications</Text></View>
          <View style={styles.content}><Text style={styles.heading}>Tasks</Text></View>
          <View style={styles.content}><Text style={styles.heading}>Settings</Text></View>
          <View style={styles.content}><Text style={styles.heading}>Help</Text></View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    marginTop: 120,
  },
  content: {
    borderWidth: 2,
    borderColor: 'black',
    width: 350,
    height: 50,
    backgroundColor: 'rgba(30, 144, 255, 0.65)',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeigt: 'bold',
    top: 10,
  },
  box1: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,
    position: 'absolute',
    top: 20,
    left: 15
  },
  box2: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,
    position: 'absolute',
    top: 30,
    right: 15,
  },
  img: {
    flex: 1,
    width: 400,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: '#007bff',
    height: 40,
    width: 60,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  txt: {
    color: 'white',
    fonrSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});
