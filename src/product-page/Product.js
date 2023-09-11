import React, { useEffect} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Product({ data, wishesList, funBasket, funWishes, w }) {
    const params = useParams();
    let idProduct =  params.id;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    let [hhh, setHhh] = useState("product__like")

    useEffect(() => {
        for (let x of wishesList) {
            if (x.id == idProduct) {
                setHhh("product__like-active")
            }
        }
    }, []);

    let wishesActive = () => {
        if (hhh == "product__like") {
            funWishes(idProduct)
            setHhh("product__like-active")
        } else {
            for (let x of wishesList) {
                if (x.id == idProduct) {
                    wishesList.splice(wishesList.indexOf(x), 1);
                }
            }
            setHhh("product__like")
        }
    }

    return (
        <>
            <div class="product">
                <div class="product__main">
                    <div class="product__img">
                        <img src={data[idProduct].img} alt="" />
                    </div>
                    <div class="product__info">
                        <p class="product__label">{data[idProduct].type}</p>
                        <h4 class="product__name">{data[idProduct].name}</h4>
                        <p class="product__article">Артикул: {data[idProduct].article}</p>
                        <p class="product__volume">{data[idProduct].volume}</p>
                        <p class="product__price">Цена: {data[idProduct].price} руб</p>
                        <div class="product__buttons">
                            <div class="product__add-basket" onClick={() => { funBasket(idProduct); }}>Добавить в корзину</div>
                            <div class={hhh} onClick={() => { funWishes(idProduct); wishesActive(); }}></div>
                        </div>
                        <p class="product__availability">Наличие в магазинах</p>
                    </div>
                </div>
                <div class="product__plus-row">
                    <div class="product__plus-item">Бесплатная<br /> доставка от 1000 руб</div>
                    <div class="product__plus-item">Доставка по всей<br /> территории РФ</div>
                    <div class="product__plus-item">Гарантия качества<br /> продукции </div>
                </div>
                <div class="description">
                    <p class="description__title">Описание</p>
                    <p class="description__name">{data[idProduct].name}</p>
                    <p class="description__article">Артикул: {data[idProduct].article}</p>
                    <p class="description__description-product">{data[idProduct].description}</p>
                    <p class="description__characteristic-title">Подробные характеристики</p>
                    <div class="description__characteristic">
                        <div class="description__item">
                            <p class="description__name-characteristic">Вид ухода</p>
                            <p class="description__text">{data[idProduct].typeCare}</p>
                        </div>
                        <div class="description__item">
                            <p class="description__name-characteristic">Эффект</p>
                            <p class="description__text">{data[idProduct].effect}</p>
                        </div>
                        <div class="description__item">
                            <p class="description__name-characteristic">Вес</p>
                            <p class="description__text">{data[idProduct].weight}</p>
                        </div>
                        <div class="description__item">
                            <p class="description__name-characteristic">Объем</p>
                            <p class="description__text">{data[idProduct].volume}</p>
                        </div>
                        <div class="description__item">
                            <p class="description__name-characteristic">Страна производитель</p>
                            <p class="description__text">{data[idProduct].country}</p>
                        </div>
                        <div class="description__item">
                            <p class="description__name-characteristic">Тип волос</p>
                            <p class="description__text">{data[idProduct].typeHair}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product