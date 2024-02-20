import { Link } from 'react-router-dom';

import './authorization.css';

import eye from '../../assets/Authorization/eye.png';
import bg_site from '../../assets/Authorization/bg_site.png';

export default function Authorization() {
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
                        <div className="authorization__main__div__input__inputText">
                            <input placeholder="Эл. почта / Телефон "></input>
                        </div>
                        <div className="authorization__main__div__input__inputText">
                            <input placeholder="Пароль"></input>
                            <img
                                src={eye}
                                alt="eye"
                                className="authorization__main__div__input__inputText__eye link"
                            />
                        </div>
                        <Link to={'/'}>
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
