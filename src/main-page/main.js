import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import NewProductItem from './NewProductItem';
import AuctionProduct from './AuctionProduct';
import RecommendedProduct from './RecommendedProduct';
import { Outlet } from "react-router-dom";

import img1 from "./src-img/Rectangle7.png";
import img2 from "./src-img/Rectangle5.png";
import img3 from "./src-img/Rectangle34.png";

function Main({ data }) {
    let l = window.location.href;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [l])

    return (
        <>
            
                <div className="content-info">
                    <div className="content-info__img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="content-info__text">
                        <p className="content-info__title">SKINDOM</p>
                        <p className="content-info__subtitle">Специальные цены только до 30 апреля</p>
                        <div className="content-info__catalog">Перейти в каталог</div>
                    </div>
                </div>
                <div className="content-expert">
                    <div className="content-expert__main">
                        <div className="content-expert__img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="content-expert__text">
                            <div className="content-expert__title">Ведущий эксперт на российском рынке профессиональной косметики
                                из Кореи—ККshop™</div>
                            <div className="content-expert__subtitle">Мы делаем мир профессиональной корейской косметики доступным
                                для каждого косметолога в России, предоставляя возможность работать с лучшими достижениями
                                корейских
                                учёных и специалистов в области сохранения здоровья и ухода за кожей</div>
                            <div className="content-expert__more">Подробнее</div>
                        </div>
                    </div>
                    <div className="content-expert__row-advantages">
                        <div className="content-expert__item">Безупречный состав<br /> и эффективность</div>
                        <div className="content-expert__item">Натуральность<br /> и экологичность</div>
                        <div className="content-expert__item">Наличный<br /> и безналичный расчет</div>
                        <div className="content-expert__item">Доставка<br /> по всей России</div>
                    </div>
                </div>
                <div className="new-product">
                    <h2 className="new-product__title">Новинки</h2>
                    <div className="new-product__slider">
                        <NewProductItem data={data} />
                    </div>
                </div>
                <div className="auction-product">
                    <h2 className="auction-product__title">Аукционные товары</h2>
                    <div className="auction-product__slider">
                        <AuctionProduct />
                    </div>
                </div>
                <div className="recommended-product">
                    <h2 className="recommended-product__title">Рекомендуемые товары</h2>
                    <div className="recommended-product__slider">
                        <RecommendedProduct />
                    </div>
                </div>
                <div className="mailing-block">
                    <div className="mailing-block__img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="mailing-block__info-background">
                        <div className="mailing-block__info">
                            <h3 className="mailing-block__title">
                                Подпишитесь <br />
                                на рассылку
                            </h3>
                            <p className="mailing-block__subtitle">
                                Узнай первым о старте скидок и специальных предложений!
                            </p>
                            <input type="text" className="mailing-block__input" placeholder="Введите почту" />
                            <div className="mailing-block__button">Подписаться</div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Main;