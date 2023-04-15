import { Component } from "react";
import ErrorModal from "../Modals/ErrorModal";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = {hasError: false, errorMessage: ''};
    }
 
    componentDidCatch(error) {
        console.log('component did catch', error);  
        this.setState({hasError: true, errorMessage: error.message});
    }

    // static getDerivedStateFromError(error) {
    //     console.log('get derived state recieved error', error);
    //     return {hasError: true, errorMessage: error.message}
    // }


    render() {
        if(this.state.hasError) {
            return(
                <>
                    {this.props.children}
                    <ErrorModal
                        onClose = {() => this.setState({hasError: false, errorMessage: ''})}
                        errorMsg = {this.state.errorMessage}
                    />
                </>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;

