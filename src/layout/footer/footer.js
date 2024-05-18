import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div>
                <h2>О нашем приложении</h2>
                <p>MobileSec - это инновационное приложение для защиты и анализа угроз мобильных устройств и операционных систем. Мы предлагаем передовые технологии для обеспечения безопасности вашего мобильного опыта.</p>
                <h3>Возможности приложения:</h3>
                <ul style={ulStyle}>
                    <li>Мониторинг безопасности: отслеживайте угрозы и вредоносное ПО на вашем устройстве в реальном времени.</li>
                    <li>Анализ уязвимостей: идентифицируйте и анализируйте уязвимости в вашей системе, чтобы предотвратить атаки.</li>
                    <li>Безопасное соединение: защитите свои данные с помощью шифрования и безопасных соединений.</li>
                    <li>Резервное копирование и восстановление: создавайте резервные копии ваших данных и восстанавливайте их в случае необходимости.</li>
                    <li>Родительский контроль: контролируйте доступ к содержимому для детей и подростков, обеспечивая их безопасность в сети.</li>
                </ul>
            </div>
        </footer>
    );
};

const footerStyle = {
    background: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
};

const ulStyle = {
    listStyle: 'none',
};

export default Footer;