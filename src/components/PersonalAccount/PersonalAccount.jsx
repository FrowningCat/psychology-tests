import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './personalAccount.css';

export default function personalAccount() {
    const [users, setUsers] = useState([]);

    const f = async () => {
        const res = await fetch('https://reqres.in/api/users/');
        const json = await res.json();
        setUsers(json.data);
    };

    useEffect(() => {
        f();
    }, []);

    function onClick() {
        let nameScss = document.getElementById('test');
        nameScss.setAttribute('class', 'personalAccount__main__testNone');
    }

    function onClick2() {
        let nameScss = document.getElementById('test');
        nameScss.setAttribute('class', 'personalAccount__main__test');
    }

    return (
        <div className="personalAccount">
            <header className="personalAccount__header">
                <div className="personalAccount__header__logo">1</div>
                <div className="personalAccount__header__topBar">
                    <Link to={'/'}>
                        <div className="personalAccount__header__topBar__button">
                            Главная
                        </div>
                    </Link>
                    <Link to={'/test'}>
                        <div className="personalAccount__header__topBar__button">
                            Тесты
                        </div>
                    </Link>
                    <Link to={'/expert'}>
                        <div className="personalAccount__header__topBar__button">
                            Эксперты
                        </div>
                    </Link>
                    <Link to={'/signUp'}>
                        <div className="personalAccount__header__topBar__button__exit">
                            Выход
                        </div>
                    </Link>
                </div>
            </header>
            <div className="personalAccount__img"></div>
            <main className="personalAccount__main">
                <div className="personalAccount__main__userInfo">
                    <div className="personalAccount__main__userInfo__avatar">
                        <div className="personalAccount__main__userInfo__avatar__img"></div>
                        <div className="personalAccount__main__userInfo__avatar__name">
                            Vlad
                        </div>
                    </div>
                    <div className="personalAccount__main__userInfo__data">
                        <div className="personalAccount__main__userInfo__data__copy">
                            Скопировать
                        </div>
                        <div className="personalAccount__main__userInfo__data__editProfileAndSetting">
                            <div className="personalAccount__main__userInfo__data__editProfileAndSetting__img">
                                2
                            </div>
                            <Link to={'/change'}>
                                <div className="personalAccount__main__userInfo__data__editProfileAndSetting__text">
                                    Изменить
                                </div>
                            </Link>
                        </div>
                        <div className="personalAccount__main__userInfo__data__editProfileAndSetting">
                            <div className="personalAccount__main__userInfo__data__editProfileAndSetting__img">
                                3
                            </div>
                            <Link to={'/settingAccount'}>
                                <div className="personalAccount__main__userInfo__data__editProfileAndSetting__text">
                                    Настройки
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="personalAccount__main__scrollBar">
                    <div className="personalAccount__main__scrollBar__textBlock">
                        <div
                            className="personalAccount__main__scrollBar__textBlock__text"
                            onClick={() => onClick2()}
                        >
                            Пройденные
                        </div>
                        <div
                            className="personalAccount__main__scrollBar__textBlock__text"
                            onClick={() => onClick()}
                        >
                            Любимые
                        </div>
                        <div
                            className="personalAccount__main__scrollBar__textBlock__text"
                            onClick={() => onClick()}
                        >
                            Просмотренные
                        </div>
                    </div>
                    <div className="personalAccount__main__scrollBar__positioningTest">
                        <div className="personalAccount__main__scrollBar__positioningTest__img">
                            4
                        </div>
                        <div className="personalAccount__main__scrollBar__positioningTest__img">
                            5
                        </div>
                    </div>
                </div>
                <div className="personalAccount__main__test" id="test">
                    {users.length &&
                        users.map((user) => {
                            return (
                                <>
                                    <div
                                        className="personalAccount__main__test__info"
                                        key={user.id}
                                    >
                                        <div>
                                            <img
                                                className="personalAccount__main__test__info__avatar"
                                                key={user.avatar}
                                                src={user.avatar}
                                            />
                                        </div>
                                        {user.first_name}
                                    </div>
                                </>
                            );
                        })}
                </div>
            </main>
            <footer className="personalAccount__footer">
                <div className="personalAccount__footer__textBlock">
                    <Link to={'/aboutUs'}>
                        <div className="personalAccount__footer__textBlock__text">
                            О нас
                        </div>
                    </Link>
                    <Link to={'/aboutProject'}>
                        <div className="personalAccount__footer__textBlock__text">
                            О проекте
                        </div>
                    </Link>
                    <Link to={'/sponsor'}>
                        <div className="personalAccount__footer__textBlock__text">
                            Спонсоры
                        </div>
                    </Link>
                </div>
                <div className="personalAccount__footer__img">6</div>
            </footer>
        </div>
    );
}
