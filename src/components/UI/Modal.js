import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import React from 'react';
import '../UI/CSSvariables.module.css';

const Modal = props => {

    const closeModal = () => props.closeModalHandler();

    const handleKeyDown = e  => {
        if (e.keyCode === 27) {
            closeModal();
        }
        if (e.keyCode === 13 && props.clickedEnter) {
            props.clickedEnter();
        }
    }

    return ReactDOM.createPortal(
        <>
            <div 
                className = {`${classes.modalRegularSize} ${props.modalTaller ? classes.modalTaller : ''}`} 
                onKeyDown = {handleKeyDown}
                tabIndex = {0}
                >
                <button className={classes.closeModalBtn} onClick = {closeModal}></button>
                <div>{props.children}</div>
                {props.btnText && <button 
                    className={classes.modalBtn}
                    onClick = {props.mainBtnClick}
                >
                    {props.btnText}
                </button>}
                {props.hasTwoBtns &&
                <div className={classes.hasTwoBtnsBtnContainer}>
                    <button 
                        className={classes.modalBtn}
                        onClick = {props.btn1Click}
                    >
                        {props.btn1Text}
                    </button>
                    <button 
                    className={classes.modalBtn}
                    onClick = {props.btn2Click}
                    >
                        {props.btn2Text}
                    </button>
                </div> 
                }
            </div>
            <div className = {classes.backdrop} onClick = {closeModal}></div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;