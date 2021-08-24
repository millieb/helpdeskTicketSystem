import React from "react";
import { register } from './UserFunctions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function Register() {

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        errors: {}
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().min(1).max(15).required("First name is required"),
        last_name: Yup.string().min(1).max(15).required("Last name is required"),
        email: Yup.string().min(4).max(20).required(),
        password: Yup.string().min(4).max(20).required()
    });

    const onSubmit = (data) => {        
        register(data).then(() => {    
            console.log(data);
        })
    };

    return (
        <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}>
            <Form >
                <h3>Register</h3>
                
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <Field 
                    className="form-control"
                    type="text"
                    id="inputCreateUser" 
                    name="first_name"
                    placeholder="Enter first name"
                    autocomplete="off"
                    />
                    <ErrorMessage name="first_name" component="span"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Last Name</label>
                    <Field 
                    className="form-control"
                    type="text"
                    id="inputCreateUser" 
                    name="last_name"
                    placeholder="Enter last name"
                    autocomplete="off"
                    />
                    <ErrorMessage name="last_name" component="span"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field 
                    className="form-control"
                    type="email"
                    id="inputCreateUser" 
                    name="email"
                    placeholder="Enter email"
                    autocomplete="off"
                    />
                    <ErrorMessage name="email" component="span"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field 
                    className="form-control"
                    type="password"
                    id="inputCreateUser" 
                    name="password"
                    placeholder="Enter password"
                    autocomplete="off"
                    />
                    <ErrorMessage name="password" component="span"/>
                </div>

                <div class="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="btn btn-dark btn-lg btn-block">
                            Register
                    </button>
                </div>
            </Form>
        </Formik>
    );
}

export default Register;