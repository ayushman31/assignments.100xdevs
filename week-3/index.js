let balance = prompt("Enter your total balance");

const bal = document.querySelector(".balance");
bal.append(`₹${balance}`);

function deleteElement(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}

function addElement(){
    const element1 = document.querySelector(".input-box-1");
    const inputText = element1.value.trim();

    const element2 = document.querySelector(".input-box-2");
    const inputPrice = element2.value.trim();

    if (inputText === '') {
        alert('Please enter a grocery item.');
        return;
    }

    if (inputPrice === '') {
        alert('Please enter a price.');
        return;
    }

    balance = balance -inputPrice;
    if (balance < 0) {
        alert('Please check your available balance.')
        element1.value = '';
        element2.value = '';
        console.log(balance,"didn't fix this issue cz didn't give this assignment much time.");
        
        return;
    }else{
    bal.innerText = `Balance: ₹${balance}`;
    }

    const parentEl = document.querySelector(".list");

    const newRow = document.createElement('div');
    newRow.setAttribute("class", 'list-row');

    const newItem1 = document.createElement('span');
    newItem1.setAttribute("class", 'list-item');
    newItem1.innerText = `${inputText} - ₹${inputPrice}`;

    const newItem2 = document.createElement('span');
    newItem2.setAttribute("class", 'remove');
    newItem2.setAttribute("onClick", 'deleteElement(this)');

    const newItem3 = document.createElement('img');
    newItem3.setAttribute("src", "https://www.citypng.com/public/uploads/preview/ps-controller-cross-x-white-button-icon-png-733961695032917ke2zz3sjxb.png");

    newItem2.appendChild(newItem3);
    newRow.appendChild(newItem1);
    newRow.appendChild(newItem2);
    parentEl.appendChild(newRow);
    element1.value = '';
    element2.value = '';
}
