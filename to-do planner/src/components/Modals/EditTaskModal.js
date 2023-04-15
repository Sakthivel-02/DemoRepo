
import classes from './EditTaskModal.module.css';
import { useState } from 'react';
import Modal from '../UI/Modal';
import { validateInput } from '../Helpers/InputControl';

const EditTaskModal = props => {

    const [enteredTaskText, setEnteredTaskText] = useState(props.taskText);
    const [error, setError] = useState(null);

    if(error) {throw error};

    const handleChange = e => {
        setEnteredTaskText(e.target.value);
    }

    const closeModalHandler = () => {
        props.toggleEditTaskModal();
    }

    const changeTaskTextHandler = () => {
        try {
            validateInput(enteredTaskText.trim());
            if(!error) props.receivedChangedTaskText(props.index, enteredTaskText);
            closeModalHandler();
        } catch(error) {
            setError(error);
        }
    }

    return(
        <Modal 
        btnText = {'Change'}
        closeModalHandler = {closeModalHandler}
        mainBtnClick = {changeTaskTextHandler}
        clickedEnter = {changeTaskTextHandler}
        >
                <h1 className={classes.editTodoH3}>Edit Current Task</h1>
                <textarea
                    value={enteredTaskText}
                    onChange = {handleChange}
                    autoFocus 
                    type='text' 
                    className = {classes.modalInputField}
                ></textarea>
        </Modal>
    )
}

export default EditTaskModal;