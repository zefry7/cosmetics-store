import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
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
import "./css/style.css"

function App() {
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
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/cosmetics-store/*' element={<HeaderMenu fun={basketList} w={n} />}>
            <Route index element={<Main data={dataProduct} />} />
            <Route path="club" element={<Club />} />
            <Route path='blog' element={<Blog />} />
            <Route path='delivery' element={<Delivery />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='wishes' element={<Wishes list={wishesList} />} />
            <Route path="product/:id" element={<Product data={dataProduct} wishesList={wishesList} funBasket={addBasket} funWishes={addWishes} w={n} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode >
  );
}

const rootHeaderMenu = ReactDOM.createRoot(document.querySelector(".root"));
rootHeaderMenu.render(
  <App />
);





