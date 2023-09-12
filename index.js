

let add_to_cart_btn = document.getElementsByClassName ('btn-primary')
let main_container = document.getElementsByTagName('tbody')[0]

for(let i = 0; i < add_to_cart_btn.length; i++){
    add_to_cart_btn[i].addEventListener('click', addToCart)
}

function addToCart(event){
    btn = event.target
    let btn_parent = btn.parentElement
    let btn_grandparent = btn.parentElement.parentElement
    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_parent.children[1].innerText
    let itemImage = btn_grandparent.children[0].src

    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = ` <td><input type="checkbox" class="uk-checkbox"></td>
            <td><img class="uk-perserve-width uk-border-circle" src="${itemImage}" width="40" alt=""></td>
            <td class="uk-table-link">
              <h3 class="item name">${itemName}</h3>
            </td>
            <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
            <td><input type="number" class="num" value="1"></td>
            <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
            <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>`;


    main_container.append(itemContainer)

    console.log(itemName)
}

//slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}