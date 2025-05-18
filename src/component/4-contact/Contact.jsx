import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/Animation - 1726505829856.json'
import contactAnimation from '../../../public/animation/Animation - 1726506182112.json'
const Contact = () => {
    const [state, handleSubmit] = useForm("mblrewjk");


    return (
        <section className='contact-us'>
            <h1 className='title'>
                <span className='icon-envelope'></span>
                Contact US
            </h1>
            <p className='sub-title '>
                contact us for more information and Get notifed when I publish something new
            </p>
            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit} className='' >
                    <div className="flex">
                        <label htmlFor="email">Email Address</label>
                        <input autoComplete='off' required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your Message</label>
                        <textarea required name="message" id="message" ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className='submit' >{state.submitting ? "submiting ...." : "submit"}</button>
                    {state.succeeded && (
                        <p className="flex" >
                            <Lottie loop={false} style={{ height: 40 }} animationData={doneAnimation} />
                            Thanks for joining!</p>
                    )}

                </form>
                <div className='  animation'>
                    <Lottie className='contact-animation' style={{ height: 355}} animationData={contactAnimation} />
                </div>
            </div>
        </section>
    );
}
export default Contact;