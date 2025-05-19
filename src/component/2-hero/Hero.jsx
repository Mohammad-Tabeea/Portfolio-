import './hero.css';
import Lottie from "lottie-react";

import computerAnimation from '../../../public/animation/Animation - 1726579698401.json';
import { useRef } from "react"
import { motion } from 'framer-motion';
const Hero = () => {
    const lottieRef = useRef();
    return (
        <section className="hero flex">
            <div className="left-section ">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 4, /*type:"spring" , stiffness: 100 */ }}
                        className="avatar" src=".photo_2025-05-19_21-44-18-removebg-preview.png" alt="" />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 4 }}
                        className="icon-verified"></motion.div>
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    className="title"> Software engineer Laravel & React website developer </motion.h1>
                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 4 }} className="sub-title">I am Mohammad Tabeeh, a graduate of Damascus University, Faculty of Information Engineering. I work as a website developer and live in Damascus</motion.p>
                <div className="all-icons flex">
                    <a className=" icon icon-linkedin-square" href="https://www.linkedin.com/in/mohammad-tabeea-0390801a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"></a>
                    <a className=" icon icon-github" href="https://github.com/Mohammad-Tabeea?tab=repositories"></a>
                    <a  className=" icon icon-instagram" href="https://www.instagram.com/mohammadtabeea?igsh=MXBhd2NvZmU3Y2JmNg=="></a>
                </div>
            </div>
            <div className="right-section animation ">
                <Lottie
                    onLoadedImages={() => {
                        // https://lottiereact.com/#ondestroy
                        // @ts-ignore
                        lottieRef.current.setSpeed(0.5);


                    }}
                    className='' animationData={computerAnimation} />
            </div>
        </section>
    );
}
export default Hero;