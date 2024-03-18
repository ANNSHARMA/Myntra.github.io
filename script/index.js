
let bagItem;
onload();


function onload(){
 let bagItemstr = localStorage.getItem('bagitems');
 bagItem = bagItemstr ? JSON.parse(bagItemstr) : [];
 DisplayItemsOnHomePage();
 displayBagIcon();
}

function addToBag(itemId){
 bagItem.push(itemId);
 localStorage.setItem('bagitems', JSON.stringify(bagItem));
 displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');

    if(bagItem.length > 0){
     bagItemCountElement.style.visibility = 'visible';   
     bagItemCountElement.innerText = bagItem.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
// let item = {
//     item_img : 'images/1.jpg', 
//     rating:{
//         stars : '4.1',
//         noOfreviews : '1400',
//     },
//     companyName : 'Carlton London',
//     item_name : 'Rhodius-Plated CZ Floral Studs',
//     current_price : 'Rs 645',
//     orignal_price : 'Rs 1045',
//     discount : '(42% OFF)'
// }

function DisplayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `<div class="item-container">
        <img src="${item.image}" class="item-img" alt="">
        <div class="rating">
            ${item.rating.stars} ⭐${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="orignal-price">${item.original_price}</span>
            <span class="discount">${item.discount_percentage}</span>
        </div>
        <button class="btn-Add-bag" onclick="addToBag(${item.id})">Add to cart</button>
        </div>`;
    })
    
    itemsContainerElement.innerHTML = innerHTML;   
}
