
export const validateInput = inputValue => {
    // Check if inputValue is empty
    if (inputValue.trim() === '') {
      throw new Error('Task cannot be empty 🙄 Please enter something!');
    }
    // Check if inputValue is not longer than 100 characters
    if (inputValue.length > 100) {
      throw new Error('Task cannot be longer than 100 characters 😯 Please make it shorter!');
    }
    // If all checks pass, return null(no error)
    return null;
}

export const checkInputWordLength = taskText => {
  // Check if todoText has any words longer than 12 characters
  if (/\b\w{12,}\b/.test(taskText)) {
      console.log('is true');
      return true;
  }
  return false;
}



