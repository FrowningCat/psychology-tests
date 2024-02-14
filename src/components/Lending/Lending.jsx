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
            <main className="landing__main">
                <div className="landing__main__topDiv">
                    <div className="landing__main__topBlok">
                        <div className="landing__main__typeOfQuestionnaire">
                            <div className="landing__main__Clipboard">
                                <div>4</div>
                            </div>
                            <text> Анкета DS-160</text>
                        </div>
                        <div className="landing__main__topBlokTitle">
                            Получите{' '}
                            <text className="additionalColor">визу США</text> в
                            срок от 1 дня
                        </div>
                        <div className="main__topBlokText">
                            Разработанный ИИ-алгоритм ускорения записи и удобный
                            интерфейс для заполнения анкеты, оплата Госпошлины с
                            российской карты - подача документов на визу в США
                            <br />
                            <text className="additionalColor additionalWeight">
                                за считанные минуты.
                            </text>
                        </div>
                    </div>
                    <Link to={'/authorization'} className="link_btn">
                        <div className="landing__main__topButton link">
                            <text>Подать заявление</text>
                            <div>5</div>
                        </div>
                    </Link>
                </div>
                <div className="landing__main__bg">6</div>
                <div className="landing__main__info">
                    <div className="landing__main__infoTitle">
                        <text className="landing__main__title">
                            Подача документов на визу США
                        </text>
                        <text className="landing__main__infoText">
                            Разработанный ИИ-алгоритм ускорения записи и удобный
                            интерфейс для заполнения анкеты
                        </text>
                    </div>
                    <div className="landing__main__infoBlock">
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>6</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                EASY
                            </div>
                            <div className="landing__main__infoBlockText">
                                Простое заполнение формы DS-160 с подсказками
                            </div>
                        </div>
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>7</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                FAST
                            </div>
                            <div className="landing__main__infoBlockText">
                                Собеседование в обход долгой очереди
                            </div>
                        </div>
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>8</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                AI
                            </div>
                            <div className="landing__main__infoBlockText">
                                Разработанный ИИ-алгоритм для подачи документов
                            </div>
                        </div>
                        <div className="landing__main__infoDiv">
                            <div className="landing__main__Clipboard">
                                <div>9</div>
                            </div>
                            <div className="landing__main__infoBlockTitle">
                                FLEXIBLE
                            </div>
                            <div className="landing__main__infoBlockText">
                                Оплата Госпошлины США с российской карты
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing__main__city">10</div>
                <div className="landing__main__foooter">
                    <div className="landing__main__submissionOfBocuments">
                        <div className="landing__main__title">
                            Подача документов
                        </div>
                        <div className="landing__main__submissionOfBocumentsStages">
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    1
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Подаете документы на визу
                                    </div>
                                    <div className="landing__main__stageText">
                                        Заполняете анкету на нашем сайте.
                                        Необходимые документы: паспорт,
                                        загранпаспорт. Выбираете удобное
                                        консульство для собеседования
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    2
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Оплачиваете
                                    </div>
                                    <div className="landing__main__stageText">
                                        Оплатить услуги можно с любой российской
                                        карты (мир, виза, оплата через сайт)
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    3
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Ожидаете ответа
                                    </div>
                                    <div className="landing__main__stageText">
                                        Ожидание может занять от 10 дней. За
                                        дополнительную плату{' '}
                                        <text className="landing__additionalColor additionalWeight">
                                            можно ускорить продвижение в очереди
                                        </text>{' '}
                                        ($450, от 1 дня)
                                    </div>
                                </div>
                            </div>
                            <div className="landing__main__submissionOfBocumentsStage">
                                <div className="landing__main__stageNumber">
                                    4
                                </div>
                                <div className="landing__main__stageDiv">
                                    <div className="landing__main__stageTitle">
                                        Виза готова!
                                    </div>
                                    <div className="landing__main__stageText">
                                        Уведомление придет вам на почту, можете
                                        смело отправляться в путешествие!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__main__iPhone">11</div>
                    <div className="landing__main__faq">
                        <div className="landing__main__title">FAQ</div>
                        <div className="landing__main__faqDetails">
                            <details>
                                <summary>
                                    Сколько делают визу США?{' '}
                                    <div className="chevron link">12</div>
                                </summary>
                                <div>
                                    После приема документов на визу, консульство
                                    берет время на их обработку и проверку. Как
                                    правило, срок выдачи составляет около
                                    недели. <br />В период наибольшей
                                    загруженности инстанции этот период может
                                    растягиваться по времени до 10-14 дней.
                                    <br />
                                    Сотрудничая с нами можно ускорить процесс,
                                    доплатив за срочность. В этом случае{' '}
                                    <text className="additionalColor">
                                        есть шанс получить визу в течение 3 дней
                                        или при необходимости даже в течение 1
                                        дня.
                                    </text>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    На сколько дают визу США?{' '}
                                    <div className="chevron link">13</div>
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
                                    Что нужно для визы США?{' '}
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
                                    Размер консульского и сервисного сбора на
                                    визу США?
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
                                    Какие типы визы бывают?{' '}
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
                            Остались вопросы?
                        </div>
                        <div className="landing__main__questionsMain">
                            <div className="landing__main__questionsText">
                                Напишите нам в телеграм
                            </div>
                            <Link to={'https://t.me/Frowning_Cat'}>
                                <div className="landing__main__questionsButton link">
                                    <div>17</div>
                                    <text className="landing__main__questionsButtonText">
                                        Чат поддержки
                                    </text>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
