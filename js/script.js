import { watches } from "./data.js";

const createNewGoods = () => {
  const parent = document.querySelector(".new-goods__grid");

  const watchCart = watches.map(({ name, img, price }) => {
    const watchCart = document.createElement("div");
    watchCart.className =
      "collection-item display--flex flex-direction--column";

    const watchLink = document.createElement("a");
    watchLink.className =
      "collection-item__link display--flex transition transform-scale";

    // фото часов
    const watchImg = document.createElement("img");

    watchImg.setAttribute("src", img);
    watchImg.setAttribute("alt", "watch");

    watchLink.append(watchImg);

    // название часов
    const watchTitle = document.createElement("p");
    watchTitle.className = "collection-item__title";
    watchTitle.innerText = name;

    // цена часов
    const watchPrice = document.createElement("p");
    watchPrice.className = "collection-item__price";
    watchPrice.innerText = price;

    // добавление дочерних элементов
    watchCart.append(watchLink, watchTitle, watchPrice);

    return watchCart;
  });

  parent.append(...watchCart);
};

createNewGoods();
