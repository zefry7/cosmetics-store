import React, { useEffect } from "react";
import img1 from "./img/blog-1.png"
import img2 from "./img/blog-2.png"
import img3 from "./img/blog-3.png"
import img4 from "./img/blog-4.png"
import img5 from "./img/blog-5.png"
import img6 from "./img/blog-6.png"
import img7 from "./img/blog-7.png"
import img8 from "./img/blog-8.png"
import img9 from "./img/blog-9.png"

const massImg = [
    img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9];
const massDate = [
    { day: "25", month: "сентебря" },
    { day: "01", month: "сентебря" },
    { day: "12", month: "сентебря" },
    { day: "15", month: "сентебря" }, 
    { day: "31", month: "января" }, 
    { day: "17", month: "апрель" }, 
    { day: "25", month: "августа" }, 
    { day: "04", month: "июня" },
    { day: "10", month: "марта" }];

const items = () => {
    let mass = [];
    for (let i = 0; i < 9; ++i) {
        mass.push(
            <div className="blog__article" key={i}>
                <div className="blog__img">
                    <img src={massImg[i]} alt="" />
                </div>
                <p className="blog__name">Эксперт назвал способный удивить любую женщину цветок</p>
                <p className="blog__description">Протея — это тот цветок, который может вызвать умиление, восторг и восхищение у любой женщины. Такую точку зрения выразили эксперты, опрошенны..</p>
                <div className="blog__date">
                    <span>{massDate[i].day}</span><br />{massDate[i].month}
                </div>
            </div>
        )
    }
    return mass;
}

function Blog() {
    let l = window.location.href;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"     
        })
    }, [l])

    return (
        <>
            <div className="blog">
                <h1 className="blog__title">Блог</h1>
                <div className="blog__articles-block">
                    {items()}
                </div>
            </div>
        </>
    );
}

export default Blog;