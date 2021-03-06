import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

function ContactOptions() {
    const [contactMode, changeContactMode] = useState(true)

    function changeContact() {
        changeContactMode(!contactMode)
    }

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&")
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = e => {
        setIsSubmitted(true)
        e.preventDefault();
    }

    useEffect(() => {
        if (isSubmitted) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-form", ...formData })
            })
                .then(() => {
                    if (Response.ok) {
                        toast.success('Message Send!', {
                            theme: 'colored'
                        })
                    } else if(!Response.ok){
                        toast.error('Error!', {
                            theme: 'colored'
                        })
                    }
                })
                .then(() => setIsSubmitted(false))
                .then(() => setFormData({ name: "", email: "", message: "" }))
                .catch(error => {
                    toast.error(error, {
                        theme: 'colored'
                    })
                })
        }
    }, [formData, isSubmitted])

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: encode({
    //             "form-name": e.target.getAttribute('name'), ...formData
    //         })
    //     })
    //         .then(() => {
    //             setFormData({ name: "", email: "", message: "" })
    //         })
    //         .then(() => {
    //             if (!Response.ok) {
    //                 console.log(formData);
    //                 toast.error('Error!', {
    //                     theme: 'colored'
    //                 })
    //             }
    //             else {
    //                 toast.success('Message Send!', {
    //                     theme: 'colored'
    //                 })
    //             }
    //         })
    //         .catch(error => toast.error('Error!' + error, {
    //             theme: 'colored'
    //         }));
    // }


    return (
        <div className='container'>
            <div className='contact-buttons'>
                {contactMode ?
                    (<div className='row space-between'>
                        <a href='https://github.com/Luvous' target='_blank' rel='noreferrer' className='contact-box'><Icon icon="teenyicons:github-solid" width='50' /></a>
                        <a href='https://www.linkedin.com/in/tomvarela/' target='_blank' rel='noreferrer' className='contact-box'><Icon icon="brandico:linkedin" width='45' /></a>
                        <a href='https://wa.me/5491126863269' target='_blank' rel='noreferrer' className='contact-box'><Icon icon="akar-icons:whatsapp-fill" width='50' /></a>
                    </div>)
                    :
                    (<form onSubmit={handleSubmit} name='contact'>
                        <input className='form-input' type='text' name='name' placeholder='Name' autoComplete='off' required value={formData.name} onChange={handleChange} />
                        <input className='form-input' type='email' name="email" placeholder='E-Mail' autoComplete='off' required value={formData.email} onChange={handleChange} />
                        <textarea className='form-input-text' name="message" placeholder='Body' required value={formData.message} onChange={handleChange} />
                        <button className='form-input-button' type='submit'>SUBMIT</button>
                        <input type="hidden" name="form-name" value="contact" />
                    </form>)}

                <button className={`row align-center contact-message ${contactMode ? 'contact-icons' : 'contact-back'}`} onClick={() => changeContact()}>
                    <p>{contactMode ? <Icon icon="ant-design:message-filled" width='42' /> : <Icon icon="topcoat:back" width='30' />}</p>
                </button>
            </div>
        </div>
    )
}

export default ContactOptions


