import React, { Component } from 'react';
import { getEmployerAPI} from '../../../actions/index';
import {connect} from 'react-redux';
class Employer extends Component {

    componentDidMount(){
        let id = 5;
        this.props.getEmployer(id);
    }

    render() {
        console.log(this.props.employer)
        return (
            <div className="paddingTop150">
                <h2 className="text-center">TEST</h2>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        employer: state.employer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getEmployer: (id) => {
            dispatch(getEmployerAPI(id));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Employer);