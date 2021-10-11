import React, { useCallback, useEffect } from "react";
import useClickOutsideRef from "./useClickOutsideRef";

function Modal ({ isActive, setState, modalContent, backgroundStyle, contentStyle, exitBtn, exitBtnStyle, refresh, persist }) {
	const modalRef = useClickOutsideRef(() => {if (isActive && !persist) setState(false)})

	//handle close modal by esc button
	const handleEscape = useCallback((e) => {
		if (e.keyCode === 27) setState(false)
	})

	useEffect(() => {
		if (isActive) {
			document.addEventListener('keydown', handleEscape, false);
		}
		return () => {
			document.removeEventListener('keydown', handleEscape, false);
		}
	}, [handleEscape, isActive]);

	const backStyle = {
		display: isActive ? "block" : "none",
		position: "absolute",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		zIndex: 9999,
		backgroundColor: "rgba(255,255,255,0.35)",
		textAlign: "center",
		...backgroundStyle
	}
	const innerStyle = {
		maxWidth: "80%",
		position: "relative",
		border: '1px solid black',
		borderRadius: 10,
		backgroundColor: "white",
		padding: 20,
		marginLeft: "50%",
		marginTop: "25%",
		transform: "translate(-50%, -50%)",
		...contentStyle
	}
	const exitStyle = {
		position: "absolute",
		top: 5,
		right: 15,
		cursor: "pointer",
		...exitBtnStyle
	}

	const handleClickExit = () => {
		setState(false);

		if (refresh) { window.location.reload() }
	}
	
	return(
		<div style={backStyle}>
			<div style={innerStyle} ref={modalRef}>
				{modalContent}
				<div style={exitStyle} onClick={handleClickExit}>{exitBtn ? exitBtn : "X"}</div>
			</div>
		</div>
	)
};

export default Modal;
