import React, { useEffect, useRef, useState } from "react";
import { InputMask } from 'primereact/inputmask';
import { Link, Outlet, Route, Routes } from "react-router-dom";
import img1 from "./img/Union.png";
import img2 from "./img/shape.png";
import img3 from "./img/Union1.png";
import img4 from "./img/Vector.png";
import cover from "./img/cover-img.png";
import img5 from "./img/mir.svg"

const massListSubtype = [
    { i1: "Кремовые маски", i2: "Тканевые маски", i3: "Гидрогелевые маски", i4: "Альгинатные маски", i5: "Гипсовые маски" },
    { i1: "Тканевые маски", i2: "Гипсовые маски", i3: "Альгинатные маски", i4: "Гидрогелевые маски", i5: "Кремовые маски" }]

function HeaderMenu({ fun, w }) {
    let [catalog, setCatalog] = useState(0);
    let [type, setType] = useState(0);
    let [city, setCity] = useState("Москва");
    let [cityBlock, setCityBlock] = useState(0);
    let [tel, setTel] = useState(0);
    let [valueTel, setValueTel] = useState(0);
    let [basketBlock, setBasketBlock] = useState(false);
    let [ppp, setPpp] = useState(0);
    let basketCount = useRef(0);

    const clickCatalog = () => { catalog == 0 ? setCatalog(1) : setCatalog(0); }
    const moveItemType = (index) => { setType(index); }
    const visitbility = () => { cityBlock == 0 ? setCityBlock(1) : setCityBlock(0) }
    const clickBasket = () => { basketBlock == false ? setBasketBlock(true) : setBasketBlock(false) }
    const telBlock = () => { tel == 0 ? setTel(1) : setTel(0); }

    const fr = useRef(true)
    useEffect(() => {
        if (fr.current) {
            fr.current = false;
            return;
        }
        let list = document.querySelectorAll(".city-change__item");
        list.forEach((value) => {
            if (value.childNodes[1].textContent == city) {
                value.childNodes[0].checked = true;
            }
            value.childNodes[0].addEventListener("click", () => {
                setCity(value.childNodes[1].textContent);
                visitbility();
            })
        })
    }, [cityBlock])

    function plus(e) {
        const el = document.querySelectorAll(".basket__count-product");
        for (let x of el) {
            if (x.getAttribute("data") == e.target.getAttribute("data")) {
                fun[x.getAttribute("data")].count++;
                basketCount.current++;
                x.textContent = fun[x.getAttribute("data")].count;
                sumOneProduct(e.target.getAttribute("data"), x.textContent)
            }
        }
    }

    function minus(e) {
        const el = document.querySelectorAll(".basket__count-product");
        for (let x of el) {
            if (x.getAttribute("data") == e.target.getAttribute("data") && x.textContent > 1) {
                fun[x.getAttribute("data")].count--;
                basketCount.current--;
                x.textContent = fun[x.getAttribute("data")].count;
                sumOneProduct(e.target.getAttribute("data"), x.textContent)
            }
        }
    }

    function sumOneProduct(data, count) {
        const el = document.querySelectorAll(".basket__price");
        for (let x of el) {
            if (x.getAttribute("data") == data) {
                x.textContent = x.getAttribute("price").split(" ")[0] * count + " руб";
                fun[data].price = x.textContent;
            }
        }
    }

    const [countTotal, setCountTotal] = useState(0);
    const [yyy, setYyy] = useState(w.current);
    function ttt() {
        let a = 0;
        fun.forEach((value) => {
            a += value.count
        })
        setCountTotal(a);
        w.current = a;
    }

    const [totalSum, setTotalSum] = useState(0);
    function changeTotalSum() {
        let a = 0;
        fun.forEach((value) => {
            a += parseInt(value.price)
        })
        setTotalSum(a);
    }


    function deleteItem(e) {
        for (let x of fun) {
            if (x.id == e.target.getAttribute("dataid")) {
                fun.splice(fun.indexOf(x), 1);
                setPpp(fun.length)
            }
        }
        changeTotalSum();
        ttt()

        let el = document.getElementsByClassName("header-content__basket-label")[0];
        if (fun.length > 0) {
            el.classList.add("header-content__count-basket");
            el.textContent = w.current;
        } else {
            el.classList.remove("header-content__count-basket");
            el.textContent = "";
        }
    }

    function correctInfo() {
        setPpp(fun.length)
    }

    const bsList = fun.map((value, index) => {
        return (
            <div className="basket__item" dataid={value.id} data={index} key={index}>
                <div class="basket__img">
                    <img src={value.basketImg} alt="" />
                </div>
                <div class="basket__info">
                    <div class="basket__top-row">
                        <p class="basket__description">{value.type}</p>
                        <div class="basket__count">
                            <div class="basket__minus" data={index} onClick={(e) => { minus(e); ttt(); changeTotalSum() }}>-</div>
                            <p className="basket__count-product" data={index}>{value.count}</p>
                            <div class="basket__plus" data={index} onClick={(e) => { plus(e); ttt(); changeTotalSum() }}>+</div>
                            <div class="basket__delete" dataid={value.id} onClick={(e) => deleteItem(e)}>
                                <span dataid={value.id} ></span>
                                <span dataid={value.id} ></span>
                            </div>
                        </div>
                    </div>
                    <p class="basket__name">{value.name}</p>
                    <div class="basket__bottom-row">
                        <p class="basket__volume">{value.volume}</p>
                        <p class="basket__price" price={value.priceOne} data={index}>{value.priceOne * value.count + " руб"}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <header className='header-content'>
                <div class="line-one">
                    <p class="line-one__city" onClick={() => { visitbility(); }}>{city}</p>
                    <p class="line-one__phone">8 490 000 00 00</p>
                    {cityBlock == 1 &&
                        <>
                            <div class="city-change">
                                <h5 class="city-change__title">Ваш город</h5>
                                <p class="city-change__subtitle">
                                    Вы можете выбрать <span>более 150 000</span> населённых пунктов по всей
                                    Российской Федерации.
                                </p>
                                <ul class="city-change__list">
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Москва</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Екатеринбург</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Санкт-Петербург</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Новосибирск</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Казань</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Самара</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Ростов-на-Дону</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Челябинск</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Хабаровск</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Саратов</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Нижний Новгород</span>
                                    </li>
                                    <li class="city-change__item">
                                        <input type="radio" name="city" class="city-change__input-radio" />
                                        <span>Волгоград</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="catalog__bg-black" onClick={() => { visitbility() }}></div>
                        </>
                    }
                </div>
                <div class="line-two">
                    <Link to="/cosmetics-store/"> <div className="line-two__logo"></div></Link>
                    <div className="line-two__menu">
                        <p className="header-content__item" onClick={clickCatalog}>Каталог</p>
                        <p className="header-content__item" onClick={() => { setCatalog(0) }}>
                            <Link to="club">Клуб косметологов</Link>
                        </p>
                        <p className="header-content__item" onClick={() => { setCatalog(0) }}>
                            <Link to="delivery">Доставка и оплата</Link>
                        </p>
                        <p className="header-content__item" onClick={() => { setCatalog(0) }}>
                            <Link to="contacts">Контакты</Link>
                        </p>
                        <p className="header-content__item" onClick={() => { setCatalog(0) }}>
                            <Link to="blog">Блог</Link>
                        </p>

                    </div>
                    <div className="line-two__line-picture">
                        <div class="line-two__wrapper-picture">
                            <img className="header-content__picture" src={img1} alt="" />
                        </div>
                        <div class="line-two__wrapper-picture">
                            <Link to="/wishes"><img className="header-content__picture" src={img2} alt="" /></Link>
                        </div>
                        <div class="line-two__wrapper-picture">
                            <img className="header-content__picture" src={img3} alt="" onClick={() => { clickBasket(); ttt(); changeTotalSum(); correctInfo() }} />
                            <div class="header-content__basket-label">{countTotal}</div>
                        </div>
                        <div class="line-two__wrapper-picture">
                            <img className="header-content__picture" src={img4} alt="" onClick={() => { telBlock(); setValueTel(0); }} />
                            {tel == 1 &&
                                <>
                                    <div class="login">
                                        <h5 class="login__title">Войти или зарегистрироваться</h5>
                                        <p class="login__subtitle">Мы отправим на номер SMS-сообщение с кодом<br /> подтверждения.</p>
                                        <InputMask class="login__tel" value={valueTel} onChange={(e) => setValueTel(e.target.value)} mask="+ 7 (999) 999-99-99" placeholder="+ 7 (___) ___-__-__" />
                                        <div class="login__button" onClick={() => { telBlock() }}>Получить код</div>
                                    </div>
                                    <div class="catalog__bg-black" onClick={() => { telBlock() }}></div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                {catalog == 1 &&
                    <div class="catalog">
                        <div class="catalog__block">
                            <ul class="catalog__list-type">
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(0)}>Все товары</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(1)}>Очищение</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(0)}>Пилинги и скрабы</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(1)}>Тоники</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(0)}>Кремы</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(1)}>Концентраты</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(0)}>Уход за волосами</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(1)}>Эмульсии и гели</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(0)}>Маски для лица</li>
                                <li class="catalog__item-type" onMouseEnter={() => moveItemType(1)}>Уход за телом</li>
                            </ul>
                            <ul class="catalog__list-subtype">
                                <li class="catalog__item-subtype">{massListSubtype[type].i1}</li>
                                <li class="catalog__item-subtype">{massListSubtype[type].i2}</li>
                                <li class="catalog__item-subtype">{massListSubtype[type].i3}</li>
                                <li class="catalog__item-subtype">{massListSubtype[type].i4}</li>
                                <li class="catalog__item-subtype">{massListSubtype[type].i5}</li>
                            </ul>
                        </div>
                        <div class="catalog__bg-black" onClick={clickCatalog}></div>
                    </div>
                }
                {basketBlock == true &&
                    <>
                        <div class="basket">
                            {ppp > 0 ? (
                                <>
                                    <div class="basket__title"><span>Корзина</span> / {countTotal} шт.</div>
                                    <div class="basket__list">
                                        {bsList}
                                    </div>
                                    <p class="basket__sum">К оплате<br /> <span>{totalSum}</span> руб</p>
                                    <div class="basket__button-buy">Оформить заказ</div>
                                </>
                            ) : (
                                <>
                                    <div class="basket__title"><span>Корзина</span></div>
                                    <p class="basket__empty">В вашей корзине нет товара</p>
                                </>
                            )}
                        </div>
                        <div class="catalog__bg-black" onClick={clickBasket}></div>
                    </>
                }
            </header>
            <div class="cover-img">
                <div class="cover-img__name">
                    KK <br />
                    Shop
                </div>
                <div class="cover-img__img">
                    <img src={cover} alt="" />
                </div>
            </div>
            <main class="main-content">
                <Outlet />
            </main>
            <footer>
                <div class="footer-top">
                    <div class="footer-top__column">
                        <div class="footer-top__img-logo">
                            <img src="./img/image1.png" alt="" />
                        </div>
                        <p class="footer-top__text-contact">
                            8 490 000 00 00 <br />
                            Sale@kkshop.ru
                        </p>
                        <p class="footer-top__text-address">
                            Москва, ул. Шаболовка, д. 34, стр. 7
                        </p>
                    </div>
                    <div class="footer-top__column">
                        <h4 class="footer-top__title">Каталог</h4>
                        <ul class="footer-top__list">
                            <li class="footer-top__item">Очищение</li>
                            <li class="footer-top__item">Пилинги и скрабы</li>
                            <li class="footer-top__item">Тоники</li>
                            <li class="footer-top__item">Кремы</li>
                            <li class="footer-top__item">Концентраты</li>
                            <li class="footer-top__item">Концентраты с ферментами</li>
                            <li class="footer-top__item">Сыворотки</li>
                            <li class="footer-top__item">Эссенции</li>
                            <li class="footer-top__item">Эмульсии и гели</li>
                            <li class="footer-top__item">Маски для лица</li>
                            <li class="footer-top__item">Жемчужная линия</li>
                            <li class="footer-top__item">Уход за телом</li>
                            <li class="footer-top__item">Уход за волосами</li>
                            <li class="footer-top__item">Наборы и аксессуары</li>
                        </ul>
                    </div>
                    <div class="footer-top__column">
                        <h4 class="footer-top__title">Информация</h4>
                        <ul class="footer-top__list">
                            <li class="footer-top__item">
                                <Link to="/club">Клуб косметологов</Link>
                            </li>
                            <li class="footer-top__item">
                                <Link to="/delivery">Доставка и оплата</Link>
                            </li>
                            <li class="footer-top__item">
                                <Link to="/contacts">Контакты</Link>
                            </li>
                            <li class="footer-top__item">
                                <Link to="/blog">Блог</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-top__column">
                        <h4 class="footer-top__title">Мы в социальных сетях</h4>
                        <div class="footer-top__messages">
                            <img src="./img/social.svg" alt="" />
                        </div>
                    </div>
                    <div class="footer-top__pay">
                        <img src={img5} alt="" />
                        <img src="./img/googlePay.svg" alt="" />
                        <img src="./img/visa.svg" alt="" />
                        <img src="./img/webmoney.svg" alt="" />
                        <img src="./img/yandex.svg" alt="" />
                        <img src="./img/master card.svg" alt="" />
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom__firma-info">
                        <p class="footer-bottom__firma-name">ООО «Название»</p>
                        <p class="footer-bottom__firma-ogrn">ОГРН <span>111111111111</span></p>
                        <div class="footer-bottom__firma-c">KK Shop © Москва 2021 Все права защищены.</div>
                    </div>
                    <p class="footer-bottom__private">
                        Все торговые марки принадлежат их владельцам. Копирование составляющих частей сайта в какой бы то ни
                        было форме без разрешения владельца авторских прав запрещено.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default HeaderMenu;