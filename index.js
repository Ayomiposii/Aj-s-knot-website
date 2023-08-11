function myFunction(x) {
    x.classlist.toggle("fa-solid fa-gem");
}
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