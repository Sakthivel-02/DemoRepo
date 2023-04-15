

import Modal from "../UI/Modal";
import classes from './FilterTasksModal.module.css';

const FilterTasksModal = props => {

    const handleStartFiltering = option => props.enteredFilterOption(option);

    return(
        <Modal 
        btnText = {'Exit'}
        modalTaller = {true}
        closeModalHandler = {() => props.onClose()}
        mainBtnClick = {() => props.onClose()}
        >
            <div className={classes.filterTasksContainer}>
                <h2 className={classes.filterTasksTitle}>Filter based on..</h2>
                <div className={classes.filterOptionsContainer}>
                    <button onClick={() => handleStartFiltering('newest')}>Newest</button>
                    <button onClick={() => handleStartFiltering('oldest')}>Oldest</button>
                    <button onClick={() => handleStartFiltering('importance')}>Importance ❗️</button>
                    <button onClick={() => handleStartFiltering('deadline')}>Deadline ⏳</button>
                </div>
            </div>
        </Modal>
    )
}

export default FilterTasksModal;