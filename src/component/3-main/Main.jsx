import { useState } from 'react';
import './main.css';
import { AnimatePresence, motion } from 'framer-motion';

const myprojec = [
    { projectTitle: "react project", category: "react", imgPath: "a" },
    { projectTitle: "css project", category: "css", imgPath: "b" },
    { projectTitle: "java project", category: "java", imgPath: "c" },
    { projectTitle: "node project", category: "node", imgPath: "d" },
    { projectTitle: "node1 project", category: "node", imgPath: "t" },
]
const Main = () => {

    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setarr] = useState(myprojec);

    return (
        <main className='flex'>
            <section className='flex  left-section'>
                <button onClick={() => {
                    setcurrentActive("all"), setarr(myprojec);
                }}
                    className={currentActive === "all" ? "active" : null}>All Project</button>
                <button onClick={() => {
                    const newArr = myprojec.filter((item) => {

                        return item.category === "css"
                    });
                    setarr(newArr);
                }}
                    className={currentActive === "css" ? "active" : null}> HTML & CSS</button>
                <button onClick={() => {
                    const newarr = myprojec.filter((item) => {
                        return item.category === "java"
                    })
                    setcurrentActive("java"); setarr(newarr);
                }} className={currentActive === "java" ? "active" : null}> JavaScript</button>
                <button onClick={() => {
                    const newarr = myprojec.filter((item) => {
                        return item.category === "react"
                    })
                    setcurrentActive("react"); setarr(newarr);
                }}
                    className={currentActive === "react" ? "active" : null}>React & MUI</button>
                <button onClick={() => {
                    const newarr = myprojec.filter((item) => {
                        return item.category === "node"
                    })
                    setcurrentActive("node"); setarr(newarr);

                }} className={currentActive === "node" ? "active" : null}>Node & Express</button>
            </section>

            <section className=' flex rigth-section  '>
            <AnimatePresence>
                {arr.map((item) => {
                    return (
                        <motion.article
                        layout 
                        initial={{transform: "scale: (0)" }}
                        animate={{ transform: "scale: (1)" }}
                        transition={{type:"spring" , damping:8 ,stiffness:50}}
                        key={item.imgPath} className=' card'>
                            <img width={266} src={item.imgPath} alt="" />
                            <div style={{ width: "266px" }} className=" box">
                                <h1 className='title'>{item.projectTitle}</h1>
                                <p className='sub-title'>Project contine is multy smart for the in my first name mohammad is enginnner</p>
                                <div className="flex icons">
                                    <div style={{ gap: "11px" }} className='flex'>
                                        <div className='icon-link'></div>
                                        <div className='icon-github'></div>
                                    </div>
                                    <a className='link flex' href="">
                                        more
                                        <span style={{ alignSelf: "end" }} className="icon-arrow_forward"></span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    )
                })}
                </AnimatePresence>
            </section>
        </main>
    );
}
export default Main;