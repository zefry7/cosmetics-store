import React, { useEffect } from "react";

const massItems = () => {
    const mass = [];
    for (let i = 0; i < 7; ++i) {
        mass.push(
            <div class="contacts__item" key={i}>
                <p class="contacts__text_gray">Магазин</p>
                <p class="contacts__text_bold">Город, улица, дом</p>
                <p class="contacts__text_ping">
                    Сайт
                    <br/>
                    Email@m.ru
                </p>
                <p class="contacts__text_normal">+7 490 000 00 00</p>
            </div>
        )
    }
    return mass
}


function Contacts() {
    let l = window.location.href;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"     
        })
    }, [l])

    return (
        <>
            <div class="contacts">
                <h1 class="contacts__title">Контакты</h1>
                <div class="contacts__block">
                    <div class="contacts__address-block">
                        {massItems()}
                    </div>
                    <div class="contacts__map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A54bb40f2df415a8b72d3eacddd3909b1686b326f4d1e141df2c4e35932e31080&amp;source=constructor"
                            width="1107" height="1080" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;