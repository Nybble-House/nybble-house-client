import { useState, useEffect } from 'react'
import { StyleSheet, Button} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { getColonyNetworkClient, Network} from '@colony/colony-js';
import { Wallet } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';

const url = 'https://rpc.gnosischain.com/'; 
const provider = new JsonRpcProvider(url);

export default function Landing({ navigation }: RootTabScreenProps<'Landing'>) {
  const [networkAddress, setNetworkAddress] = useState('');
  const [wallet, setWallet] = useState('');
  const [networkClient, setNetworkClient] = useState('');
  const [colonyClient, setColonyClient] = useState('');

  const connect = async () => {
    setNetworkAddress('0x78163f593D1Fa151B4B7cacD146586aD2b686294')
    
    const newWallet = new Wallet(
      // This is a private key that is generated by the colony network ganache instance
      // wallet wrapper goes here,
      '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
      provider
    )
    // const address = newWallet.getAddress()
    setWallet(newWallet.address)

    const networkClient = await getColonyNetworkClient(
      Network.Xdai,
      newWallet,
      {networkAddress: '0x78163f593D1Fa151B4B7cacD146586aD2b686294'}
    );
    setNetworkClient(networkClient.address )

    const colonyClient = await networkClient.getColonyClient(1);
    setColonyClient(colonyClient.name )

    return  
  }

  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Nybble House</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text>Wallet : {wallet}</Text>
      <Text>Network Address : {networkAddress} </Text>
      <Text>Network Client : {networkClient} </Text>
      {/* <Text>Colony Client : {colonyClient} </Text>   */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Button title='Connect' onPress={() => connect()} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    // width: '80%',
  },
});










  // useEffect(() => {
  //   const connect = async () => {
  //     const newWallet = new Wallet(
  //       // This is a private key that is generated by the colony network ganache instance
  //       // wallet wrapper goes here,
  //       '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
  //       provider
  //     )
  //     setWallet(newWallet)
  //   }
  //   return () => {connect()}
  // }, [])
 

      // const connect = async () => {
      //     const wallet = new Wallet(
      //         // This is a private key that is generated by the colony network ganache instance
      //         // wallet wrapper goes here,
      //         '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
      //         provider
      //     );
      //     const networkClient = await getColonyNetworkClient(
      //         Network.Xdai,
      //         wallet,
      //         {networkAddress: '0x78163f593D1Fa151B4B7cacD146586aD2b686294'}
      //     );
      //     const colonyClient = await networkClient.getColonyClient(1);

      //     console.log('Wallet Address:', wallet.address);
      //     console.log('Network Address:', networkClient.address);
      //     console.log('Meta Colony address:', colonyClient.address);

      //     setWallet(wallet.address);
      //     setNetworkClient(networkClient);
      //     setColonyClient(colonyClient);
      // }
      // connect();