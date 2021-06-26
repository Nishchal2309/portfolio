import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import { ContactContainer, ContactWrapper, RightSide, LeftSide, Heading, MadatoryTitle } from './contactStyled'
import contactImage from '../../images/contact.svg'
import validator from 'validator'
import {FaAsterisk} from 'react-icons/fa'
import Aos from 'aos'
import "aos/dist/aos.css"
const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [messageBox, setMessageBox] = useState('');
    const [alert, setAlert] = useState({show:false, msg:'', type: ''});

    const sendEmails = (e) =>{
        e.preventDefault();

        if(!name || !email || !subject || !messageBox ){
            setAlert({show:true, msg:'Sorry .... Fields cannot be empty', type: ''})
            setTimeout(() => {
                setAlert({show: false, msg:'', type:''})
        }, 3000)

        }else if((name && email && subject && messageBox) && !(validator.isEmail(email))){
             setAlert({show:true, msg:'Please enter a valid Email...', type: ''})
             setTimeout(()=>{
                 setAlert({show:false, msg:'', type:''})
             }, 3000)
        }else{
            setAlert({show:true, msg:'Thanks for your message, Will get back to you ASAP...', type:''});
            setTimeout(() => {
                setAlert({show: false, msg:'', type:''})
        }, 4000)
        }

        emailjs.sendForm('service_ypd8r6s', 'template_jv6edvq', e.target, 'user_UVb7oMoAx8ua4SVjXAYSV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <>

            <ContactContainer id="contact">
                <Heading data-aos="fade-up">Contact me</Heading>
                <ContactWrapper>
                    <LeftSide data-aos="fade-up">
                        <img className="contactImage" src={contactImage} alt="contact image" />
                    </LeftSide>

                    <RightSide data-aos="fade-up">
                        <MadatoryTitle>All fields are mandatory</MadatoryTitle>
                        <form className="formStyled" onSubmit={sendEmails}>
                            <div><input className="nameStyled" type="text" placeholder="Name" name="name" onChange={e=>setName(e.target.value)}/><FaAsterisk className="styleInline"/></div>
                            <div><input className="inputStyled" type="text" name="subject" id="subject" placeholder="Subject" onChange={e=>setSubject(e.target.value)}/><FaAsterisk className="styleInline"/></div>
                            <div><input className="inputStyled" type="text" name="email" id="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/><FaAsterisk className="styleInline"/></div>
                            <textarea className="areaStyled" name="message" id="message" cols="30" rows="10" placeholder="Enter your message" onChange={e=> setMessageBox(e.target.value)}></textarea>
                            <button className="sendButton" type="submit">Send</button>
                            {alert.show ? <h5 className="styleTheShitOutOfAlert">{alert.msg}</h5>:null}
                        </form>
                    </RightSide>
                </ContactWrapper>
            </ContactContainer>

        </>
    )
}

export default Contact
