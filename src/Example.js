import React, { useState } from "react";
import {Modal} from './lib';

export default function ExampleModal() {
	const [isModalActive, setModalActive] = useState(false);
	const handleClickModal = () => isModalActive ? setModalActive(false) : setModalActive(true);
	return (
		<div>
		<button onClick={handleClickModal}>test</button>
		<Modal 
			handleClick={handleClickModal} 
			isActive={isModalActive} 
			modalContent= "This is a modal" 
			backgroundStyle={{ backgroundColor:"rgba(0,0,0,0.2)" }} 
		/>
		</div>
	)
}