import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'; 
import Aux from '../Aux'; 

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component{

        state = {
            error: null, 
        }

        componentDidMount(){
            this.reqAxiosInt.axios.interceptors.request.use(req => {
                this.setState({error: null}); 
                return req; 
            });
            this.resAxiosInt.axios.interceptors.response.use(res => res, error => {
                this.setState({error: error}); 
            }); 
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqAxiosInt);
            axios.interceptors.response.eject(this.resAxiosInt);
        }

        errorConfirmedHandler(){
            this.setState({error: null}); 
        }

        render(){
            return (
                <Aux>
                    <Modal clicked={this.errorConfirmedHandler} show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler; 