import './settingAccount.css';

('use client');

import { useState } from 'react';
import vector from '../../assets/SettingAccount/Vector.png';
import eye from '../../assets/SettingAccount/eye.png';
let oldEmail = 'dxgfchvjhbkjnlkm@gmail.com';
let oldNumber = '+7 (999) - 45 - 45';

export default function SettingAccount() {
    const [style1, setStyle1] = useState('displayNone');
    const [style2, setStyle2] = useState('displayNone');
    const [style3, setStyle3] = useState('displayNone');
    let [newEmail, setEmail] = useState();
    let [newNumber, setNumber] = useState();
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
    const regPhone = /\++[0-9]/;

    const changeNumber = () => {
        setStyle1('displayBlock changeParametersBg');
    };

    const closeChangeNumber = () => {
        setStyle1('displayNone');
    };

    const closeChangeNumberWithСhanges = () => {
        const phone = document.getElementById('phone').value;
        if (regPhone.test(phone) === false) {
            alert('Введите номер телефона');
        } else {
            oldNumber = newNumber;
            setStyle1('displayNone');
        }
    };

    const changeMail = () => {
        setStyle2('displayBlock changeParametersBg');
    };

    const closeChangeMail = () => {
        setStyle2('displayNone');
    };

    function closeChangeMailWithСhanges() {
        const email = document.getElementById('email').value;
        if (regEmail.test(email) === false) {
            document.getElementById('email').value = 'Введите настоящую почту';
        } else {
            oldEmail = 'vsavinkov60@gmail.com';
            setStyle2('displayNone');
        }
    }

    const changePassword = () => {
        setStyle3('displayBlock changeParametersBg');
    };

    const closeChangePassword = () => {
        setStyle3('displayNone');
    };

    const closeChangePasswordWithСhanges = () => {
        const oldPass = document.getElementById('oldPass').value;
        const newPass = document.getElementById('newPass').value;
        const newPassCheck = document.getElementById('newPassCheck').value;
        let errorOldPass = document.getElementById('errorOldPass');
        let errorNewPass = document.getElementById('errorNewPass');
        if (oldPass != '') {
            if ((newPass == newPassCheck) & (newPass != '')) {
                errorNewPass.setAttribute(
                    'class',
                    'changeParameters__newPassNone'
                );
                setStyle3('displayNone');
            } else {
                errorOldPass.setAttribute(
                    'class',
                    'changeParameters__oldPassNone'
                );
                errorNewPass.setAttribute(
                    'class',
                    'changeParameters__newPassBlock'
                );
            }
        } else {
            errorOldPass.setAttribute(
                'class',
                'changeParameters__oldPassBlock'
            );
        }
    };

    function eyeClick1() {
        let password = document.getElementById('oldPass');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    function eyeClick2() {
        let password = document.getElementById('newPass');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    function eyeClick3() {
        let password = document.getElementById('newPassCheck');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    return (
        <>
            <div className="profile">
                <div className="profile__h">Профиль</div>
                <div className="profile__personalInformation">
                    <div className="profile__personalInformation__heading">
                        <div className="profile__personalInformation__heading__text">
                            Персональная информация
                        </div>
                        <div className="profile__personalInformation__heading__discriptionText">
                            Персональная информация описание описание описание
                        </div>
                    </div>

                    <div className="profile__personalInformation__dataUser">
                        <div className="profile__personalInformation__dataUser__box">
                            Полные имя и фамилия
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            Vlad S
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            Telegram
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            @pupupupu
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            Номер телефона
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            <text className="">{oldNumber}</text>
                            <text
                                className="profile__personalInformation__dataUser__box__change link"
                                onClick={changeNumber}
                            >
                                Изменить
                            </text>
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            Адрес электронной почты
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            <text className="">{oldEmail}</text>
                            <text
                                className="profile__personalInformation__dataUser__box__change link"
                                onClick={changeMail}
                            >
                                Изменить
                            </text>
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            Пароль
                        </div>
                        <div className="profile__personalInformation__dataUser__box">
                            <text className=""></text>
                            <text
                                className="profile__personalInformation__dataUser__box__change link"
                                onClick={changePassword}
                            >
                                Изменить
                            </text>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style1}>
                <div className="changeParameters">
                    <img
                        src={vector}
                        alt="vector png"
                        className="changeParameters__vector link"
                        onClick={closeChangeNumber}
                    ></img>
                    <div className="changeParameters__mainBlock">
                        <div className="changeParameters__mainBlock__title">
                            Изменить номер телефона
                        </div>
                        <div className="changeParameters__mainBlock__explanation">
                            Какой-то текст про изменение номера и требования к
                            нему
                        </div>
                        <div className="changeParameters__mainBlock__dateNumberAndMail">
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Старый номер телефона
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                {oldNumber}
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Новый номер телефона
                            </div>
                            <input
                                className="changeParameters__mainBlock__dateNumberAndMail__boxDate"
                                type="text"
                                id="phone"
                                onChange={() => setNumber()}
                                required
                            ></input>
                        </div>
                    </div>
                    <div
                        className="changeParameters__btnChange link"
                        onClick={closeChangeNumberWithСhanges}
                    >
                        <text className="changeParameters__btnChange__btnText">
                            Изменить номер телефона
                        </text>
                    </div>
                </div>
            </div>

            <div className={style2}>
                <div className="changeParameters">
                    <img
                        src={vector}
                        alt="vector png"
                        className="changeParameters__vector link"
                        onClick={closeChangeMail}
                    ></img>
                    <div className="changeParameters__mainBlock">
                        <div className="changeParameters__mainBlock__title">
                            Изменить электронную почту
                        </div>
                        <div className="changeParameters__mainBlock__explanation">
                            Какой-то текст про изменение почты и требования к
                            нему
                        </div>
                        <div className="changeParameters__mainBlock__dateNumberAndMail">
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Старая почта
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                {oldEmail}
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Новая почта
                            </div>
                            <input
                                className="changeParameters__mainBlock__dateNumberAndMail__boxDate"
                                type="email"
                                id="email"
                                onChange={() => setEmail()}
                                required
                            ></input>
                        </div>
                    </div>

                    <div
                        className="changeParameters__btnChange link"
                        onClick={closeChangeMailWithСhanges}
                    >
                        <text className="changeParameters__btnChange__btnText">
                            Изменить почту
                        </text>
                    </div>
                </div>
            </div>

            <div className={style3}>
                <div className="changeParameters">
                    <img
                        src={vector}
                        alt="vector png"
                        className="changeParameters__vector link"
                        onClick={closeChangePassword}
                    ></img>
                    <div className="changeParameters__mainBlock">
                        <div className="changeParameters__mainBlock__title">
                            Изменить пароль
                        </div>
                        <div className="changeParameters__mainBlock__explanation">
                            Какой-то текст про изменение пароля и требования к
                            паролю
                        </div>
                        <div className="changeParameters__mainBlock__dateNumberAndMail">
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Старый пароль
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                <input
                                    id="oldPass"
                                    type="password"
                                    className="changeParameters__mainBlock__dateNumberAndMail__boxDate__input"
                                ></input>
                                <img
                                    onClick={() => eyeClick1()}
                                    src={eye}
                                    alt="eye img"
                                    className="changeParameters__mainBlock__dateNumberAndMail__boxDate__eye link"
                                />
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Новый пароль
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                <input
                                    id="newPass"
                                    type="password"
                                    className="changeParameters__mainBlock__dateNumberAndMail__boxDate__input"
                                ></input>
                                <img
                                    onClick={() => eyeClick2()}
                                    src={eye}
                                    alt="eye img"
                                    className="changeParameters__mainBlock__dateNumberAndMail__boxDate__eye link"
                                />
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Повторите новый пароль
                            </div>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                <input
                                    id="newPassCheck"
                                    type="password"
                                    className="changeParameters__mainBlock__dateNumberAndMail__boxDate__input"
                                ></input>
                                <img
                                    onClick={() => eyeClick3()}
                                    src={eye}
                                    alt="eye img"
                                    className="changeParameters__mainBlock__dateNumberAndMail__boxDate__eye link"
                                />
                            </div>
                        </div>
                        <div
                            id="errorOldPass"
                            className="changeParameters__oldPassNone"
                        >
                            Введите старый пароль
                        </div>
                        <div
                            id="errorNewPass"
                            className="changeParameters__newPassNone"
                        >
                            Пароли не совпали
                        </div>
                    </div>
                    <div
                        className="changeParameters__btnChange link"
                        onClick={closeChangePasswordWithСhanges}
                    >
                        <text className="changeParameters__btnChange__btnText">
                            Изменить пароль
                        </text>
                    </div>
                </div>
            </div>
        </>
    );
}
