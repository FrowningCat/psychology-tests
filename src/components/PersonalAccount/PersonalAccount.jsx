import './personalAccount.css';

export default function personalAccount() {
    return (
        <div className="personalAccount">
            <header className="personalAccount__header">
                <div className="personalAccount__header__logo">1</div>
                <div className="personalAccount__header__topBar">
                    <div className="personalAccount__header__topBar__button">
                        Главная
                    </div>
                    <div className="personalAccount__header__topBar__button">
                        Тесты
                    </div>
                    <div className="personalAccount__header__topBar__button">
                        Эксперты
                    </div>
                    <div className="personalAccount__header__topBar__button__exit">
                        Выход
                    </div>
                </div>
            </header>
            <main className="personalAccount__main">
                <div className="personalAccount__main__img"></div>
                <div className="personalAccount__main__userInfo">
                    <div className="personalAccount__main__userInfo__avatar">
                        <div className="personalAccount__main__userInfo__avatar__img"></div>
                        <div className="personalAccount__main__userInfo__avatar__name"></div>
                    </div>
                    <div className="personalAccount__main__userInfo__copy"></div>
                    <div className="personalAccount__main__userInfo__editProfileAndSetting">
                        <div className="personalAccount__main__userInfo__editProfileAndSetting__img"></div>
                        <div className="personalAccount__main__userInfo__editProfileAndSetting__text"></div>
                    </div>
                    <div className="personalAccount__main__userInfo__editProfileAndSetting">
                        <div className="personalAccount__main__userInfo__editProfileAndSetting__img"></div>
                        <div className="personalAccount__main__userInfo__editProfileAndSetting__text"></div>
                    </div>
                </div>
                <div className="personalAccount__main__scrollBar">
                    <div className="personalAccount__main__scrollBar__textBlock">
                        <div className="personalAccount__main__scrollBar__textBlock__text"></div>
                        <div className="personalAccount__main__scrollBar__textBlock__text"></div>
                        <div className="personalAccount__main__scrollBar__textBlock__text"></div>
                    </div>
                    <div className="personalAccount__main__scrollBar__positioningTest">
                        <div className="personalAccount__main__scrollBar__positioningTest__img"></div>
                        <div className="personalAccount__main__scrollBar__positioningTest__img"></div>
                    </div>
                </div>
                <div className="personalAccount__main__test"></div>
            </main>
            <footer className="personalAccount__footer">
                <div className="personalAccount__footer__textBlock">
                    <div className="personalAccount__footer__textBlock__text"></div>
                    <div className="personalAccount__footer__textBlock__text"></div>
                    <div className="personalAccount__footer__textBlock__text"></div>
                </div>
                <div className="personalAccount__footer__img"></div>
            </footer>
        </div>
    );
}
