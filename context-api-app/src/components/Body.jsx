import React  from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Home(){

    const {token,mail,pass}=useContext(AuthContext)

    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Token</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{mail}</td>
                    <td>{pass}</td>
                    <td>{token}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}


export default Home