
import classes from './TaskActions.module.css';
import { tasksContext } from '../context/tasksContext';
import { React, useState, useContext } from 'react';
import ClearAllTasksModal from './Modals/ClearAllTasksModal';
import FilterTasksModal from './Modals/FilterTasksModal';

const TaskActions = () => {

    const {filterOn, emojiesOn, toggleEmojies, toggleFilter, clearAllTasks} = useContext(tasksContext);

    // states 
    const [filterTasksModal, togglefilterTasksModal] = useState(false);
    const [clearTasksModal, toggleclearTasksModal] = useState(false);

    const [hoveredText, setHoveredText] = useState('');
    const [filterMsg, setfilterMsg] = useState('');
    const [emojiMsg, setEmojiMsg] = useState('');

    // Handlers 

    const handleToggleEmoji = () => {
        if (!emojiesOn) {
            toggleEmojies(true);
            setHoveredText(`${!emojiesOn ? 'Deactivate' : 'Activate'} Auto-Emojies`);
            setEmojiMsg('Automatic Emojies Activated 🙋‍♂️');
            return
        }
        toggleEmojies(false);
        setHoveredText(`${!emojiesOn ? 'Deactivate' : 'Activate'} Auto-Emojies`);
        setEmojiMsg('');
    }

    const handleToggleFilter = () => {
        if(!filterOn) {
            togglefilterTasksModal(true);
            toggleFilter(true);
            return;
        }
        // disable filter in context from HERE
        toggleFilter(false);
        setfilterMsg("");
    }

    const handleFilterOption = filterOption => {
        console.log(filterOption);
        setfilterMsg(`Filtering based on: ${filterOption} ⤵️`);
        togglefilterTasksModal(false);
    }

    const handleClearAllTasks = () => {
        toggleclearTasksModal(true);
    }

    const handleConfirmedClearTasks = () => {
        toggleclearTasksModal(prev => !prev);
        clearAllTasks();
    }

    const handleExitFilterTasksModal = () => {
        togglefilterTasksModal(prev => !prev);
        toggleFilter(prev => !prev);
    }

    // CSS handlers for animations 
    const handleEnterEmoji = () => setHoveredText(`${emojiesOn ? 'Deactivate' : 'Activate'} Auto-Emojies`);
    const handleEnterSort = () => setHoveredText(`${filterOn ? 'Deactivate' : 'Activate'} Filter`);
    const handleEnterClearAll = () => setHoveredText("Clear all tasks");
    const handleLeave = () => setHoveredText("");

    return(
        <>
        <div className={classes.taskActionsContainer}>
            <button 
                className={`${classes.sortBtn} ${filterOn ? classes.activatedBtn : ''}`}
                onMouseEnter={handleEnterSort} 
                onMouseLeave={handleLeave}
                onClick={handleToggleFilter}
            ></button>
            <button 
                className={classes.clearAllTasksBtn}
                onMouseEnter = {handleEnterClearAll} 
                onMouseLeave = {handleLeave}
                onClick={handleClearAllTasks}
            ></button>
            <button
                onClick={handleToggleEmoji} 
                className={`${classes.toggleEmojiesBtn} ${emojiesOn ? classes.activatedBtn : ''}`}
                onMouseEnter={handleEnterEmoji}
                onMouseLeave = {handleLeave}
            ></button>
        </div>
        <div className={classes.hoveredTaskActionText}><h3 className={classes.hoveredTaskActionTextH3}>{hoveredText}</h3></div>
        <div className={classes.taskActionsMessages}>
            <h4 className={classes.taskActionMsg}>{emojiMsg}</h4>
            <h4 className={classes.taskActionMsg}>{filterMsg}</h4>
        </div>
        {clearTasksModal && <ClearAllTasksModal
        onClose = {() => toggleclearTasksModal(prev => !prev)}
        onYesClick = {handleConfirmedClearTasks}
        />}
        {filterTasksModal && <FilterTasksModal
        onClose = {handleExitFilterTasksModal}
        enteredFilterOption = {handleFilterOption}
        />}
        </>
    )
}

export default TaskActions;