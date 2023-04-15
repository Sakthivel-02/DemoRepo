
import classes from './ErrorModal.module.css';
import '../UI/CSSvariables.module.css';
import Modal from '../UI/Modal';

const ErrorModal = props => {

    const closeModalHandler = () => props.onClose();

    const mainBtnClick = () => props.onClose();

    return(
        <Modal
        btnText = {'OK'}
        closeModalHandler = {closeModalHandler}
        mainBtnClick = {mainBtnClick}
        >
            <div className={classes.errContainer}>
                <h1 className={classes.errH1}>ERROR</h1>
                <h2 className={classes.errMsg}>{props.errorMsg}</h2>
            </div>
        </Modal>
    )
}

export default ErrorModal;