import React, {useContext, useEffect, useState} from 'react';
import {scale, verticalScale, moderateScale} from '../../utils.js';
import { StatusBar,BackHandler, FlatList, TouchableOpacity, Image, Animated, Dimensions,StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import shuffle from 'lodash.shuffle';

import { AppContext } from "../app-context/app-context";


// import {displayInter,MyBanner} from "../../MyAds.js"

import SoundPlayer from 'react-native-sound-player';

export default FlatListScreen = function(props){
const navigation = useNavigation();

function handleBackButtonClick() {
	return true;
		displayInter();
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

	function _playSound(name, sound, slow){
		console.log(sound)
		var pathh = sound.split(".")[0];
		var ext = sound.split(".")[1];

		SoundPlayer.playSoundFile(pathh,ext);
		return;

		console.log('Playing '+name);
	}




	const scrollX = React.useRef(new Animated.Value(0)).current;

	const [state, dispatch] = useContext(AppContext);

	const {width, height} = Dimensions.get("screen");

	const imageW = width*0.75;
	const imageH = imageW*1.54;


	//const data = [
	//	"https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg"	,
	//	"https://cdn.dribbble.com/users/3281732/screenshots/13790086/media/5835b663cdfc9da395c91fec9f6e0afd.jpg"	,
	//	"https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg"	,
	//	"https://cdn.dribbble.com/users/3281732/screenshots/7494265/media/59c910cbe462cb632449d5c464684555.jpg"	,
	//	"https://cdn.dribbble.com/users/3281732/screenshots/6629190/samji_illustrator__.jpg"	,
	//	"https://cdn.dribbble.com/users/3281732/screenshots/8159457/media/9e7bfb83b0bd704e941baa7a44282b22.jpg"	,
	//	]


function swap(A,i,j){
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
    return A
}

function permute(A, P) { 
	var t = P.slice();
    for (var i = 0; i < A.length; i++) { 
        var next = i; 
        while (t[next] >= 0) { 
            swap(A,i,t[next]); 
            var temp = t[next];  
            t[next] -= A.length; 
            next = temp; 
        } 
    } 
    return A;
}
var [ trans ,setTrans] = useState([]);
var [ data ,setData] = useState([]);
var [ sounds ,setSounds] = useState([]);
var [ sel ,setSel] = useState(state.selection);
var [ perm ,setPerm] = useState([]);
var [ voc_ ,setVoc_] = useState([]);

useEffect(()=>{
const voc = state["activeVocab"];
var dat = [];
var sou = [];
var tran = [];
var voco = [];

for (var key in voc){
	dat.push(state['imgs'][key]);
	sou.push(state['sounds'][key]);
	console.log(state['sounds'])
	tran.push(voc[key]);
	voco.push(key);
	}
	var per = [];
	for (var i=0; i<dat.length; i++){
		per.push(i);
		}
	per = shuffle(per);
	setPerm(per);

	dat = permute(dat,per);
	tran = permute(tran,per);
	sou = permute(sou,per);
	voco = permute(voco,per);

	setTrans(tran);
	setData(dat);
	setSounds(sou);
	setVoc_(voco);
	//alert(data);
},[])


	return(

		<View style={{flex:1, backgroundColor: "#000"}}>
		{/*
			<View style={StyleSheet.absoluteFillObject}>
		{data?data.map((image,index)=>{
			const inputRange = [
				(index-1)*width,
				index*width,
				(index+1)*
		*/}

		<Animated.FlatList
		onScroll={Animated.event(
			[{nativeEvent: {contentOffset: {x: scrollX}}}],
			{useNativeDriver: true}
			)}
		horizontal
		pagingEnabled
		data = {data}
		keyExtractor={(_,index)=>index.toString()}
		renderItem={({item, index})=>{
			return ( <View style={{
					width,
					justifyContent:"center",
					alignItems:"center",

					shadowColor:"#000",
					shadowRadius:20,
				shadowOffset:{width:0, height:0,},
					shadowOpacity:.55555,
					}}>

						<View key={'a'+index} style={{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:5, borderWidth:0}}>
							<TouchableOpacity key={"c"+index} onPress={()=>_playSound('',sounds[index],true)} style={{padding:8, borderRadius:20, backgroundColor:"white"}}><Image key={"e"+index} style={{width:scale(25),marginTop:verticalScale(0), height:verticalScale(25)}} source={require("../../assets/slow.png")} /></TouchableOpacity>

							<Text key={'b'+index} style={{fontSize:25,marginHorizontal:20, color:"white"}}> { trans[index]}</Text>

							<TouchableOpacity key={"cc"+index} onPress={()=>_playSound('',sounds[index])} style={{padding:8, borderRadius:20, backgroundColor:"white"}}><Image key={"ee"+index} style={{width:scale(20),marginTop:verticalScale(5), height:verticalScale(20)}} source={require("../../assets/speaker.png")} /></TouchableOpacity>
						</View>
				<Image source={item} key={"m"+index} style={{
					borderRadius:16,
						width:imageW,
						height:imageH,
						resizeMode:'center'}}/>
					<Text style={{fontSize:20, color:"white"}}>{voc_[index]}</Text>
				</View> )
			}}
		/	>

		{/* <MyBanner /> */}

	</View>
		)

}
