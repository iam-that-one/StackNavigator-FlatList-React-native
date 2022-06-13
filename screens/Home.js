import { StyleSheet, View,Text } from 'react-native';
import { NFSCard } from '../components/NFSCard';

import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/HomeHrader';
import { NFTData } from '../components/NFTData';
import { useState } from 'react';
import { FlatList } from 'react-native';
export const Home  = () => {
  const [nftData, setNftData] = useState(NFTData);
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
       
          <Header title="NFT cards"/>
    
          <View style={{width:'100%',height:'100%'}}>
       <FlatList
       data={nftData}
       renderItem={(item) => (<NFSCard data={item.item}></NFSCard>)}
       keyExtractor={(item) => item.id}
       />
       </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      container:{
        paddingTop:50,
          justifyContent:'center',
        alignItems:'center',
        paddingBottom:200
    
      }
  });

