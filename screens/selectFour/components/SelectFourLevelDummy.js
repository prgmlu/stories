import React, {useState,useRef, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomAppButton from './CustomAppButton.js';
import NextButton from '../../shared_components/NextButton.js';

import { SelectFourContext } from "../context/selectfour-context";

import shuffle from 'lodash.shuffle';

export default function SelectFourLevel(props){

	{if (props.vocab) {
	return (
		<View style={{justifyContent:'center', flex:1, alignItems:'center'}} >
		{props.img?<Image style={{width:200,height:200, margin:20}} source={props.img} />:null}
		{props.qText?<Text style={{textAlign:"center",marginBottom:10, fontSize:20}}>{props.qText}</Text>:null}
			<View style={{ width: "90%" }}>
				<CustomAppButton bgColor={props.bgs[0]} onPress={(e)=>{}} disabled={true} id={1} text={props.vocab[0]}/>
				<CustomAppButton bgColor={props.bgs[1]} onPress={(e)=>{}} disabled={true} id={3} text={props.vocab[1]}/>
				<CustomAppButton bgColor={props.bgs[2]} onPress={(e)=>{}} disabled={true} id={2} text={props.vocab[2]}/>
				<CustomAppButton bgColor={props.bgs[3]} onPress={(e)=>{}} disabled={true} id={4} text={props.vocab[3]}/>
		{props.mainScreen?<NextButton onPress={resetState} disabled={true} />:null }
			</View>
			<Text>
			</Text>
		</View>

		);}
		else{
return(			<Text>Loading</Text>);
			}
		 }
};

const styles = StyleSheet.create (
	{
		} );
