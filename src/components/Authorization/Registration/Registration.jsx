import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../../Authorization/authorization.css';
import './registration.css';

import eye from '../../../assets/Authorization/eye.png';
import bg_site from '../../../assets/Authorization/bg_site.png';

export default function Registration() {
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
    const regPhone = /\++[0-9]/;
    const regName = /[a-z]/;

    const [errorEmail, setErrorEmail] = useState(
        'authorization__main__div__input__inputText__errorText__emailNone'
    );
    const [errorName, setErrorName] = useState(
        'authorization__main__div__input__inputText__errorText__nameNone'
    );
    const [errorSurname, setErrorSurname] = useState(
        'authorization__main__div__input__inputText__errorText__surnameNone'
    );
    const [errorTelephone, setErrorTelephone] = useState(
        'authorization__main__div__input__inputText__errorText__telephoneNone'
    );
    const [errorPassword, setErrorPassword] = useState(
        'authorization__main__div__input__inputText__errorText__passwordNone'
    );
    const [errorPasswordRep, setErrorPasswordRep] = useState(
        'authorization__main__div__input__inputText__errorText__repPasswordNone'
    );
    const [errorTwoPasswordRep, setErrorTwoPasswordRep] = useState(
        'authorization__main__div__input__inputText__errorText__repTwoPassNone'
    );

    function linkK() {
        let email = document.getElementById('email').value;
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let telephone = document.getElementById('telephone').value;
        let password = document.getElementById('password').value;
        let passwordRep = document.getElementById('passwordRep').value;
        if (regEmail.test(email) === false) {
            setErrorEmail(
                'authorization__main__div__input__inputText__errorText__emailBlock'
            );
        } else if (regName.test(name) === false) {
            setErrorEmail(
                'authorization__main__div__input__inputText__errorText__emailNone'
            );
            setErrorName(
                'authorization__main__div__input__inputText__errorText__nameBlock'
            );
        } else if (regName.test(surname) === false) {
            setErrorName(
                'authorization__main__div__input__inputText__errorText__nameNone'
            );
            setErrorSurname(
                'authorization__main__div__input__inputText__errorText__surnameBlock'
            );
        } else if (regPhone.test(telephone) === false) {
            setErrorSurname(
                'authorization__main__div__input__inputText__errorText__surnameNone'
            );
            setErrorTelephone(
                'authorization__main__div__input__inputText__errorText__telephoneBlock'
            );
        } else if (password == '') {
            setErrorTelephone(
                'authorization__main__div__input__inputText__errorText__telephoneNone'
            );
            setErrorPassword(
                'authorization__main__div__input__inputText__errorText__passwordBlock'
            );
        } else if (passwordRep == '') {
            setErrorPassword(
                'authorization__main__div__input__inputText__errorText__passwordNone'
            );
            setErrorPasswordRep(
                'authorization__main__div__input__inputText__errorText__repPasswordBlock'
            );
        } else if (passwordRep !== password) {
            setErrorPasswordRep(
                'authorization__main__div__input__inputText__errorText__repPasswordNone'
            );
            setErrorTwoPasswordRep(
                'authorization__main__div__input__inputText__errorText__repTwoPassBlock'
            );
        } else {
            setErrorTwoPasswordRep(
                'authorization__main__div__input__inputText__errorText__repTwoPassNone'
            );
        }
    }

    function eyeClick1() {
        let password = document.getElementById('password');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    function eyeClick2() {
        let password = document.getElementById('passwordRep');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
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
                <div className="authorization__main__div divReg">
                    <div className="authorization__main__div__text">
                        <div className="authorization__main__div__text__textTitle">
                            Регистрация
                        </div>
                        <div className="authorization__main__div__text__textLink">
                            Если вы уже зарегистрированы, вы можете
                            <Link
                                to={'/authorization'}
                                className="authorization__main__div__text__textLink__textHref link"
                            >
                                {' '}
                                Войти
                            </Link>
                        </div>
                    </div>
                    <div className="authorization__main__div__input inputReg">
                        <div className="authorization__main__div__input__inputText">
                            <input
                                id="email"
                                type="email"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Эл. почта"
                            ></input>
                        </div>
                        <div className="authorization__main__div__input__inputText">
                            <input
                                id="name"
                                type="name"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Имя"
                            ></input>
                        </div>
                        <div className="authorization__main__div__input__inputText">
                            <input
                                id="surname"
                                type="name"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Фамилия"
                            ></input>
                        </div>
                        <div className="authorization__main__div__input__inputText">
                            <input
                                id="telephone"
                                type="namber"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Номер телефона"
                            ></input>
                        </div>
                        <div className="authorization__main__div__input__inputText">
                            <input
                                type="password"
                                id="password"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Придумайте пароль"
                            ></input>
                            <img
                                onClick={() => eyeClick1()}
                                src={eye}
                                alt="eye"
                                className="authorization__main__div__input__inputText__eye link"
                            />
                        </div>
                        <div className="authorization__main__div__input__inputText">
                            <input
                                type="password"
                                id="passwordRep"
                                className="authorization__main__div__input__inputText__width"
                                placeholder="Повторите пароль"
                            ></input>
                            <img
                                onClick={() => eyeClick2()}
                                src={eye}
                                alt="eye"
                                className="authorization__main__div__input__inputText__eye link"
                            />
                        </div>
                        <div className="authorization__main__div__input__inputText__errorText">
                            <div className={errorEmail}>Введите почту</div>
                            <div className={errorName}>Введите имя</div>
                            <div className={errorSurname}>Введите фамилию</div>
                            <div className={errorTelephone}>
                                Введите номер телефона
                            </div>
                            <div className={errorPassword}>Введите пароль</div>
                            <div className={errorPasswordRep}>
                                Повторите пароль
                            </div>
                            <div className={errorTwoPasswordRep}>
                                Пароли не совпали
                            </div>
                        </div>
                        {/* <Link onClick={() => linkK()} to={link}> */}
                        <button
                            onClick={() => linkK()}
                            className="authorization__main__div__input__button buttonReg"
                        >
                            Войти
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </main>
        </>
    );
}
