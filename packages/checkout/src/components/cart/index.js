import React, { useState, useMemo } from "react";
import CloseIcon from "../../assets/close.svg";
import BagIcon from "../../assets/bag.svg";
import TrashIcon from "../../assets/trash.svg";
import { formatCurrency } from "shared/Utils";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM } from "shared/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useSelector(({ cart }) => cart);

  const memoizedNumberOfItems = useMemo(() => {
    return items?.reduce((prev, current) => prev + current.quantity, 0)
  }, [items])

  const memoizedTotal = useMemo(() => {
    return formatCurrency(
      items?.reduce(
        (prev, current) =>
          prev + current.price * current.quantity,
        0
      )
    )
  }, [items])

  const handleOpenCart = () => setIsOpen(true);

  const handleCloseCart = () => setIsOpen(false);

  const removeItem = (id) => dispatch(REMOVE_ITEM({ id }));

  return (
    <>
      <S.Bag onClick={handleOpenCart}>
        <img src={BagIcon} width={24} height={24} />
        <S.NumberOfItems>{memoizedNumberOfItems}</S.NumberOfItems>
      </S.Bag>

      {isOpen && (
        <S.Cart>
          <S.CartFade onClick={handleCloseCart} />
          <S.CartWrapper>
            <S.CartHeader>
              <h3>SACOLA</h3>
              
              <img
                src={CloseIcon}
                width={24}
                height={24}
                onClick={handleCloseCart}
              />
            </S.CartHeader>

            {items && items.length ? (
              <>
              <S.CartList>
                {items.map(({ id, title, price, imageUrl, quantity }) => (
                  <li key={id}>
                    <div>
                      <span>{quantity}x</span>
                      <img
                        src={imageUrl}
                        alt={title}
                        title={title}
                      />
                      <p>{title}</p>
                      <span>
                        {formatCurrency(price)}
                      </span>
                      <button onClick={() => removeItem(id)}>
                        <img src={TrashIcon} width={24} height={24} />
                      </button>
                    </div>
                  </li>
                ))}
              </S.CartList>

              <S.CartFooter>
                <S.CartTotals>
                  Total:{" "}
                  <strong>
                    {memoizedTotal}
                  </strong>
                </S.CartTotals>
              </S.CartFooter>
              </>
            ) : (
              <S.CartEmpty>
                <span>Ops! Você não tem itens na sua sacola</span>
              </S.CartEmpty>
            )}
          </S.CartWrapper>
        </S.Cart>
      )}
    </>
  );
};

export default Cart;