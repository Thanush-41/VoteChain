import React from "react";
import '../App.css';
import hero_image from './hero_image.png';
import hero_image_back from './vote1.png';
import { motion } from "framer-motion"; // Import motion from framer-motion

const Login = (props) => {
    const transition={type:'spring' , duration:3};
  const  mobile=window.innerWidth<=768 ? true:false;
    return (
        <div className="hero">
        <div className="blur hero-blur"></div>
         <div className="left-h">
        
  
          <div className="the-best-ad">
            <motion.div
            initial={{left:mobile? "165px":'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition, type:'tween'}}
            
            ></motion.div>
            <span>Blockchain-Powered Voting: Your Voice, Securely Heard</span>
          </div>
          <div className="hero-text">
       
        <div><span> VoteChain</span>
        </div>
        <div><span>
        Experience seamless and secure voting on the blockchain.
Your trust is our priority: With transparent and tamper-proof transactions.
Empowering every voice: Democratizing the voting process.
Say goodbye to traditional voting hassles: Convenient, accessible, and efficient.
Join the future of democracy: Where every vote counts, and every voice matters.        </span>
        </div>
      </div>
     
      <div className="hero-buttons">
      <button className="btn" onClick={props.connectWallet}>Login BlocksPay</button>
        
      </div>
      </div>
      <div className="right-h">
      <button className="btn" onClick={props.connectWallet}>Login BlocksPay</button>
        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        >

        </motion.div>



        <div className="heart-rate">
          
          
        </div>

        <img src={hero_image_back} alt="" className='hero-image'/>
        {/* <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image} alt="" className='hero-image-back'/> */}
       
      </div>
    </div>
    

  
        
    );
    
}
export default Login;