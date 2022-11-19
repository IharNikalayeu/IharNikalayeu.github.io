const getArrayWatch = async function () {
  const response = await import("..//js/data.js");
  return response.watch;
};

const deleteAllChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const createNewGoods = async function () {
  const parent = document.querySelector(".new-goods__grid");

  // удаление текущих блоков новых поступлений
  deleteAllChild(parent);

  const arrayWatch = await getArrayWatch();

  arrayWatch.map(({ name, img, price }) => {
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

    watchLink.appendChild(watchImg);

    // название часов
    const watchTitle = document.createElement("p");
    watchTitle.className = "collection-item__title";
    watchTitle.innerText = name;

    // цена часов
    const watchPrice = document.createElement("p");
    watchPrice.className = "collection-item__price";
    watchPrice.innerText = price;

    // добавление дочерних элементов
    watchCart.appendChild(watchLink);
    watchCart.appendChild(watchTitle);
    watchCart.appendChild(watchPrice);

    parent.appendChild(watchCart);
  });
};

createNewGoods();
