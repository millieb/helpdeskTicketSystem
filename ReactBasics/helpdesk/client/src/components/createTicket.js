import React from "react";
import { createTicket } from './UserFunctions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function CreateTicket() {

    const initialValues = {
        title: '',
        email: '',
        company: '',
        description: '',
        errors: {}
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(1).max(20).required("Title is required"),
        description: Yup.string().min(1).max(255).required("Description is required"),
        email: Yup.string().min(4).max(20).required(),
        company: Yup.string().min(4).max(20).required()
    });

    const onSubmit = (data) => {  
        createTicket(data).then(() => {    
            console.log(data);
        })
    };

    return (
        <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}>
            <Form >
                <h3>Create Ticket</h3>
                
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field 
                    className="form-control"
                    type="text"
                    id="inputCreateTicket" 
                    name="title"
                    placeholder="Enter subject"
                    autocomplete="off"
                    />
                    <ErrorMessage name="title" component="span"/>
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
                    <label htmlFor="company">Company</label>
                    <Field 
                    className="form-control"
                    type="text"
                    id="inputCreateTicket" 
                    name="company"
                    placeholder="Enter company name"
                    autocomplete="off"
                    />
                    <ErrorMessage name="company" component="span"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <Field 
                    component="textarea"
                    rows={8}
                    className="form-control"
                    id="inputCreateTicket" 
                    name="description"
                    placeholder="Enter description"
                    autocomplete="off"
                    />
                    <ErrorMessage name="description" component="span"/>
                </div>
                <div class="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="btn btn-dark btn-lg btn-block">
                            Submit
                    </button>
                </div>
            </Form>
        </Formik>
    );
}

export default CreateTicket;