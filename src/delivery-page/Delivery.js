import React, { useEffect, useState } from "react";
import img1 from "./img/Rectangle108.png";

function Delivery() {
    const [rule, setRule] = useState(0);

    let l = window.location.href;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"     
        })
    }, [l])

    return (
        <>
            <div class="delivery">
                <h1 class="delivery__title">Доставка и Оплата</h1>
                <div class="row-plus">
                    <div class="row-plus__item">
                        <p class="row-plus__title">Пункты выдачи</p>
                        <p class="row-plus__description">Выбирайте наиболее удобный для вас пункт выдачи и дату получения заказа
                        </p>
                    </div>
                    <div class="row-plus__item">
                        <p class="row-plus__title">Экспресс-доставка</p>
                        <p class="row-plus__description">Получайте товар уже на следующий день (действует на товары с пометкой)
                        </p>
                    </div>
                    <div class="row-plus__item">
                        <p class="row-plus__title">Профессионально и безопасно</p>
                        <p class="row-plus__description">Мы серьёзно относимся к процессу доставки и доверяем её только
                            профессионалам своего дела.
                        </p>
                    </div>
                </div>
                <div class="delivery-block-price">
                    <div class="delivery-block-price__img">
                        <img src={img1} alt="" />
                    </div>
                    <div class="delivery-block-price__info">
                        <p class="delivery-block-price__title">Варианты доставки
                            в г. Санкт-Петербург
                        </p>
                        <p class="delivery-block-price__price">Доставка от 400 ₽<br />
                            <span>при заказе от 40 000 ₽ - Бесплатно</span>
                        </p>
                        <p class="delivery-block-price__pickup">
                            Самовывоз<br />
                            <span>12 магазинов</span>
                        </p>
                        <p class="delivery-block-price__product-price">Добавьте товары в корзину, и мы рассчитаем точные условия
                            доставки для вашего заказа
                        </p>
                        <div class="delivery-block-price__button-catalog">Перейти в каталог</div>
                    </div>
                </div>
                <div class="service-rules">
                    <h2 class="service-rules__title">Правила предоставления услуг</h2>
                    <div class="service-rules__buttons-row">
                        <div class="service-rules__wrapper">
                            <input type="radio" name="rules" class="service-rules__button" defaultChecked="true" onClick={() => {setRule(0)}}/>
                            <div>Доставка</div>
                        </div>
                        <div class="service-rules__wrapper">
                            <input type="radio" name="rules" class="service-rules__button" onChange={() => {setRule(1)}}/>
                            <div>Правила приема товара</div>
                        </div>
                    </div>
                    <div class="service-rules__wrapper-list">
                        {rule == 0 ? (
                            <ol class="service-rules__delivery-list">
                                <li class="service-rules__rule">
                                    <p class="service-rules__text-normal">Быстрая доставка из магазина <br />
                                        В городах присутствия супермаркетов «KK Shop» действует быстрая доставка из магазина день в
                                        день.Доступные способы оплаты: банковской картой, подарочной картой. Возможно применение
                                        бонусов.
                                        Применение подарочной карты и бонусов возможно только при онлайн-оплате.
                                        <br />Как оформить заказ с доставкой из магазина в вашем городе:
                                    </p>
                                    <p class="service-rules__text-gray">
                                        Выберите нужные средства на сайте.<br />
                                        Проверьте их наличие в магазине вашего города.<br />
                                        Оформите заказ на сайте, выбрав способ «быстрая доставка из магазина».<br />
                                        Вы получите SMS-сообщение, как только заказ будет собран и передан курьеру.<br />
                                        Ждите курьера с посылкой!
                                    </p>
                                    <p class="service-rules__text-normal">
                                        Быстрая доставка действует во всех городах присутствия. Обращаем внимание, в Екатеринбурге
                                        доставка из магазина действует только в Универмаге BOLSHOY; в Казани − только в супермаркете по
                                        адресу ул. Пушкина, 2; в Москве − только в ТЦ Афимолл Сити, ТЦ Кунцево Плаза, ТЦ Метрополис, ТЦ
                                        Саларис.<br />
                                        **Быстрая доставка из магазина в день заказа действует во всех городах присутствия, кроме
                                        Москвы.
                                    </p>
                                    <h5 class="service-rules__text-title">Интервалы доставки:</h5>
                                    <p class="service-rules__text-normal"> В Москве: заказы, оформленные до 21:00, доставляем на
                                        следующий день. Доступные интервалы доставки: 10:00 − 18:00, 10:00 − 14:00, 14:00 − 18:00, 18:00
                                        − 22:00. В Санкт-Петербурге: заказы, оформленные до 04:00, доставляем в этот же день. Доступные
                                        интервалы доставки: 10:00 − 18:00, 10:00 − 14:00, 14:00 − 18:00. Заказы, оформленные до 14:00,
                                        доставляем в этот же день в интервале 18:00 − 23:00. </p>
                                    <p class="service-rules__text-normal">В Екатеринбурге, Челябинске, Казани, Нижнем
                                        Новгороде, Волгограде, Новосибирске, Ростове-на-Дону, Самаре, Саратове и Хабаровске: заказы,
                                        оформленные до 18:00, доставляем в этот же день. Доступные интервалы доставки: 10:00 − 13:00,
                                        13:00 − 16:00, 16:00 − 19:00, 19:00 − 23:00.</p>
                                    <p class="service-rules__text-normal">
                                        Обращаем ваше внимание, при выборе способа доставки “быстрая доставка из магазина” в Москве
                                        доступна оплата на сайте при оформлении заказа или
                                        банковской картой при получении.
                                    </p>
                                </li>
                                <li class="service-rules__rule">
                                    <p class="service-rules__text-normal">
                                        Самовывоз из магазина.<br />
                                        Доступные способы оплаты: банковской картой, наличными, подарочными
                                        картами.
                                        <br />
                                        <br />
                                        Как оформить заказ с самовывозом из магазина:
                                    </p>
                                    <p class="service-rules__text-gray">
                                        Выберите нужные средства на сайте. Проверьте их наличие в магазине вашего города. При оформлении
                                        заказа выберите способ доставки «самовывоз из магазина». Как только заказ будет собран, вы
                                        получите SMS-сообщение. Заберите ваш заказ из магазина.
                                    </p>
                                    <h5 class="service-rules__text-normal"><span>Обращаем ваше внимание:</span>
                                        – Срок хранения заказа - 3 дня с момента сбора.<br />
                                        – Если товара из корзины не окажется в наличии, с вами свяжется оператор для уточнения деталей
                                        заказа.<br />
                                        *Самовывоз действует во всех городах присутствия. Обращаем внимание, в Москве самовывоз
                                        действует только в ТЦ Афимолл Сити, ТЦ Метрополис, ТЦ Кунцево Плаза, ТРЦ Саларис.</h5>
                                </li>
                                <li class="service-rules__rule">
                                    <p class="service-rules__text-normal">Курьерская доставка на выбранный адрес. Доставка
                                        осуществляется курьерскими компаниями.<br />
                                        Доступные способы оплаты: банковской картой, наличными, применение подарочной карты
                                        невозможно.<br />
                                        Обращаем ваше внимание, курьерская служба Золотого Яблока принимает только безналичный расчёт.
                                    </p>
                                </li>
                                <li class="service-rules__rule">
                                    <p class="service-rules__text-normal">Самовывоз из пунктов выдачи заказов курьерских служб. Перечень
                                        адресов выдачи доступен при выборе данного способа доставки.<br />
                                        Доступные способы оплаты: банковской картой при наличии технической возможности, наличными,
                                        применение бонусов невозможно. Подарочные карты к оплате не принимаются.</p>
                                </li>
                                <li class="service-rules__rule">
                                    <p class="service-rules__text-normal">Самовывоз из почтовых отделений Почты России, доставку
                                        осуществляет ФГУП «Почта России».<br />
                                        Доступные способы оплаты: банковской картой при наличии технической возможности, наличными,
                                        применение бонусов невозможно. Подарочные карты к оплате не принимаются.</p>
                                </li>
                            </ol>) : (
                            <p class="service-rules__reception">
                                <span>При получении заказа рекомендуем выполнить следующие действия:</span>
                                <br />
                                <br />
                                Проверить целостность внешней упаковки и коробки.
                                <br />
                                После вскрытия внешней упаковки проверить содержимое заказа на предмет соответствия заказу и отсутствие
                                дефектов.
                                <br />
                                Обращаем ваше внимание:
                                <br />
                                <br />
                                • Вскрытие упаковки возможно только у оплаченного заказа (при получении заказа без предоплаты необходимо
                                сначала произвести оплату);
                                <br />
                                <br />
                                • Нельзя вскрывать индивидуальную упаковку товара, если это нарушает товарный вид.
                                <br />
                                <br />
                                В случае несоответствия доставленного товара заказанному вами, нужно обратиться в Службу Поддержки
                                клиентов.
                                Возврат заказа возможен только через обращение в Службу Поддержки клиентов. Возврат заказа курьеру
                                невозможен.
                                Частичная оплата заказа невозможна.
                                <br />
                                <br />
                                <span>Получение не предоплаченных заказов</span>
                                <br />
                                <br />
                                Оплата курьеру при доставке возможна наличными или банковской картой (в зависимости от курьерской
                                службы; возможность оплаты банковской картой курьеру нужно уточнять с курьерской службой при
                                согласовании даты и времени доставки). Обращаем ваше внимание, курьерская служба «KK Shop» принимает
                                только безналичный расчёт.
                                <br />
                                <br />
                                Возможности оплаты в пункте самовывоза будут видны Вам после выбора конкретного пункта.
                                <br />
                                <br />
                                Оплата в почтовом отделении Почты России возможна только наличными.
                                <br />
                                <br />
                                Вместе с заказом курьер выдаст Вам кассовый чек и накладную, содержащую информацию с составом заказа.
                                <br />
                                <br />
                                <span>Получение предоплаченных заказов</span>
                                <br />
                                <br />
                                Доставка и вручение предоплаченных заказов осуществляется по адресу, указанному при оформлении заказа.
                                Выдача предоплаченных заказов производится при предъявлении документа, удостоверяющего личность
                                получателя.
                                <br />
                                <br />
                                <span>Eсли изменился получатель</span>
                                <br />
                                <br />
                                Если после оформления заказа изменился получатель заказа, то покупатель, который оформлял и оплачивал
                                заказ, должен выдать новому получателю доверенность на получение предоплаченного заказа. Доверенность
                                можно оформить в свободной форме.
                                <br />
                                <br />
                                <span>Если доставили другой заказ</span>
                                <br />
                                <br />
                                В этом случае Вам необходимо сразу же вернуть заказ курьеру, оформив накладную и указать причины
                                возврата заказа.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delivery;