import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


export default function Users() {
    return (
        <>
            <div>
                <Link to={'/'}>User Form</Link>
            </div>
            <div>
                <h1>Helllo</h1>
            </div>
            <div>
                <table id="maintable">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sharan</td>
                            <td>deep@gmail.com</td>
                            <td>9876543210</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sharan</td>
                            <td>deep@gmail.com</td>
                            <td>9876543210</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sharan</td>
                            <td>deep@gmail.com</td>
                            <td>9876543210</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sharan</td>
                            <td>deep@gmail.com</td>
                            <td>9876543210</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}