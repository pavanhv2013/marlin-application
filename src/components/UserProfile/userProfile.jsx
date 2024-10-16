import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './UserProfileScreen.css'; 

const UserProfileScreen = () => {
    const [otpNumberVisible, setOtpNumberVisible] = useState(false);
    const [otpEmailVisible, setOtpEmailVisible] = useState(false);

    const sendOtp = (type) => {
        console.log(`Simulating sending OTP to ${type}`);
        if (type === 'number') {
            setOtpNumberVisible(true);
        } else if (type === 'email') {
            setOtpEmailVisible(true);
        }
    };

    const initialValues = {
        name: '',
        address: '',
        number: '',
        email: '',
        otpForNumber: '',
        otpForEmail: '',
        captcha: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        number: Yup.string()
            .matches(/^[0-9]+$/, 'Number must be digits only')
            .min(10, 'Number must be at least 10 digits')
            .required('Number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        otpForNumber: otpNumberVisible ? Yup.string().required('OTP for number is required') : Yup.string(),
        otpForEmail: otpEmailVisible ? Yup.string().required('OTP for email is required') : Yup.string(),
        captcha: Yup.string().required('CAPTCHA is required'),
    });

    const handleSubmit = (values) => {
        console.log('Profile updated:', values);
        // Here you would typically send the data to the backend API
    };

    return (
        <div className="profile-container">
            <h2>User Profile Screen</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => (
                    <Form>
                        <div className="p-field">
                            <label htmlFor="name">Name</label>
                            <Field name="name" component={({ field }) => <InputText {...field} />} />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div className="p-field">
                            <label htmlFor="address">Address</label>
                            <Field name="address" component={({ field }) => <InputText {...field} />} />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>

                        <div className="p-field">
                            <label htmlFor="number">Number</label>
                            <Field name="number" component={({ field }) => <InputText {...field} />} />
                            <Button label="Send OTP" onClick={() => sendOtp('number')} type="button" className="send-otp-button" />
                            <ErrorMessage name="number" component="div" className="error" />
                        </div>

                        {otpNumberVisible && (
                            <div className="p-field">
                                <label htmlFor="otpForNumber">Enter OTP for Number</label>
                                <Field name="otpForNumber" component={({ field }) => <InputText {...field} />} />
                                <ErrorMessage name="otpForNumber" component="div" className="error" />
                            </div>
                        )}

                        <div className="p-field">
                            <label htmlFor="email">Email</label>
                            <Field name="email" component={({ field }) => <InputText {...field} />} />
                            <Button label="Send OTP" onClick={() => sendOtp('email')} type="button" className="send-otp-button" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        {otpEmailVisible && (
                            <div className="p-field">
                                <label htmlFor="otpForEmail">Enter OTP for Email</label>
                                <Field name="otpForEmail" component={({ field }) => <InputText {...field} />} />
                                <ErrorMessage name="otpForEmail" component="div" className="error" />
                            </div>
                        )}

                        <div className="p-field">
                            <label htmlFor="captcha">Enter CAPTCHA</label>
                            <Field name="captcha" component={({ field }) => <InputText {...field} />} />
                            <ErrorMessage name="captcha" component="div" className="error" />
                        </div>

                        <div className="button-group">
                            <Button type="submit" label="Update" className="p-button-success" disabled={!(isValid && dirty)} />
                            <Button label="Cancel" className="p-button-danger"  onClick={() => window.location.reload()} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserProfileScreen;