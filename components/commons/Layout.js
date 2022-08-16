import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({children}){
    return (<div>
        <table>
            <thead>
            <tr>
                <th><Header/></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{children}</td>
            </tr>
            <tr>
                <td><Footer/></td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}