import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "shared/Utils";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "shared/CartSlice";
import AsyncLoader from "../asyncLoader";

const BuyButton = React.lazy(() => import('shared/Button'));

const Item = ({ id, title, imageUrl, price }) => {
  const dispatch = useDispatch();

  const addItem = (item) => dispatch(ADD_ITEM({ item }));

  return (
    <AsyncLoader>
      <S.Item key={id}>
        <S.Image
            data-testid="image"
            src={imageUrl}
            alt={title}
            title={title}
        />
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Price>
            {formatCurrency(price)}
          </S.Price>
          <S.Actions>
            <BuyButton
              onClick={() => addItem({ id, title, imageUrl, price, quantity: 1 })}
            >
              Adicionar
            </BuyButton>
          </S.Actions>
        </S.Info>
      </S.Item>
    </AsyncLoader>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;