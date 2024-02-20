import { Link } from 'react-router-dom';

import './authorization.css';

import eye from '../../assets/Authorization/eye.png';
import bg_site from '../../assets/Authorization/bg_site.png';

export default function Authorization() {
    return (
        <>
            <header className="header"></header>
            <div className="authorization">
                <div>
                    <img src={bg_site} alt="bg_site" className="bg_site" />
                </div>
                <div className="authorization__div">
                    <div className="authorization__text">
                        <div className="authorization__textTitle">Вход</div>
                        <div className="authorization__textLink">
                            Если вы не зарегистрированы, вы можете
                            <Link
                                to={'/authorization/registration'}
                                className="authorization__textHref"
                            >
                                Зарегестрироваться
                            </Link>
                        </div>
                    </div>
                    <div className="authorization__input">
                        <input
                            className="authorization__inputText"
                            placeholder="Эл. почта / Телефон "
                        ></input>
                        <input
                            className="authorization__inputText input_img"
                            placeholder="Пароль"
                        ></input>
                        <img src={eye} alt="eye" className="eye link" />
                        <Link to={'/'}>
                            <button className="authorization__button">
                                Войти
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
