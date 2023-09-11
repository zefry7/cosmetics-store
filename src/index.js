import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderMenu from './header/header-menu';
import Main from './main-page/main';
import Club from './club-page/Club';
import Blog from './blog-page/Blog';
import Delivery from './delivery-page/Delivery';
import Contacts from './contacts-page/Contacts';
import Wishes from './wishes-page/Wishes';
import Product from './product-page/Product';
import { dataProduct } from "./data/data"

import cover from "./cover-img.png"
import img1 from "./footer/img/mir.svg"

function App() {
  const productPages = function () {
    const mass = dataProduct.map((item) => {
      let str = item.id + "";
      return <Route path={str} element={<Product data={dataProduct} wishesList={wishesList} funBasket={addBasket} funWishes={addWishes} w={n} />} key={item.id} />;
    })
    return mass;
  }

  const basketList = [];
  const wishesList = []
  const n = useRef(0);


  function addBasket(idProduct) {
    let item = {};
    let bl = false;
    item.id = dataProduct[idProduct].id;
    item.name = dataProduct[idProduct].name;
    item.volume = dataProduct[idProduct].volume;
    item.type = dataProduct[idProduct].type;
    item.price = dataProduct[idProduct].price;
    item.count = 1;
    item.basketImg = dataProduct[idProduct].basketImg;
    item.priceOne = dataProduct[idProduct].price;
    for (let a of basketList) {
      if (a.name == dataProduct[idProduct].name) {
        bl = true;
        break;
      }
    }
    if (bl == false) {
      basketList.push(item)
      n.current++;
    }

    let el = document.getElementsByClassName("header-content__basket-label")[0];
    if (basketList.length > 0) {
      el.classList.add("header-content__count-basket");
      el.textContent = n.current;
    } else {
      el.classList.remove("header-content__count-basket");
      el.textContent = "";
    }
  }

  function addWishes(idProduct) {
    let item = {}
    let bl = false;
    item.id = dataProduct[idProduct].id;
    item.name = dataProduct[idProduct].name;
    item.type = dataProduct[idProduct].type;
    item.price = dataProduct[idProduct].price;
    item.basketImg = dataProduct[idProduct].basketImg;
    for (let a of wishesList) {
      if (a.name == dataProduct[idProduct].name) {
        bl = true;
        break;
      }
    }
    if (bl == false) {
      wishesList.push(item)
    }
  }

  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <header className='header-content'>
            <HeaderMenu fun={basketList} w={n} />
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
            <Routes>
              <Route path='cosmetics-store/'>
                <Route index element={<Main data={dataProduct} />} />
                <Route path='club' element={<Club />} />
                <Route path='blog' element={<Blog />} />
                <Route path='delivery' element={<Delivery />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='wishes' element={<Wishes list={wishesList} />} />
                <Route path="product/*" >
                  {productPages()}
                </Route>
              </Route>
            </Routes>
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
                <img src={img1} alt="" />
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
        </BrowserRouter>
      </React.StrictMode >
    </>
  );
}

const rootHeaderMenu = ReactDOM.createRoot(document.querySelector(".root"));
rootHeaderMenu.render(
  <App />
);





