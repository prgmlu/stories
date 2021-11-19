import { CheckBox } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
import React,{useContext, useEffect, useState} from 'react';
import {Image,Button,Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {AppContext} from './screens/app-context/app-context.js';



export default function MyGrid(props){
	const [state, dispatch ] = useContext(AppContext);
	//var all = {...initialVocab.nouns, ...initialVocab.fruit_vegetables, ...initialVocab.colors, ...initialVocab.countries, ...initialVocab.animals, ...initialVocab.adjectives, ...initialVocab.objects}
	const items =[
		'all',
		'objects',
		'fruit_vegetables',
		//'nouns',
		'colors',

		//'countries',
		'animals',
		'adjectives',


		'verbs',
	]

		//const [x, setX] = useState([false,false,false, false,false,false, false,false]);
	const gridState = state.gridState;

	const handlePress = (i)=>{
			var n = gridState.slice();
			var toggled = (!n[i]);
			n[i] = toggled;
		dispatch({type:"SET_GRID", payload:n})

		var payload = [];
		for (var j=0; j<n.length; j++){
			if(n[j]) {
				payload.push(items[j]);
				}
			}
		//alert(payload)
		dispatch({type:"SET_SELECTION", payload:payload})
		//jsetX(n);
		}

	return(
		<Grid style={{backgroundColor:"white",paddingRight:20, borderRadius:20}}>
			<Col>

				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(0)} containerStyle={{width:"100%"}} checked={gridState[0]} title="all" />
				</Row>

				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(1)} containerStyle={{width:"100%"}} checked={gridState[1]} title="objects" />
				</Row>

				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(2)} containerStyle={{width:"100%"}} checked={gridState[2]} title="fruits-veggies" />
				</Row>

			</Col>

			<Col>
				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(3)} containerStyle={{width:"100%"}} checked={gridState[3]} title="colors" />
				</Row>

				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(4)} containerStyle={{width:"100%"}} checked={gridState[4]} title="animals" />
				</Row>

				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(5)} containerStyle={{width:"100%"}} checked={gridState[5]} title="adjectives" />
				</Row>

			</Col>

			<Col>
				<Row>
					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(6)} containerStyle={{width:"100%"}} checked={gridState[6]} title="verbs" />
				</Row>

				<Row>
		{/*					<CheckBox textStyle={{fontWeight:'normal'}} center={true} onPress={()=>handlePress(7)} containerStyle={{width:"100%"}} checked={gridState[7]} title="objects" />*/}
				</Row>

				<Row>
		{/*							<CheckBox textStyle={{fontWeight:'normal'}} onPress={()=>handlePress(8)} containerStyle={{width:"100%"}} checked={gridState[8]} title="verbs" />*/}
				</Row>
			</Col>

		</Grid>
		)
}
