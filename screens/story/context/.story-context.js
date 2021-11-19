import React, { useReducer, createContext } from "react";

export const StoryContext = createContext();

const storyTexts = [
['مروة في البيت مع أخيها مصطفى.', 's', 'مروة: أحتاج إلى الخبز لعمل الإفطار.', 'مصطفى: هل ستذهبي إلى السوق؟', 's', 'مروة: نعم أريد أن أأكل.', 'مصطفى: أنا أيضاً أحتاج إلى شيئ من السوق.', 'مروة: ماذا تحتاج؟', 'مصطفى: بعض الطماطم من فضلك.', 'مروة: حسناً..', 'مصطفى: شكرا، أيضاً أريد ثلاثة تفاحات.', 'مروة: حسناً..', 'مصطفى: وعصير برتقال.', 'مروة: ماذا؟', 'مصطفى: ولبن أيضاً.', 'مروة: هممم.. عندي فكرة ممتازة يا أخي.', 'مصطفى: ماذا؟', 'مروة: خذ هذه النقود.', 'مروة: أنا أريد شيئ من السوق: خبز!'],
	['أحمد في البيت مع زوجته منى.', 'أحمد: صباح الخير يا منى!', 'منى: صباح الخير يا عزيزي.', 's', 'أين كتابي؟', 'معذرة؟', 's', 'أنا أحتاج إلى كتابي', 'إن كتابك على الطاولة!', 's', "أنتهت القصة"],	["أحمد ذهب للأكل", "s", "paragraph1", "paragraph2", "s", "iwejfoiew", "s"],[ "paragraph 1 for story 3", "paragraph2 for story 3", "paragraph3 for story 3"]];

const storyQuestions =  [
['What is the meaning of أخيها ?', 'brother', 'rat', 'live', 'pomegranate', 0, 'What is the meaning of أأكل ?', 'egypt', 'turn', 'eat', 'know', 2, 'What is the meaning of فضلك ?', 'please', 'continue', 'zucchini', 'It', 0, 'What is the meaning of مروة ?', 'marwa', 'coconut', 'pass', 'mushroom', 0, 'What is the meaning of أيضاً ?', 'grow', 'learn', 'also', 'A', 2, 'What is the meaning of النقود ?', 'money', 'plum', 'appear', 'sell', 0],

[['what is the meaning of "البيت" ?'], ['The Home'], ['The Market'], ['The School'], ['Cat'], ['1'], ['What is the meaning of "السوق" ?'], ['The Market'], ['The House'], ['Tomatoes'], ['Going'], ['1']],
[["what is the meaning of 'عزيزي'?"], ['My brother.'], ['My dear.'], ['My child.'], ['My love.'], ['2'], ["what is the meaning of 'معذرة' ?"], ['sorry'], ['why'], ['where'], ['excuse me'], ['4'], ['what is the meaning of طاولة '], ['table'], ['book'], ['bed'], ['tv'], ['1']],
	[["why?"],
	 ["ha"],
	 ["ba"],
	 ["tah"],
	 ["gah"],
	 ["3"],
	 ["when?"],
	 ["in"],
	 ["tin"],
	 ["zen"],
	 ["fen"],
	 ["4"]],
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
