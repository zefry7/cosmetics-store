import Slider from "react-slick";
import img1 from "./src-img/item-1.png"
import img2 from "./src-img/item-2.png"
import { Link } from "react-router-dom";

function NewProductItem({ data }) {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 7000
    };

    const listSliderItem = () => {
        let content = [];
        for (let i = 0; i < 8; ++i) {
            content.push(
                <Link to={i % 2 == 0 ? "product/" + data[0].id : "product/" + data[1].id}>
                    <div className="slider__item" key={i}>
                        <div className="slider__item-view">
                            {i % 2 == 0 &&
                                <div className="slider__item-label">
                                    sell
                                </div>
                            }
                            <div className="slider__item-img">
                                <img src={i % 2 == 0 ? img1 : img2} alt="" />
                            </div>
                        </div>
                        <div className="slider__item-text">
                            <div className="slider__item-column">
                                <div className="slider__item-name">{i % 2 == 0 ? data[0].name : data[1].name}</div>
                                <div className="slider__item-descripttion">
                                    {i % 2 == 0 ? data[0].type : data[1].type}
                                </div>
                            </div>
                            <div className="slider__item-price">
                                {i % 2 == 0 ? data[0].price : data[1].price} руб
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }
        return content;
    }


    return (
        <Slider {...settings} className="slider">
            {listSliderItem()}
        </Slider>
    );
}

export default NewProductItem;

