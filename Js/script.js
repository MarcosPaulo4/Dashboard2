const list = document.querySelectorAll('.navigation li');


function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) => 
    item.addEventListener('mouseover',activeLink)
);

//MenuToggler

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.onclick = function (){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
};

//Order Table

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td> ${order.productName}</td>
                        <td>${order.productPrice}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.Status === 'Delivered' ? 'Delivered' : order.
                        Status === 'Pending' ? 'Pending' : 'Declained'} ">${order.Status}</td>
                        `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})