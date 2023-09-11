import React, { useEffect } from "react";
import img1 from "./img/Rectangle 90.png"
import { Outlet } from "react-router-dom";

function Club() {
    let l = window.location.href;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"     
        })
    }, [l])

    return (
        <>
            <div className="club-content">
                <div className="block-img">
                    <img src={img1} alt="" class="block-img__img" />
                    <div className="block-img__block">
                        <p className="block-img__text">Тоник для лица освежающий охлаждающий</p>
                        <p className="block-img__name">Skindom</p>
                        <div className="block-img__button">Перейти в каталог</div>
                    </div>
                </div>
                <div className="block-info">
                    <h1 className="block-info__title">Клуб косметологов</h1>
                    <h3 className="block-info__subtitle">Как вступить вклубкосметологов?</h3>
                    <p className="block-info__text">Вступить в клуб косметологов могут только специалисты индустрии красоты.
                        Участникам<br/> клуба доступны специальные цены и профобъёмы на продукцию. Вступление в клуб остается<br/> на
                        усмотрение администрации.</p>
                    <h3 className="block-info__subtitle">Для регистрации косметологов необходимо</h3>
                    <div className="block-info__registration">
                        <div className="block-info__column-reg">
                            <h6 className="block-info__subtitle">Московская область и др</h6>
                            <p className="block-info__text block-info__text_color_gray">
                                Приехать к нам в офис по адресу: г. Москва, ул. Шаболовка, д. 34, стр. 7 
                                <br />
                                Предъявить документ о профессиональном образовании и паспорт</p>
                        </div>
                        <div className="block-info__column-reg">
                            <h6 className="block-info__subtitle">Регионам</h6>
                            <p className="block-info__text block-info__text_color_gray">
                                Прислать сканы документа о профессиональном образовании и паспорт на электронную почту 
                                <span> aaaaa@kkshop.ru</span>
                            </p>
                        </div>
                    </div>
                    <h3 className="block-info__subtitle">
                        Для вступления в клуб косметологов после<br/> предоставления документов вам необходимо
                    </h3>
                    <p className="block-info__text block-info__text_color_gray">
                        Пройти регистрацию на нашем сайте.
                        <br />
                        После регистрации Вам будет дана возможность совершать покупки в нашем<br/> интернет-магазине по специальным
                        ценам с выбором профобъёмов на продукцию.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Club;
