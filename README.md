# [modal-for-react](https://www.npmjs.com/package/modal-for-react)

Simple customizable modal component for React apps.

**updated v1.0.0** pass the state setter directly, added function to close modal when user press `esc` or click outside of modal (or to persist the modal on outside click)

## Installation

To install using npm:
`npm install modal-for-react`

## API Documentation

This is a simple example of modal-of-react being used in a React app:

```
import React, { useState } from 'react';
import { Modal } from 'modal-for-react';

export default function ExampleModal() {
	const [isModalActive, setModalActive] = useState(false);
	const handleClickModal = () => isModalActive ? setModalActive(false) : setModalActive(true);

	return (
		<div>
		<button onClick={handleClickModal}>Open modal</button>
		<Modal 
			setState={setModalActive} 
			isActive={isModalActive} 
			modalContent= "This is a modal" 
			backgroundStyle={{ backgroundColor:"rgba(0,0,0,0.2)" }} 
			refresh
			persist
		/>
		</div>
	)
};
```

You have to set a state for the modal in the parent component.

Props that could be passed to Modal component:

- **setState**(required): function that handle the state change in the parent component

- **isActive**(required): refer to the actual state of the parent component

- **modalContent**(required): content/message in the modal

- **backgroundStyle**(optional): object, custom style for background. Default background is full screen size with rgba(255,255,255,0.35) color.

- **contentStyle**(optional): object, custom style for the content inside the modal.

- **exitBtn**(optional): element to close the modal. Default element is "X". You can pass an icon, for example:
	`<Modal 
			handleClick = {handleClickModal} 
			isActive = {isModalActive} 
			modalContent = "This is a modal" 
			exitBtn = <i class="fas fa-times-circle"></i>
	/>`

- **exitBtnStyle**(optional): object, style for the exit button element. By default this element is positioned on the right top corner of the modal.

- **refresh**(optional): boolean, if set to true the page will refresh after the the exit button clicked. Default value is false.

- **persist**(optional): boolean, if set to true the modal would not be closed when user clicked outside of the modal. Default value is false.
