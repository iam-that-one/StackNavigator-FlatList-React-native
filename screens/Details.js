

import { Header } from '../components/HomeHrader';
import { View,Image } from 'react-native';
import { CircleButton } from '../components/Buttons';
import assets from '../constants/assets';
import { COLORS, SIZES } from '../constants/Themes';
export const Details  = ({route, navigation}) => {
  const { data } = route.params;
    return (  
        <View style={{height:'100%',backgroundColor:COLORS.white}} > 
            <Header title={data.name}></Header>
            <CircleButton imgUrl={assets.left} handlePress={navigation.goBack}></CircleButton>

        <View  
        style={{
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'white',
            
            }}
              >
    <View style={{width:'100%',height:220,marginTop:30}}>
  <Image
        source={data.image}
        resizeMode='cover'
        style={{
        width: "100%",
        height: "200%",
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
  
  }}
  />
  </View>
     </View>
     
     </View>
    
      
    );
  };
  