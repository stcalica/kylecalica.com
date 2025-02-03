"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Bubble from '../components/Bubble';
import { FloatingInput, FloatingTextarea } from '../components/FloatingInput';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

// Style
import 'react-phone-number-input/style.css'

const formInit = {
    fullName: '',
    email: '',
    phone: '',
    projectDetails: '',
}

const errorsInit = {
    fullName: '',
    email: '',
    phone: '',
    error: null,
    message: ""
}

const Contact = () => {
    const [formData, setFormData] = useState(formInit);
    const { fullName, email, phone, projectDetails } = formData
    const [errors, setErrors] = useState(errorsInit);
    const [Loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e) => {
        console.log("working");
        e.preventDefault();
        setLoading(true);

        const newErrors = {};
        if (!fullName.trim()) {
            newErrors.fullName = 'Fullname';
        }
        if (!email.trim()) {
            newErrors.email = 'Email';
        }
        if (phone === undefined || !phone.trim()) {
            newErrors.phone = 'Phone';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setLoading(false)
                setErrors((prev) => ({
                    ...prev,
                    message: "Email is not valid."
                }))
            } else if (!isValidPhoneNumber(phone)) {
                setLoading(false)
                setErrors((prev) => ({
                    ...prev,
                    message: "Phone is not valid."
                }))
            } else {
                try {
                    const sendMail = await fetch("/api/mail", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ fullName, email, phone, projectDetails })
                    });
                    const respMail = await sendMail.json();
                    if (respMail.status === 200) {
                        setFormData(formInit);
                        setErrors({ error: false, message: "Mail Successfully sent." });
                        setLoading(false)
                    } else {
                        setErrors({ error: true, message: "Oops! something went wrong." });
                        setLoading(false)
                    }
                } catch (error) {
                    console.log("errors", error);
                    setErrors({ error: true, message: "Oops! something went wrong." });
                    setLoading(false)
                }
            }
        } else {
            setLoading(false)
        }
    };

    return (
        <section className="py-[250px] xl:pb-[100px] xl:pt-[150px] lg:pt-[150px]">
            <Bubble className="md:opacity-30" style={{ top: 0, left: 'auto', right: 0, '--bubble-bg': "linear-gradient(#261362, #F900B7)" }} />
            <Bubble className="md:opacity-30" style={{ top: 300, left: -150, '--bubble-bg': "linear-gradient(#261362, #F900B7)" }} />
            <div className="container relative">
                <div className="row justify-between gap-y-20">
                    <div className="col-lg-6">
                        <h1 className="text-white w-[80%] font-semibold mb-[100px] xl:mb-[50px]">Get in touch.</h1>
                        <div className="contact-box bg-[linear-gradient(135deg,rgba(216,216,216,0.2),transparent)] rounded-[35px] px-[55px] py-[70px] backdrop-blur-2xl backdrop-saturate-100 xl:px-[45px] xl:py-[60px] lg:py-[40px] lg:px-[30px]">
                            <h2 className="heading-4 text-white font-semibold mb-[55px] xl:mb-[30px]">Tell us about your project.</h2>
                            <form className="row" onSubmit={handleSubmit}>
                                <FloatingInput
                                    label="Full Name *"
                                    type="text"
                                    className={`floating-label col-12 mb-[25px] ${errors.fullName && 'error'}`}
                                    name="fullName"
                                    value={fullName}
                                    onChange={handleChange}
                                />

                                <FloatingInput
                                    label="Email *"
                                    type="email"
                                    className={`floating-label col-sm-6 mb-[25px] ${errors.email && 'error'}`}
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />

                                <PhoneInput
                                    placeholder="Phone *"
                                    className={`col-sm-6 mb-[25px] ${errors.phone && 'error'}`}
                                    value={phone}
                                    onChange={(value) => setFormData((prevData) => ({ ...prevData, phone: value }))}
                                    error={errors.phone ? 'Invalid phone number' : undefined}
                                />

                                <FloatingTextarea
                                    label="Project details (optional)"
                                    type="text"
                                    className="floating-label col-12 mb-[25px]"
                                    name="projectDetails"
                                    value={projectDetails}
                                    onChange={handleChange}
                                />

                                {(errors.fullName || errors.email || errors.phone) && (
                                    <p className="text-red-800 py-3">
                                        {[
                                            errors.fullName && `${errors.fullName}`,
                                            errors.email && `${errors.email}`,
                                            errors.phone && `${errors.phone}`
                                        ].filter(Boolean).join(", ")} is required.
                                    </p>)}

                                {(errors.message && errors.error) && <p className="text-red-800 py-3">{errors.message}</p>}
                                {errors.error === false && <p className="text-green-800 py-3">{errors.message}</p>}

                                <button type="submit" disabled={Loading} className="bg-darkgray text-white !px-[45px] py-[10px] col-auto rounded-[30px] shadow-[0_4px_40px_rgba(0,0,0,0.09)] hover:bg-white hover:text-darkgray transition-all duration-300 active:scale-90 flex items-center">
                                    Submit
                                    {Loading && <div role="status">
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>}
                                </button>
                            </form >
                        </div >
                    </div >
                    <div className="col-auto">
                        <div className="flex items-start mb-[90px]">
                        </div>
                        <div className="flex items-start mb-[90px]">
                            <Image className="mr-[25px] mt-[5px]" width={35} height={35} src="/assets/icons/mail.svg" alt="Mail icon" />
                            <div>
                                <h3 className="heading-4 text-white font-semibold mb-[10px]">Mail</h3>
                                <a href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ID || "kycalica@gmail.com"}`} className="heading-6">{process.env.NEXT_PUBLIC_MAIL_ID || "kycalica@gmail.com"}</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Image className="mr-[25px] mt-[5px]" width={35} height={35} src="/assets/icons/thumbs_up.svg" alt="thumbs up icon" />
                            <div>
                                <h3 className="heading-4 text-white font-semibold mb-[10px]">Follow us on</h3>
                                <ul className="flex items-center gap-x-[25px]">
                                    <li><a href="#" className="hover:opacity-50 transition-all"><Image width={17} height={17} src="/assets/icons/facebook.svg" alt="facebook icon" /></a></li>
                                    <li><a href={"https://instagram.com/itsfrownz" || "#" || "#"} target="_blank" className="hover:opacity-50 transition-all"><Image width={24} height={24} src="/assets/icons/instagram.svg" alt="instagram icon" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact