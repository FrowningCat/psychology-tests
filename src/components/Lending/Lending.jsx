import './lending.css';
import { Link } from 'react-router-dom';

export default function lending() {
    return (
        <div className="landing">
            <header className="landing__header">
                <div className="landing__header__block">
                    <div className="landing__header__imgFlag">
                        <div>1</div>
                        <div>2</div>
                    </div>
                    <div className="landing__header__tg">
                        <div>3</div>
                        <Link to={'https://t.me/Frowning_Cat'}>
                            <text className="landing__header__text link">
                                Чат поддержки
                            </text>
                        </Link>
                    </div>
                    <Link to={'/authorization'} className="landing__link_btn">
                        <div className="landing__header__enterText">
                            <text className="landing__header__text link">
                                Вход
                            </text>
                        </div>
                    </Link>
                </div>
                <Link to={'/authorization'} className="link_btn">
                    <div className="landing__header__button">
                        <text className="link">Подать заявление</text>
                    </div>
                </Link>
            </header>
        </div>
    );
}
