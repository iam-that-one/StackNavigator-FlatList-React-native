import { StyleSheet, View } from 'react-native';
import { RectButton } from '../components/Buttons';
import { SIZES } from '../constants/Themes';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/HomeHrader';
export const Home  = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
          <Header title="Home"/>
          <RectButton
              width={300}
              height={50}
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => {navigation.navigate('Details')}}
            />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      container:{
        //  flex:1,
          justifyContent:'center',
        alignItems:'center'
      }
  });

  