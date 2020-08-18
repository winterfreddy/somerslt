import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);