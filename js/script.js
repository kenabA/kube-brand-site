const accordion = document.getElementsByClassName("accordion--content");
const productCard = document.getElementsByClassName("product-card");
const product = document.getElementsByClassName("product");
const productTitle = document.querySelector(".product-view-title");
const productImg = document.querySelector(".product--view--img");
const viewMore = document.querySelector(".view-more");
const extraGalleryCard = document.getElementsByClassName("gallery--card-extra");

const initialProductView = () => {
  productImg.setAttribute(
    "src",
    productCard[0].querySelector(".product--img").getAttribute("src")
  );
  productTitle.textContent = productCard[0].querySelector(
    ".heading-quaternary"
  ).textContent;
};

const eventProductView = () => {
  for (i = 0; i < productCard.length; i++) {
    productCard[i].addEventListener("click", function () {
      const childTitle = this.querySelector(".heading-quaternary").textContent;
      const childImgSrc =
        this.querySelector(".product--img").getAttribute("src");
      productTitle.textContent = childTitle;
      productImg.setAttribute("src", childImgSrc);
    });
  }
};

const eventAccordion = () => {
  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
};

const fetchProductView = (i) => {
  productTitle.textContent = productCard[i - 1].querySelector(
    ".heading-quaternary"
  ).textContent;

  productImg.setAttribute(
    "src",
    productCard[i - 1].querySelector(".product--img").getAttribute("src")
  );
};

const linkProductView = () => {
  for (i = 0; i < product.length; i++) {
    product[i].addEventListener("click", function (event) {
      event.preventDefault();
      var value = event.target.getAttribute("data-value");
      fetchProductView(Number(value));
    });
  }
};

const loadMoreGallery = () => {
  for (let i = 0; i < extraGalleryCard.length; i++) {
    extraGalleryCard[i].classList.toggle("active");
  }

  const hasActiveClass = Array.from(extraGalleryCard).some((e) =>
    e.classList.contains("active")
  );

  hasActiveClass
    ? (viewMore.textContent = `View Less`)
    : (viewMore.textContent = `View More`);

  const arrowIcon = document.createElement("i");
  arrowIcon.classList.add("fa-solid", "ms-8");
  arrowIcon.classList.add(hasActiveClass ? "fa-arrow-up" : "fa-arrow-down");

  viewMore.appendChild(arrowIcon);
};

linkProductView();
eventProductView();
initialProductView();
eventAccordion();
