import React, {useState,useEffect, useContext, useRef} from 'react';
import { StoryContext } from "./context/story-context";
import { useNavigation } from '@react-navigation/native';

import { SelectFourContext } from "../selectFour/context/selectfour-context.js";
import SelectFourLevel from "../selectFour/components/SelectFourLevel.js";
import SelectFourLevelDummy from "../selectFour/components/SelectFourLevelDummy.js";

import { StyleSheet,BackHandler, Image, Text, ScrollView, View, Button ,TouchableOpacity, AsyncStorage, I18nManager} from 'react-native';
//import Constants from 'expo-constants';
import StoryWord from './components/StoryWord.js';
import {  Overlay } from 'react-native-elements';

import  HintOverlay  from "./components/HintOverlay.js";
import TranslationOverlay from "./components/TranslationOverlay.js";
import StoryParagraph from "./components/StoryParagraph.js";

import NextButton from "../shared_components/NextButton.js";

import { SelectFourContextProvider } from "../selectFour/context/selectfour-context.js";

import {scale, verticalScale, moderateScale} from '../utils.js';
//import { Audio } from 'expo-av';

// import {displayInter,MyBanner} from "../../MyAds.js"



	function _playSound(name, sound){
		SoundPlayer.playSoundFile(sound,"mp3");
	}


export default function Story(props){
function handleBackButtonClick() {
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

	const storyId = props.route.params.key;
	const [state, dispatch] = useContext(StoryContext);
	const [xState, _ ] = useContext(SelectFourContext);
	const [visible, setVisible] = useState(false);
	const [translation, setTranslation] = useState("koko")
	const [C, setC] = useState(0);
	const [nextBtext, setNextBtext] = useState("Next");
	//const [strictP, setStrictP] = useState(0);

	const navigation = useNavigation();

	const onPress = (word)=>{
		setTranslation(word)
		setVisible(true);
		}
	const onNextPress = ()=>{
		setC(C+1);
		if ( C >= currentStory.length-1 ){
			setNextBtext("Finish");
			}
		if (C>= currentStory.length){
			navigation.navigate("StorySelection")
			}

		dispatch({type:"INC_PARAGRAPH_COUNTER"});
		if (qTurn) {
			setHistory((prev)=>{
				console.log(prev);
				return [...prev, {qText: qText, vocab:vocab, bgs:xState.bgs.slice()}];
				}
				);
			}


		}

	const currentStory = state.storyTexts[storyId];
	const currentStoryItem = currentStory[state.paragraphCounter];
	const storySoFar = currentStory.slice(0,state.paragraphCounter+1);
	const scrollViewRef = useRef();

	const storyQuestions = state.storyQuestions[storyId];

	const [history,setHistory] = useState([{}]);
	const [nextDisabled ,setNextDisabled] = useState(false);

const sounds = [
[				("s0_0_.m4a"),
				("s0_1_.m4a"),
				("s0_2_.m4a"),
				("s0_3_.m4a"),
				("s0_4_.m4a"),
				("s0_5_.m4a"),
				("s0_6_.m4a"),
],
[				("s1_6_.m4a"),
				("s1_a.m4a"),
				("s1_7_.m4a"),
				("s1_b.m4a"),
				("s1_5_.m4a"),
				("s1_c.m4a"),
				("s1_4_.m4a"),
				("s1_d.m4a"),
				("s1_3_.m4a"),
				("s1_e.m4a"),
				("s1_2_.m4a"),
				("s1_f.m4a"),
				("s1_1_.m4a"),
				("s1_g.m4a"),
				("s1_0_.m4a"),
				("s1_h.m4a"),
				("s1_i.m4a"),
],
[				("s2_0.mp3"),
				("s2_1.mp3"),

				("s2_2.mp3"),
				("s2_3.mp3"),

				("s2_4.mp3"),
				("s2_5.mp3"),

				("s2_6.mp3"),
				("s2_7.mp3"),

				("s2_8.mp3"),
				("s2_9.mp3"),

				("s2_10.mp3"),
				("s2_11.mp3"),

				("s2_12.mp3"),
],

[				("s3_0.mp3"),
				("s3_1.mp3"),

				("s3_2.mp3"),
				("s3_3.mp3"),

				("s3_4.mp3"),
				("s3_5.mp3"),

				("s3_6.mp3"),
				("s3_7.mp3"),

				("s3_8.mp3"),
				("s3_9.mp3"),

				("s3_10.mp3"),
				("s3_11.mp3"),

				("s3_12.mp3"),
				("s3_13.mp3"),
],
[				("s4_0.mp3"),
				("s4_1.mp3"),

				("s4_2.mp3"),
				("s4_3.mp3"),

				("s4_4.mp3"),
				("s4_5.mp3"),

				("s4_6.mp3"),
				("s4_7.mp3"),

				("s4_8.mp3"),
				("s4_9.mp3"),

				("s4_10.mp3"),
				("s4_11.mp3"),

				("s4_12.mp3"),
				("s4_13.mp3"),

				("s4_14.mp3"),
				("s4_15.mp3"),

				("s4_16.mp3")
	],
[				("s5_0.mp3"),
				("s5_1.mp3"),

				("s5_2.mp3"),
				("s5_3.mp3"),

				("s5_4.mp3"),
				("s5_5.mp3"),

				("s5_6.mp3"),
				("s5_7.mp3"),

				("s5_8.mp3"),
				("s5_9.mp3"),

				("s5_10.mp3"),
				("s5_11.mp3"),

				("s5_12.mp3"),
				("s5_13.mp3"),
]
,
[				("s6_0.mp3"),
				("s6_1.mp3"),

				("s6_2.mp3"),
				("s6_3.mp3"),

				("s6_4.mp3"),
				("s6_5.mp3"),

				("s6_6.mp3"),
				("s6_7.mp3"),

				("s6_8.mp3"),
				("s6_9.mp3"),

				("s6_10.mp3"),
				("s6_11.mp3"),

				("s6_12.mp3"),
]
,
[				("s7_0.mp3"),
				("s7_1.mp3"),

				("s7_2.mp3"),
				("s7_3.mp3"),

				("s7_4.mp3"),
				("s7_5.mp3"),

				("s7_6.mp3"),
				("s7_7.mp3"),

				("s7_8.mp3"),
				("s7_9.mp3"),

				("s7_10.mp3"),
				("s7_11.mp3"),

				("s7_12.mp3"),
				("s7_13.mp3"),
				("s7_14.mp3"),
				("s7_15.mp3"),
				("s7_16.mp3"),
				("s7_17.mp3"),
],
[				("s8_0.mp3"),
				("s8_1.mp3"),

				("s8_2.mp3"),
				("s8_3.mp3"),

				("s8_4.mp3"),
				("s8_5.mp3"),

				("s8_6.mp3"),
				("s8_7.mp3"),

				("s8_8.mp3"),
				("s8_9.mp3"),

				("s8_10.mp3"),
				("s8_11.mp3"),

				("s8_12.mp3"),
				("s8_13.mp3"),
				("s8_14.mp3"),
],
[				("s9_0.mp3"),
				("s9_1.mp3"),

				("s9_2.mp3"),
				("s9_3.mp3"),

				("s9_4.mp3"),
				("s9_5.mp3"),

				("s9_6.mp3"),
				("s9_7.mp3"),

				("s9_8.mp3"),
				("s9_9.mp3"),

				("s9_10.mp3"),
				("s9_11.mp3"),

				("s9_12.mp3"),
				("s9_13.mp3"),
				("s9_14.mp3"),
]

];


	var display = [];
	var qC = history.length-1;
	var qCThisLoop = 0;
	var dummyCount = 0;
	var qTurn = false;
	for(var i=0; i<storySoFar.length; i++){
		if(storySoFar[i] == 's')	{
			//if it's a question
			if (i==storySoFar.length-1){
				var qTurn = true;
				//if it's a fresh question
				var qText = storyQuestions[qC*6];
				var vocab = storyQuestions.slice(1+(6*qC),5+(6*qC));
				var bgs = ["black","black","black","black"];
				var correctAnsId = storyQuestions[6*qC+5];
				var newDisplay = display.slice();
				newDisplay.push(<SelectFourLevel key={i} bgs={ bgs } questionText={qText} correctAnsId={correctAnsId} vocab={vocab} mainScreen={false} />)
				qC+=1;
				qCThisLoop+=1;
				display = newDisplay.slice();
				//					setHistory((prevHistory)=>{
				//						var newObj = {}
				//						newObj.vocab = null;
				//						})

				}
			else{
				var qTurn = false;
				dummyCount+=1;
				qCThisLoop+=1;
				console.log(history);
				//if it's a stale question
				display.push(
					<SelectFourLevelDummy key={i}
					bgs={history[dummyCount]['bgs']}
					vocab={history[dummyCount]['vocab']}
					img={ null }
					qText={history[dummyCount]['qText']}
					/ >
					)
				}
			}
		else{
			//if it's a paragraph not a question
			var qTurn = false;
			var t = 0;
			t = sounds[sounds.length - storyId -1]

			// if (storyId==0){
			// 	t = sounds[1];
			// 	}
			// else{
			// 	t = sounds[0];
			// 	}

			display.push(<StoryParagraph id={i-qCThisLoop} audioClips={t} key={i} text={storySoFar[i]}/>)
			}
		}


	{ var eva = (!xState.correctAnswer)&&( qTurn ) }
	return (
		<>
			<ScrollView ref={scrollViewRef} 
		onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
		style={styles.scrollView} >
		{display}


		 <HintOverlay text="Hint! click on a word in the story to get the translation!"/> 
		 <TranslationOverlay visible={true} setVisible={setVisible}/>
		{/* <TranslationOverlay visible={visible} setVisible={setVisible} translation={translation}/> */}


		{/*storySoFar.split(' ').map((word,i)=><StoryWord onPress={()=>onPress(word)} key={i} word={word}/>)*/}

		{/* storySoFar.split(' ').map((word,i)=><Text textAlign="center" key={i}>{word}</Text>) */}


	</ScrollView>


	<NextButton text={ nextBtext } disabled={eva}onPress={onNextPress}/>

	{/* <MyBanner /> */}

</>
	);
};

const styles = StyleSheet.create({
	scrollView:{
		height:"80%",
		backgroundColor: 'white',
		textAlign: 'left',
		//marginTop:15,
		//marginTop: Constants.statusBarHeight,
		//	marginHorizontal: 20,
		},
	text:{
		fontSize:20,
		textAlign: 'left',
		}

})


