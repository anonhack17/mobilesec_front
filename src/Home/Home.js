import React from 'react';
import { FaBug, FaShieldAlt, FaExclamationTriangle, FaInfoCircle, FaNewspaper } from 'react-icons/fa';
import './../App.css'

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>MobileSec: Защита ваших мобильных устройств и операционных систем</h1>
                <p>MobileSec - это ваше решение для защиты мобильных устройств от разнообразных угроз и уязвимостей.</p>
            </header>

            <section className="home-section about-section">
                <h2>О приложении MobileSec</h2>
                <p>MobileSec предлагает комплексную защиту для ваших мобильных устройств, обеспечивая мониторинг сетевой активности, сканирование на наличие угроз и уязвимостей, а также уведомления о подозрительных действиях.</p>
            </section>

            <section className="home-section threats-section">
                <h2>Типы угроз мобильных устройств</h2>
                <div className="threat">
                    <FaBug className="threat-icon" />
                    <h3>Malware</h3>
                    <p>Malware - это программное обеспечение, разработанное для нарушения работы устройств, кражи данных или получения несанкционированного доступа. Примеры включают вирусы, черви и троянские программы.</p>
                </div>
                <div className="threat">
                    <FaExclamationTriangle className="threat-icon" />
                    <h3>Phishing</h3>
                    <p>Phishing - это метод социальной инженерии, используемый для обмана пользователей с целью кражи их личной информации. Фишинговые атаки часто осуществляются через поддельные веб-сайты или сообщения.</p>
                </div>
                <div className="threat">
                    <FaShieldAlt className="threat-icon" />
                    <h3>Spyware</h3>
                    <p>Spyware - это программное обеспечение, которое собирает информацию о пользователе без его ведома, отслеживая его действия в интернете и захватывая конфиденциальные данные.</p>
                </div>
                <div className="threat">
                    <FaBug className="threat-icon" />
                    <h3>Adware</h3>
                    <p>Adware - это программное обеспечение, которое автоматически отображает или загружает рекламу на устройство пользователя, часто замедляя его работу и отслеживая активность пользователя.</p>
                </div>
                <div className="threat">
                    <FaExclamationTriangle className="threat-icon" />
                    <h3>Man-in-the-Middle (MitM)</h3>
                    <p>MitM атака - это когда злоумышленник перехватывает и изменяет коммуникации между двумя сторонами без их ведома, что может привести к краже данных или распространению вредоносного ПО.</p>
                </div>
            </section>

            <section className="home-section tips-section">
                <h2>Полезные советы</h2>
                <ul>
                    <li>Всегда обновляйте ваше программное обеспечение до последней версии.</li>
                    <li>Избегайте скачивания приложений из непроверенных источников.</li>
                    <li>Используйте надежные антивирусные приложения.</li>
                    <li>Будьте осторожны с подозрительными ссылками и сообщениями.</li>
                </ul>
            </section>

            <section className="home-section news-section">
                <h2>Последние новости</h2>
                <div className="news-item">
                    <FaNewspaper className="news-icon" />
                    <h3>Новая уязвимость в Android</h3>
                    <p>Обнаружена критическая уязвимость в последней версии Android, которая позволяет злоумышленникам получить полный контроль над устройством. Рекомендуется немедленно установить все доступные обновления.</p>
                </div>
                <div className="news-item">
                    <FaNewspaper className="news-icon" />
                    <h3>Всплеск фишинговых атак</h3>
                    <p>В последние месяцы наблюдается значительный рост числа фишинговых атак, направленных на пользователей мобильных устройств. Будьте внимательны и избегайте подозрительных ссылок.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
