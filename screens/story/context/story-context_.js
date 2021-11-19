import React, { useReducer, createContext } from "react";

export const StoryContext = createContext();

const storyTexts = [
	[ 'أحمد في البيت مع زوجته منى','أحمد: صباح الخير يا منى!', 'منى: صباح الخير يا عزيزي','s', 'منى: أين كتابي؟',  'أحمد: معذرة؟', 's', 'منى: عندي إمتحان في الكلية اليوم'],
	['أحمد ذهب للأكل', 's', 'paragraph1', 'paragraph2', 's', 'iwejfoiew', 's'],[ 'paragraph 1 for story 3', 'paragraph2 for story 3', 'paragraph3 for story 3']];

const storyQuestions =  [
	[
		["what is the meaning of عزيزي"],["child"],["dear"],["son"],["husband"],[2],
		["what's the meaning of معذرة"],["excuse me"],["when"],["sorry"],["love"],[1]
		],

	[['why?'],
	 ['ha'],
	 ['ba'],
	 ['tah'],
	 ['gah'],
	 ['3'],
	 ['when?'],
	 ['in'],
	 ['tin'],
	 ['zen'],
	 ['fen'],
	 ['4']],
												[]]


const storyDict = {
	"Lorem": "good",
	"ipsum": "bad",
	"dolor": "pain",
	"sit": "bad",
	"amet": "good",
	"consectetur": "what",
	"adipiscing": "huh",
	"elit": "why",
	}

const initialState = {
	storyTexts : storyTexts,
	storyQuestions : storyQuestions,
	storyDict : storyDict,
	paragraphCounter:0
	}

const reducer = (state,action) => {
	switch(action.type) {
			case "HOLD":
				return {...state};
			case "INC_PARAGRAPH_COUNTER":
				return{...state,paragraphCounter:state.paragraphCounter+1}
			}
	}


export const StoryContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoryContext.Provider value={[state, dispatch]}>
		{props.children}
	</StoryContext.Provider>
		);
};
