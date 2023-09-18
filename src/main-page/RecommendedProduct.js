import Slider from "react-slick";
import img1 from "./src-img/item-1.png"
import img2 from "./src-img/rec-item-1.png"
import img3 from "./src-img/rec-item-2.png"
import img4 from "./src-img/rec-item-3.png"

function RecommendedProduct() {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 7000
    };

    const imgList = [img1, img2, img3, img4]

    const listSliderItem = () => {
        let content = [];
        for (let i = 0; i < 8; ++i) {
            content.push(
                <div className="slider__item" key={i}>
                    <div className="slider__item-view">
                        {i % 4 == 0 &&
                            <div className="slider__item-label">
                                sell
                            </div>
                        }
                        <div className="slider__item-img">
                            <img src={imgList[i % 4]} alt="" />
                        </div>
                    </div>
                    <div className="slider__item-text">
                        <div className="slider__item-column">
                            <div className="slider__item-name">Slimming Gel Body</div>
                            <div className="slider__item-descripttion">
                                Гель для тела для похудения
                            </div>
                        </div>
                        <div className="slider__item-price">
                            2 480 руб
                        </div>
                    </div>
                </div >
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

export default RecommendedProduct;