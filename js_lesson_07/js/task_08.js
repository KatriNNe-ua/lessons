"use strict";

//Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень 
//(шляхи до зображень передаються у функцію)

if (confirm("Почати тестування?")) {
  function showImg() {
let num = 1 + Math.floor(Math.random()*4)
    let res;
    switch (num) {
      case 1:
        res =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQns6cgr3DpfDmDhBGYSpRCb7lCawB02GVokm6fzlBPRw-6ReixbSQl3Dt6ISE8rVmw_DQ&usqp=CAU";
        break;
      case 2:
        res =
          "https://www.zastavki.com/pictures/600x382/2014Food___Drinks_____A_bag_of_coffee_beans_083775_33.jpg";
        break;
      case 3:
        res =
          "https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-8mc1-p-zastavki-na-rabochii-stol-kofe-3.jpg";
        break;
      case 4:
        res =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aIL8IVJPvQe-F83X1gh3dh2iXyu8ob7ULA&s";
        break;
    }
    return res;
}

document.write(`<img src="${showImg()}">`);

}



