import { setegid } from "process";
import React, { ChangeEvent, FC, useState } from "react";
import "./login.css";
import LoginResponse from "../../../api/login/LoginResponse"

export const LoginPage: FC = () => {
    const [userName, setUserName] = useState("abc");
    const userNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const [password, setPassword] = useState("abc");
    const passwordChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const PerformLogin = async (e: any) => {

        const jsonres = await (await (fetch("api/login", {
            method: "post",
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                user: userName,
                password: password,
            }),
        }))).json();
        const response: LoginResponse = jsonres;
        alert(`login ${response.Successful}`);

    };

    return (<>
        <div className="loginForm">
            <div className="mb-3 row">
                <label htmlFor="inputUserName" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" readOnly={false} className="form-control-plaintext" id="inputUserName" name="inputUserName" value={userName} onChange={userNameChanged} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" name="inputPassword" value={password} onChange={passwordChanged} />
                </div>
            </div>
            <div className="mb-3 row">
                <input type="button" value="Submit" className="btn btn-primary" onClick={PerformLogin} />
            </div>
        </div>
    </>);
}