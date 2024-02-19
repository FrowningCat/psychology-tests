import './settingAccount.css';

('use client');

import { useState } from 'react';
let oldEmail = 'dxgfchvjhbkjnlkm@gmail.com';
let oldNumber = '+7 (999) - 45 - 45';

export default function SettingAccount() {
    const [style1, setStyle1] = useState('displayNone');
    const [style2, setStyle2] = useState('displayNone');
    const [style3, setStyle3] = useState('displayNone');
    let [newEmail, setEmail] = useState();
    let [newNumber, setNumber] = useState();

    const changeNumber = () => {
        setStyle1('displayBlock changeParametersBg');
    };

    const closeChangeNumber = () => {
        setStyle1('displayNone');
    };

    const closeChangeNumberWithСhanges = () => {
        oldNumber = newNumber;
        setStyle1('displayNone');
    };

    const changeMail = () => {
        setStyle2('displayBlock changeParametersBg');
    };

    const closeChangeMail = () => {
        setStyle2('displayNone');
    };

    function closeChangeMailWithСhanges() {
        oldEmail = 'vsavinkov60@gmail.com';
        setStyle2('displayNone');
    }

    const changePassword = () => {
        setStyle3('displayBlock changeParametersBg');
    };

    const closeChangePassword = () => {
        setStyle3('displayNone');
    };

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
                    <div
                        className="changeParameters__vector link"
                        onClick={closeChangeNumber}
                    >
                        1
                    </div>
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
                    <div
                        className="changeParameters__vector link"
                        onClick={closeChangeMail}
                    >
                        2
                    </div>
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
                    <div
                        className="changeParameters__vector link"
                        onClick={closeChangePassword}
                    >
                        3
                    </div>
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
                            <input className="changeParameters__mainBlock__dateNumberAndMail__boxDate"></input>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Новый пароль
                            </div>
                            <input className="changeParameters__mainBlock__dateNumberAndMail__boxDate"></input>
                            <div className="changeParameters__mainBlock__dateNumberAndMail__boxDate">
                                Повторите новый пароль
                            </div>
                            <input className="changeParameters__mainBlock__dateNumberAndMail__boxDate"></input>
                        </div>
                    </div>
                    <div
                        className="changeParameters__btnChange link"
                        onClick={closeChangePassword}
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
