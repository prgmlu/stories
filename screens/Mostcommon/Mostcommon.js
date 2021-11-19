import React, {useState, useContext} from 'react';
import { MostcommonContext } from "./context/mostcommon-context";

import { StyleSheet, Text, View , ScrollView} from 'react-native';
import AppButton from '../shared_components/AppButton.js';
//import {Card, CardItem} from "native-base";
//import { List } from 'react-native-paper';



export default function Mostcommon(props){
	const [state, dispatch] = useContext(MostcommonContext);
 
const [expanded, setExpanded] = useState([false,false,false,false,false,false,false,false,false,false]);
const handlePress = (id) => { 
	var ne = expanded.slice();
	ne[id] = !ne[id];
	setExpanded(ne);
	}

	return (

	<ScrollView >
		<List.Section title="Accordions">

		{state.mostCommonWords.slice(0,10).map((word,i)=>

			(

				<List.Accordion id={i} key={i}
				title={word}
				left={props => <List.Icon {...props} icon="folder" />}
				expanded={expanded[i]}
				style={{
					borderRadius:10,
						border:"10px",
						borderWidth:2
					}}
				onPress={()=>handlePress(i)}>
				<List.Item title="First item" />
				<List.Item title="Second item" />
			</List.Accordion>

				)
			
			)
			}

		    </List.Section>


	</ScrollView>

		);
};

const styles = StyleSheet.create({

})


