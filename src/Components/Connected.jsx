import React from "react";
import '../App.css';
import { motion } from "framer-motion"; 
import BlocksPayInfo from "./BlockspayInfo";

const Connected = (props) => {
    
    const formattedAccount = props.account ? "xdc" + props.account.slice(2) : "";
    const transition={type:'spring' , duration:3};
    const mobile=window.innerWidth<=768 ? true:false;
    
    return (
        <div className="background-image-container">
         
            <div className="connected-container containerStyle">
                <div className="logo-overlay">VOTECHAIN</div> {/* Added logo text */}
                
                {!props.showButton && (
                    <marquee width="60%">
                        <p className="connected-account " style={{ color: "green" }}>
                            Type the voting sign to support your favorite Exchange app for XDC Network and help them win!
                        </p>
                    </marquee>
                )}

                <h1 className="connected-header">You are Connected to BlocksPay</h1>
                <p className="connected-account">BlocksPay Account: {formattedAccount}</p>

                <table id="myTable" className="candidates-table">
                    <thead>
                        <tr>
                            <th>Voting Sign</th>
                            <th>Category</th>
                            <th>Total Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.index}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.voteCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {props.showButton ? (
                    <p className="connected-account blinking-text">You have already voted</p>
                ) : (
                    <div>
                        <input className="handleInput" type="number" placeholder="Enter Candidate Sign" value={props.number} onChange={props.handleNumberChange}></input>
                        <br />
                        <button className="login-button" onClick={props.voteFunction}>Vote</button>
                        
                    </div>
                )}
            </div>
        </div>
        
    )
}


export default Connected;