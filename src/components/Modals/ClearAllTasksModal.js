
import classes from './ClearAllTasksModal.module.css';
import Modal from '../UI/Modal';

const ClearAllTasksModal = props => {

    const closeModalHandler = () => props.onClose();

    const btnYesClickHandler = () => props.onYesClick();

    return(
        <Modal
        hasTwoBtns = {true}
        btn1Text = {'NO'}
        btn2Text = {'YES'}
        btn1Click = {closeModalHandler}
        btn2Click = {btnYesClickHandler}
        closeModalHandler = {closeModalHandler}
        >
            <div className={classes.clearTasksWarningContainer}>
                <h1 className={classes.clearTasksH1}>Warning</h1>
                <h2 className={classes.clearTasksMsg}>Are you sure you want to delete all your tasks?</h2>
            </div>
        </Modal>
    )

}

export default ClearAllTasksModal;