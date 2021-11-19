import React from 'react';
import { StyleSheet, Image, Text, ScrollView, View, Button ,TouchableOpacity, AsyncStorage, I18nManager} from 'react-native';
import {scale, verticalScale, moderateScale} from '../../../utils.js';
import StoryWord from "./StoryWord.js";
import SoundPlayer from 'react-native-sound-player';
//import { Audio } from 'expo-av';


	function playStorySound(path){
		var pathh = path.split('.')[0];
		var ext = path.split('.')[1];
		console.log(pathh,ext)
		SoundPlayer.playSoundFile(pathh,ext);
	}

export default StoryParagraph = function({text,audioClips, id}){
	//<View style={{flexDirection:"row", justifyContent:"flex-end"}}>
	return (
		<View style={{flex:1,justifyContent:"flex-end",flexDirection:I18nManager.isRTL?"row-reverse":"row", marginLeft:scale(0)}} >


			<View style={{flexWrap:"wrap",flexDirection:I18nManager.isRTL?"row":"row-reverse",paddingBottom:scale(20), marginRight:scale(30)}}>
				{text.map((w,i)=><StoryWord key={i} word={w.join(' ')}/>)}
			</View>

			<View style={{marginVertical:5, alignItems:"flex-start"}}>
		<TouchableOpacity id={id} onPress={()=>playStorySound(audioClips[id])} style={{marginHorizontal:8}}>
					<Image style={{width:scale(20),marginTop:verticalScale(0), height:verticalScale(20)}} source={require("../../../assets/speaker.png")} />
				</TouchableOpacity>


			</View>

		</View>
		);
	}

const paragraphStyle = StyleSheet.create({
});
