import './settingAccount.css';

('use client');

import { useState } from 'react';
let oldEmail = 'dxgfchvjhbkjnlkm@gmail.com';
let oldNumber = '+7 (999) - 45 - 45';

export default function Profile() {
    const [style1, setStyle1] = useState('display_none');
    const [style2, setStyle2] = useState('display_none');
    const [style3, setStyle3] = useState('display_none');
    let [newEmail, setEmail] = useState();
    let [newNumber, setNumber] = useState();

    const changeNumber = () => {
        setStyle1('display_block changeParametersNum_bg');
    };

    const closeChangeNumber = () => {
        setStyle1('display_none');
    };

    const closeChangeNumberWithСhanges = () => {
        oldNumber = newNumber;
        setStyle1('display_none');
    };

    const changeMail = () => {
        setStyle2('display_block changeParametersMail_bg');
    };

    const closeChangeMail = () => {
        setStyle2('display_none');
    };

    function closeChangeMailWithСhanges() {
        oldEmail = 'vsavinkov60@gmail.com';
        setStyle2('display_none');
    }

    const changePassword = () => {
        setStyle3('display_block changeParametersPass_bg');
    };

    const closeChangePassword = () => {
        setStyle3('display_none');
    };

    return (
        <div>
            <div className="profile">
                <div className="h">Профиль</div>
                <div className="personal_information">
                    <div className="personal_information_heading">
                        <div className="personal_information_text">
                            Персональная информация
                        </div>
                        <div className="personal_information_discription_text">
                            Персональная информация описание описание описание
                        </div>
                    </div>

                    <div className="data_user">
                        <div className="box">Полные имя и фамилия</div>
                        <div className="box">Vlad S</div>
                        <div className="box">Telegram</div>
                        <div className="box">@pupupupu</div>
                        <div className="box">Номер телефона</div>
                        <div className="box">
                            <text className="">{oldNumber}</text>
                            <text
                                className="change link"
                                onClick={changeNumber}
                            >
                                Изменить
                            </text>
                        </div>
                        <div className="box">Адрес электронной почты</div>
                        <div className="box">
                            <text className="">{oldEmail}</text>
                            <text className="change link" onClick={changeMail}>
                                Изменить
                            </text>
                        </div>
                        <div className="box">Пароль</div>
                        <div className="box">
                            <text className=""></text>
                            <text
                                className="change link"
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
                    <div className="vector link" onClick={closeChangeNumber}>
                        1
                    </div>
                    <div className="main_block">
                        <div className="title">Изменить номер телефона</div>
                        <div className="explanation">
                            Какой-то текст про изменение номера и требования к
                            нему
                        </div>
                        <div className="date_number_and_mail">
                            <div className="box_date">
                                Старый номер телефона
                            </div>
                            <div className="box_date">{oldNumber}</div>
                            <div className="box_date">Новый номер телефона</div>
                            <input
                                className="box_date"
                                type="text"
                                onChange={() => setNumber()}
                                required
                            ></input>
                        </div>
                    </div>
                    <div
                        className="btn_change link"
                        onClick={closeChangeNumberWithСhanges}
                    >
                        <text className="btn_text">
                            Изменить номер телефона
                        </text>
                    </div>
                </div>
            </div>

            <div className={style2}>
                <div className="changeParameters">
                    <div className="vector link" onClick={closeChangeMail}>
                        2
                    </div>
                    <div className="main_block">
                        <div className="title">Изменить электронную почту</div>
                        <div className="explanation">
                            Какой-то текст про изменение почты и требования к
                            нему
                        </div>
                        <div className="date_number_and_mail">
                            <div className="box_date">Старая почта</div>
                            <div className="box_date">{oldEmail}</div>
                            <div className="box_date">Новая почта</div>
                            <input
                                className="box_date"
                                type="email"
                                onChange={() => setEmail()}
                                required
                            ></input>
                        </div>
                    </div>

                    <div
                        className="btn_change link"
                        onClick={closeChangeMailWithСhanges}
                    >
                        <text className="btn_text">Изменить почту</text>
                    </div>
                </div>
            </div>

            <div className={style3}>
                <div className="changeParameters">
                    <div className="vector link" onClick={closeChangePassword}>
                        3
                    </div>
                    <div className="main_block">
                        <div className="title">Изменить пароль</div>
                        <div className="explanation">
                            Какой-то текст про изменение пароля и требования к
                            паролю
                        </div>
                        <div className="date_password">
                            <div className="box_date">Старый пароль</div>
                            <input className="box_date"></input>
                            <div className="box_date">Новый пароль</div>
                            <input className="box_date"></input>
                            <div className="box_date">
                                Повторите новый пароль
                            </div>
                            <input className="box_date"></input>
                        </div>
                    </div>
                    <div
                        className="btn_change link"
                        onClick={closeChangePassword}
                    >
                        <text className="btn_text">Изменить пароль</text>
                    </div>
                </div>
            </div>
        </div>
    );
}
