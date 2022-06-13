
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/HomeHrader';
import { View } from 'react-native';
import { CircleButton } from '../components/Buttons';
import assets from '../constants/assets';
export const Details  = () => {
    const navigation = useNavigation();
    return (
       
        <View>
             
            <Header title="Details"></Header>
            <CircleButton style={{marginTop:50}} imgUrl={assets.left} handlePress={navigation.goBack}></CircleButton>
           
        <View activeOpacity={1.0}
        style={{
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'white',
             height:'100%'
            }}

              >
       
     </View>
     </View>
    
      
    );
  };
  