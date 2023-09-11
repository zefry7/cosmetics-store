import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wishes(props) {
    let l = window.location.href;
    let [countItems, setCountItems] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setCountItems(props.list.length)
    }, [l])



    const deleteItem = (e) => {
        for (let x of props.list) {
            if (x.id == e.target.getAttribute("data")) {
                props.list.splice(props.list.indexOf(x), 1);
                setCountItems(props.list.length)
            }
        }
    }

    const listUse = props.list.map((value, index) => {
        let conteiner = [];
        conteiner.push(
            <>
                <div class="wishes__item" key={index}>
                    <div class="wishes__img">
                        <img src={value.basketImg} alt="" />
                    </div>
                    <div class="wishes__info">
                        <p class="wishes__type">{value.type}</p>
                        <h4 class="wishes__name">{value.name}</h4>
                        <div class="wishes__row-bottom">
                            <div class="wishes__icons">
                                <div class="wishes__icon-wishes" data={value.id} onClick={(e) => deleteItem(e)}></div>
                                <Link to={"../product/" + value.id}>
                                    <div class="wishes__icon-shop"></div>
                                </Link>
                            </div>
                            <p class="wishes__price">{value.price} руб</p>
                        </div>
                    </div>
                </div>
            </>
        )
        return conteiner;
    })

    return (
        <>
            <div class="wishes">
                <h6 class="wishes__title">Мой лист пожеланий</h6>
                <div class="wishes__list">
                    {countItems == 0 ?
                        (<p class="wishes__empty-list">В лист пожеланий пуст</p>) :
                        (<>{listUse}</>)
                    }
                </div>
            </div>
        </>
    )
}

export default Wishes;