import Slider from "react-slick";
import img1 from "./src-img/auction-item.png"

function AuctionProduct() {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true
    };

    const t = () => {
        let content = [];
        for (let i = 0; i < 5; ++i) {
            content.push(
                <div className="slider__item" key={i}>
                    <div className="slider__item-view">
                        <div className="slider__item-img">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="slider__item-text">
                        <div className="slider__item-column">
                            <div className="slider__item-name">
                                R&B Black Food 3.7
                            </div>
                            <div className="slider__item-descripttion">
                                Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return content;
    }

    return (
        <Slider {...settings} className="slider">
            {t()}
        </Slider>
    );
}

export default AuctionProduct;
