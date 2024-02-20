import { Link } from 'react-router-dom';
import { useState } from 'react';

import './authorization.css';

import eye from '../../assets/Authorization/eye.png';
import bg_site from '../../assets/Authorization/bg_site.png';

export default function Authorization() {
    const [link, setLink] = useState('/authorization');
    const [passChek, setPassChek] = useState('false');
    const [loginChek, setLoginChek] = useState('false');
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
    const regPhone = /\++[0-9]/;
    function eyeClick() {
        let password = document.getElementById('pass');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    function checkLogin() {
        let login = document.getElementById('login').value;
        if ((regEmail.test(login) || regPhone.test(login)) === false) {
            alert('Введите логин');
            setLoginChek('false');
        } else {
            setLoginChek('true');
        }
    }

    function checkPass() {
        let password = document.getElementById('pass').value;
        if (password == '') {
            alert('Введите пароль');
            setPassChek('false');
        } else {
            setPassChek('true');
        }
    }

    function linkK() {
        if (passChek != false && loginChek != false) {
            setLink('/');
        } else {
            setLink('/authorization');
        }
    }

    return (
        <>
            <header className="authorization__header"></header>
            <main className="authorization__main">
                <div>
                    <img
                        src={bg_site}
                        alt="bg_site"
                        className="authorization__main__bgSite"
                    />
                </div>
                <div className="authorization__main__div">
                    <div className="authorization__main__div__text">
                        <div className="authorization__main__div__text__textTitle">
                            Вход
                        </div>
                        <div className="authorization__main__div__text__textLink">
                            Если вы не зарегистрированы, вы можете
                            <Link
                                to={'/authorization/registration'}
                                className="authorization__main__div__text__textLink__textHref link"
                            >
                                {' '}
                                Зарегестрироваться
                            </Link>
                        </div>
                    </div>
                    <div className="authorization__main__div__input">
                        <div
                            className="authorization__main__div__input__inputText"
                            onMouseLeave={() => checkLogin()}
                        >
                            <input
                                id="login"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Эл. почта / Телефон "
                            ></input>
                        </div>
                        <div
                            className="authorization__main__div__input__inputText"
                            onMouseLeave={() => checkPass()}
                        >
                            <input
                                id="pass"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Пароль"
                            ></input>
                            <img
                                onClick={() => eyeClick()}
                                src={eye}
                                alt="eye"
                                className="authorization__main__div__input__inputText__eye link"
                            />
                        </div>
                        <Link onClick={() => linkK()} to={link}>
                            <button className="authorization__main__div__input__button">
                                Войти
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
