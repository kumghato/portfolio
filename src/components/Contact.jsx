import React, { useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import emailjs, { sendForm } from '@emailjs/browser';
import { TbSend } from 'react-icons/tb'

function Contact() {
    const form = useRef();

    const showToast = () => {
        toast.success("Message sent")
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_68p79w7', 'template_0279mla', form.current, '9CD21_8Vz5F3v_-tf')
        showToast()



    }
    return (
        <>
            <div className='container_contact p-5' id='contact'>
                <form class="form d-flex flex-column m-auto" ref={form} onSubmit={(e) => sendEmail(e)}>
                    <h1 className='title fs-1'>
                        Hi,<br />
                        <span className='fs-1'>Wanna work with me?<br /> Hit me up...</span>
                    </h1>

                    <input type="text" placeholder="Fullname" name="name" class="input py-3 input_width " required />

                    <input type="email" placeholder="Email" name="email" class="input py-3 input_width" required />

                    <textarea rows={10} id="" name="message" class="input font_color input_width" placeholder='Say something...!!'></textarea>

                    <button type='submit' class="btn_custom d-flex justify-content-center align-items-center py-4 mt-5">Send <TbSend className='ms-2' /> </button>
                </form>
            </div >
            <Toaster />
        </>
    )
}

export default Contact