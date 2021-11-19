import React , {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ProgressBarAndroid} from 'react-native';
//import { AntDesign } from '@expo/vector-icons';
import { MatchingContext } from "../context/matching-context";
import { useNavigation } from '@react-navigation/native';

import { AppContext } from "../../app-context/app-context.js";

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header(props){
const [state, dispatch] = useContext(MatchingContext);
const [stateX, dispatchX] = useContext(AppContext);

const navigation = useNavigation();

const heart = <Icon m={state.checkedInAt} name="heart" size={30} color="#900" style={{marginTop:2}} />; // Defaults to regular


	return (
			<View style={styles}>
		{/*			<AntDesign name="close" size={32} color="gray" onPress={()=> navigation.navigate('HomePage')} /> */}
			<Icon name="arrow-left" size={32} color="black" onPress={()=> navigation.navigate('HomePage')} /> 
			<View style={{height:40, flexGrow:.5, justifyContent:'center'}}>
				<ProgressBarAndroid styleAttr="Horizontal" progress={state.answeredCount/5} indeterminate={false} color='orange' />
			</View>

			<View>
		{heart}
		<Text>x{stateX.hearts}</Text>
		{/*			<AntDesign name="heart" size={32} color="crimson" /> */}
	</View>

			</View>
			);
}	
const styles = { display:'flex',
	flexDirection:'row',
fontFamily: 'sans-serif',
	width:'90%',
	padding:10,
	//backgroundColor:'white',
	justifyContent:'space-between'} 
