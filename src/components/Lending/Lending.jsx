import './lending.css';
import { Link } from 'react-router-dom';
import { information } from './data/infoBlock';
import { submissionOfBocumentsStage } from './data/submissionOfBocumentsStage';
import { details } from './data/details';
import ru from '../../assets/Lending/RU.png';
import chevronDownGray from '../../assets/Lending/chevron.down.gray.png';
import arrow from '../../assets/Lending/arrow.png';
import telegram from '../../assets/Lending/telegram.png';
import clipboard from '../../assets/Lending/clipboard.png';
import bg from '../../assets/Lending/bg.png';
import city from '../../assets/Lending/city.png';
import iPhone from '../../assets/Lending/iPhone.png';
import chevron from '../../assets/Lending/chevron.png';
import vectorTg from '../../assets/Lending/vectorTg.png';

export default function lending() {
    function InfoBlock({ title, text }) {
        return (
            <div className="landing__main__info__infoBlock__infoDiv">
                <div className="landing__main__info__infoBlock__infoDiv__Clipboard">
                    <img src={clipboard} alt="clipboard png"></img>
                </div>
                <div className="landing__main__info__infoBlock__infoDiv__infoBlockTitle">
                    {title}
                </div>
                <div className="landing__main__info__infoBlock__infoDiv__infoBlockText">
                    {text}
                </div>
            </div>
        );
    }

    function SubmissionOfBocumentsStage({ number, title, text }) {
        return (
            <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage">
                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageNumber">
                    {number}
                </div>
                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv">
                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageTitle">
                        {title}
                    </div>
                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageText">
                        {text}
                    </div>
                </div>
            </div>
        );
    }

    function Details({ title, text, selectedText }) {
        return (
            <details>
                <summary>
                    {title}{' '}
                    <img
                        src={chevron}
                        alt="chevron png"
                        className="chevron link"
                    ></img>
                </summary>
                <div>
                    {text} <br />
                    <text className="additionalColor">{selectedText}</text>
                </div>
            </details>
        );
    }

    return (
        <div className="landing">
            <header className="landing__header">
                <div className="landing__header__block">
                    <div className="landing__header__block__imgFlag">
                        <img src={ru} alt="ru img"></img>
                        <img
                            src={chevronDownGray}
                            alt="chevronDownGray img"
                            className="link"
                        ></img>
                    </div>
                    <div className="landing__header__block__tg">
                        <img src={telegram} alt="telegram"></img>
                        <Link to={'https://t.me/Frowning_Cat'}>
                            <text className="landing__header__block__text link">
                                Чат поддержки
                            </text>
                        </Link>
                    </div>
                    <Link to={'/authorization'} className="landing__link_btn">
                        <div className="landing__heade__blockr__enterText">
                            <text className="landing__header__block__text link">
                                Вход
                            </text>
                        </div>
                    </Link>
                    <Link to={'/personalAccount'} className="link_btn">
                        <div className="landing__header__block__button link">
                            <text className="link">Личный кабинет</text>
                        </div>
                    </Link>
                </div>
            </header>
            <main className="landing__main">
                <div className="landing__main__topDiv">
                    <div className="landing__main__topDiv__topBlok">
                        <div className="landing__main__topDiv__topBlok__topBlokTitle">
                            Lorem <text className="additionalColor">Lorem</text>{' '}
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="landing__main__topDiv__topBlok__topBlokText">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Obcaecati eum laudantium beatae incidunt
                            tempore consectetur, rerum neque voluptatem
                            reiciendis ea.
                            <br />
                            <text className="additionalColor additionalWeight">
                                Lorem, ipsum dolor.
                            </text>
                        </div>
                    </div>
                    <Link to={'/authorization'} className="link">
                        <div className="landing__main__topDiv__topBlok__topButton link">
                            <text className="link">Lorem, ipsum.</text>
                            <img
                                src={arrow}
                                alt="arrow png"
                                className="link"
                            ></img>
                        </div>
                    </Link>
                </div>
                <img src={bg} alt="bg png" className="landing__main__bg"></img>
                <div className="landing__main__info">
                    <div className="landing__main__info__infoTitle">
                        <text className="landing__main__info__infoTitle__title">
                            Lorem ipsum dolor sit amet.
                        </text>
                        <text className="landing__main__info__infoTitle__infoText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eaque, enim!
                        </text>
                    </div>
                    <div className="landing__main__info__infoBlock">
                        {information.map((way) => (
                            <InfoBlock key={way.title} {...way} />
                        ))}
                    </div>
                </div>
                <img
                    src={city}
                    alt="city png"
                    className="landing__main__city"
                ></img>
                <div className="landing__main__foooter">
                    <div className="landing__main__foooter__submissionOfBocuments">
                        <div className="landing__main__foooter__submissionOfBocuments__title">
                            Lorem, ipsum.
                        </div>
                        <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages">
                            {submissionOfBocumentsStage.map((way) => (
                                <SubmissionOfBocumentsStage
                                    key={way.number}
                                    {...way}
                                />
                            ))}
                        </div>
                    </div>
                    <img
                        src={iPhone}
                        alt="iPhone png"
                        className="landing__main__foooter__iPhone"
                    ></img>
                    <div className="landing__main__foooter__faq">
                        <div className="landing__main__foooter__faq__title">
                            Lorem
                        </div>
                        <div className="landing__main__foooter__faq__faqDetails">
                            {details.map((way) => (
                                <Details key={way.title} {...way} />
                            ))}
                        </div>
                    </div>
                    <div className="landing__main__foooter__questions">
                        <div className="landing__main__foooter__questions__title">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="landing__main__foooter__questions__questionsMain">
                            <div className="landing__main__foooter__questions__questionsMain__questionsText">
                                Lorem ipsum dolor sit amet.
                            </div>
                            <Link to={'https://t.me/Frowning_Cat'}>
                                <div className="landing__main__foooter__questions__questionsMain__questionsButton link">
                                    <img
                                        src={vectorTg}
                                        alt="vectorTg png"
                                        className="link"
                                    ></img>
                                    <text className="landing__main__foooter__questions__questionsMain__questionsButton__questionsButtonText link">
                                        Lorem ipsum.
                                    </text>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="landing__footer">
                <div className="landing__footer__divText1">
                    <Link to={'https://t.me/Frowning_Cat'}>
                        <div className="landing__footer__divText1__telegram link">
                            <img src={telegram} alt="telegram"></img>
                            <div className="link">Чат поддержки</div>
                        </div>
                    </Link>
                    <text>©2024. Все права защищены</text>
                    <Link to={'https://t.me/Frowning_Cat'}>
                        <div className="link landing__footer__selectedText">
                            Условия использования сервиса
                        </div>
                    </Link>
                    <Link to={'https://t.me/Frowning_Cat'}>
                        <div className="link landing__footer__selectedText">
                            Политика конфиденциальности
                        </div>
                    </Link>
                </div>
                <div className="landing__footer__divText2">
                    <div>
                        Сайт не является публичной офертой согласно положениям
                        статьи 437 ГК РФ. ИП ..ОГРНИП 317505300078169
                    </div>
                </div>
            </footer>
        </div>
    );
}
