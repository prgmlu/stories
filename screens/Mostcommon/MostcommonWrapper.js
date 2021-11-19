import React from 'react';
import { MostcommonContextProvider } from "./context/mostcommon-context.js";
import Mostcommon from './Mostcommon.js';

export default function MostcommonWrapper(props){
	return (
		<MostcommonContextProvider>
			<Mostcommon />
		</MostcommonContextProvider>
	)
	}
