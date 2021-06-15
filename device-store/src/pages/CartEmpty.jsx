import React from 'react';
import cartEmpty from '../assets/img/empty-cart.png';

function CartEmpty() {
    return (
        <div className="cart cart--empty">
        <h2>Корзина пустая <i>😕</i></h2>
        <p>
          Вероятней всего, вы ещё не заказывали товары.<br />
          Для того, чтобы заказать товары, перейди на главную страницу.
        </p>
        <img src={cartEmpty} alt="Empty cart" />
        <a href="/" className="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div>
    )
}

export default CartEmpty;
