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
                <Link to={'/personalAccount'} className="link_btn">
                    <div className="landing__header__button">
                        <text className="link">Тесты</text>
                    </div>
                </Link>
            </header>
            <main className="landing__main">
                <div className="landing__main__topDiv">
                    <div className="landing__main__topBlok">
                        <div className="landing__main__topBlokTitle">
                            Lorem <text className="additionalColor">Lorem</text>{' '}
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="main__topBlokText">
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
                        <div className="landing__main__topButton link">
                            <text>Lorem, ipsum.</text>
                            <div>5</div>
                        </div>
                    </Link>
                </div>
                <div className="landing__main__bg">6</div>
                <div className="landing__main__info">
                    <div className="landing__main__infoTitle">
                        <text className="landing__main__title">
                            Lorem ipsum dolor sit amet.
                        </text>
                        <text className="landing__main__infoText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eaque, enim!
                        </text>
                    </div>
                    <div className="landing__main__infoBlock">
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>6</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>7</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>8</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>9</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                Lorem
                            </div>
                            <div className="landing__main__infoBlockText">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing__main__city">10</div>
                <div className="landing__main__foooter">
                    <div className="landing__main__submissionOfBocuments">
                        <div className="landing__main__title">
                            Lorem, ipsum.
                        </div>
                        <div className="landing__main__submissionOfBocumentsStages">
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    1
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Lorem ipsum dolor sit.
                                    </div>
                                    <div className="landing__main__stageText">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Omnis ex sunt impedit
                                        quasi labore quaerat quibusdam ipsa
                                        similique dolorum odit.
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    2
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Lorem, ipsum.
                                    </div>
                                    <div className="landing__main__stageText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quasi, exercitationem.
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    3
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Lorem, ipsum.
                                    </div>
                                    <div className="landing__main__stageText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aliquam, labore?{' '}
                                        <text className="landing__additionalColor additionalWeight">
                                            Lorem ipsum dolor sit amet.
                                        </text>{' '}
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    4
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Lorem, ipsum.
                                    </div>
                                    <div className="landing__main__stageText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magni, distinctio.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__main__iPhone">11</div>
                    <div className="landing__main__faq">
                        <div className="landing__main__title">Lorem</div>
                        <div className="landing__main__faqDetails">
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, earum. <br />В
                                    период наибольшей загруженности инстанции
                                    этот период может растягиваться по времени
                                    до 10-14 дней.
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsa, voluptates?{' '}
                                    <div className="chevron link">13</div>
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Vero nulla labore aliquid
                                    ratione vel ab odio tempora odit quae magni?
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">14</div>
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dolorem, atque.
                                    <div className="chevron link">15</div>
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Lorem ipsum dolor sit amet.{' '}
                                    <div className="chevron link">16</div>
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="landing__main__questions">
                        <div className="landing__main__title">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="landing__main__questionsMain">
                            <div className="landing__main__questionsText">
                                Lorem ipsum dolor sit amet.
                            </div>
                            <Link to={'https://t.me/Frowning_Cat'}>
                                <div className="landing__main__questionsButton link">
                                    <div>17</div>
                                    <text className="landing__main__questionsButtonText">
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
                        <text className="landing__footer__telegram">
                            <div>18</div>
                            Чат поддержки
                        </text>
                    </Link>
                    <text>©2024. Все права защищены</text>
                    <Link to={'https://t.me/Frowning_Cat'}>
                        <text>Условия использования сервиса</text>
                    </Link>
                    <Link to={'https://t.me/Frowning_Cat'}>
                        <text>Политика конфиденциальности</text>
                    </Link>
                </div>
                <div className="landing__footer__divText2">
                    <text>
                        Сайт не является публичной офертой согласно положениям
                        статьи 437 ГК РФ. ИП ..ОГРНИП 317505300078169
                    </text>
                </div>
            </footer>
        </div>
    );
}
