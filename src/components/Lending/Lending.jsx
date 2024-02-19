import './lending.css';
import { Link } from 'react-router-dom';

export default function lending() {
    return (
        <div className="landing">
            <header className="landing__header">
                <div className="landing__header__block">
                    <div className="landing__header__block__imgFlag">
                        <div>1</div>
                        <div>2</div>
                    </div>
                    <div className="landing__header__block__tg">
                        <div>3</div>
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
                        <div className="landing__header__block__button">
                            <text className="link">Тесты</text>
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
                    <Link to={'/authorization'} className="link_btn">
                        <div className="landing__main__topDiv__topBlok__topButton link">
                            <text>Lorem, ipsum.</text>
                            <div>5</div>
                        </div>
                    </Link>
                </div>
                <div className="landing__main__bg">6</div>
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
                        <div className="landing__main__info__infoBlock__infoDiv">
                            <div className="landing__main__info__infoBlock__infoDiv__Clipboard">
                                <div>6</div>
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div className="landing__main__info__infoBlock__infoDiv">
                            <div className="landing__main__info__infoBlock__infoDiv__Clipboard">
                                <div>6</div>
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div className="landing__main__info__infoBlock__infoDiv">
                            <div className="landing__main__info__infoBlock__infoDiv__Clipboard">
                                <div>6</div>
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div className="landing__main__info__infoBlock__infoDiv">
                            <div className="landing__main__info__infoBlock__infoDiv__Clipboard">
                                <div>6</div>
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__info__infoBlock__infoDiv__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing__main__city">10</div>
                <div className="landing__main__foooter">
                    <div className="landing__main__foooter__submissionOfBocuments">
                        <div className="landing__main__foooter__submissionOfBocuments__title">
                            Lorem, ipsum.
                        </div>
                        <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages">
                            <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage">
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageNumber">
                                    1
                                </div>
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv">
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageTitle">
                                        Lorem ipsum dolor sit.
                                    </div>
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageText">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Omnis ex sunt impedit
                                        quasi labore quaerat quibusdam ipsa
                                        similique dolorum odit.
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage">
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageNumber">
                                    1
                                </div>
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv">
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageTitle">
                                        Lorem ipsum dolor sit.
                                    </div>
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageText">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Omnis ex sunt impedit
                                        quasi labore quaerat quibusdam ipsa
                                        similique dolorum odit.
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage">
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageNumber">
                                    1
                                </div>
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv">
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageTitle">
                                        Lorem ipsum dolor sit.
                                    </div>
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageText">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Omnis ex sunt impedit
                                        quasi labore quaerat quibusdam ipsa
                                        similique dolorum odit.
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage">
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageNumber">
                                    1
                                </div>
                                <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv">
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageTitle">
                                        Lorem ipsum dolor sit.
                                    </div>
                                    <div className="landing__main__foooter__submissionOfBocuments__submissionOfBocumentsStages__submissionOfBocumentsStage__stageDiv__stageText">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Omnis ex sunt impedit
                                        quasi labore quaerat quibusdam ipsa
                                        similique dolorum odit.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__main__foooter__iPhone">11</div>
                    <div className="landing__main__foooter__faq">
                        <div className="landing__main__foooter__faq__title">
                            Lorem
                        </div>
                        <div className="landing__main__foooter__faq__faqDetails">
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, earum. <br />В
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi, necessitatibus?
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, eveniet!{' '}
                                    <text className="additionalColor">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Laboriosam, similique!
                                    </text>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, earum. <br />В
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi, necessitatibus?
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, eveniet!{' '}
                                    <text className="additionalColor">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Laboriosam, similique!
                                    </text>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, earum. <br />В
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi, necessitatibus?
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, eveniet!{' '}
                                    <text className="additionalColor">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Laboriosam, similique!
                                    </text>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, earum. <br />В
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi, necessitatibus?
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, eveniet!{' '}
                                    <text className="additionalColor">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Laboriosam, similique!
                                    </text>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, earum. <br />В
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi, necessitatibus?
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, eveniet!{' '}
                                    <text className="additionalColor">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Laboriosam, similique!
                                    </text>
                                </div>
                            </details>
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
                                    <div className="link">17</div>
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
                            <div className="link">18</div>
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
