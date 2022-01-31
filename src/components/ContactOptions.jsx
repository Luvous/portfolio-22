import React, { useState } from 'react';
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
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute('name')
            })
        })

            .then(() => {
                if (!Response.ok) {
                    toast.error('Error!', {
                        theme: 'colored'
                    })
                }
                else {
                    toast.success('Message Send!', {
                        theme: 'colored'
                    })
                }
            })

            .catch(error => toast.error('Error!' + error, {
                theme: 'colored'
            }));
    }


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
                        <input className='form-input' type='text' name='name' placeholder='Name' autoComplete='off' />
                        <input className='form-input' type='email' name="email" placeholder='E-Mail' autoComplete='off' />
                        <textarea className='form-input-text' name="message" placeholder='Body' />
                        <button className='form-input-button' type='submit'>SUBMIT</button>
                        <input type="hidden" name="form-name" value="contact" />
                    </form>)}
                
                <button className={`row align-center contact-message ${contactMode ? 'contact-icons' : 'contact-back'}`} onClick={() => changeContact()}>
                    <p>{contactMode ? <Icon icon="ant-design:message-filled" width='42'/> : <Icon icon="topcoat:back" width='30' /> }</p>
                </button>
            </div>
        </div>
    )
}

export default ContactOptions
