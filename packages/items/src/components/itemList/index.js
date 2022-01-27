import React from "react";
import Slider from "react-slick";
import * as S from "./styles";
import Item from "../item";
import data from '../../fixtures/items';
import AsyncLoader from "../asyncLoader";

const Wrapper = React.lazy(() => import('shared/Wrapper'));
const Section = React.lazy(() => import('shared/Section'));

const ItemList = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <AsyncLoader>
      <Wrapper>
        {data?.map(({ displayName: category, items, id }) => (
          <Section key={id}>
            <S.ItemList>
              <S.Wrapper>
                {items && (
                  <S.Category>
                    {category}
                  </S.Category>
                )}
                <Slider {...settings}>
                  {items?.map(({ id, displayName, images, price }) => (
                    <Item
                      key={id}
                      id={id}
                      title={displayName}
                      imageUrl={images[0]}
                      price={price.max}
                    />
                  ))}
                </Slider>
              </S.Wrapper>
            </S.ItemList>
          </Section>
        ))}
      </Wrapper>
    </AsyncLoader>
  )
};

export default ItemList;