"use strict";

// 1. document.write, работа c URL и строками
let documentWrite = document.write("this is my project"); // 1.1
let text = document.body.innerText;
document.write("<br/>");
document.writeln(text.split(" ").length, ' ', text.split(" ").join("").length); // 1.2
document.write("<br/>");


let link1 = document.location.href;
let linkInternet = "https://sun9-38.userapi.com/c628420/v628420888/4b5e1/1ZtbyxZFcYA.jpg";
let linkWithQueryParams = "https://isu.ifmo.ru/pls/apex/f?p=2143:1:106900700740867:"
let link1Info = getInfo(link1);
let linkInternetInfo = getInfo(linkInternet);

document.write(link1);
document.write("<br/>");
document.write(linkInternet);
document.write("<br/>");

document.write(link1Info.protocol, ' ', linkInternetInfo.protocol); // 1.5
document.write("<br/>");
document.write(link1Info.fileExtension, ' ', linkInternetInfo.fileExtension); // 1.5
document.write("<br/>");
console.log(getParams(linkWithQueryParams)); 





function getInfo(href) {
    let newHref = {
        protocol: href.substring(0, href.indexOf(':')),
        fileExtension: href.substring(href.lastIndexOf('.') + 1, href.length)
    };
    return newHref;
}

function getParams(href) {
    let queryParams = {};
    href.substring(href.indexOf('?') + 1, href.length).split('&')
    .forEach(param => {
        const paramKeyValue = param.split('=');
        queryParams[paramKeyValue[0]] = paramKeyValue[1];
    });
    return queryParams;

}
// Задание №2
let task2 = document.createElement("h1");
task2.innerText = "Задание 2";
document.body.append(task2);
let anchorHref = "https://www.fabrikant.ru/trades/atom/PriceMonitoring/?action=view&id=277413";



for (let i = 0; i < 4; i++) {
    let anchor = (document.createElement('a'));
    anchor.href = anchorHref.concat(`/${i}`);
    anchor.innerText = `Ссылка ${i+1}`;
    anchor.style.marginRight = '5px';
    document.body.append(anchor);
}

document.write('Количество анкоров: ',
    document.body.getElementsByTagName('a').length);
document.write('<br/>');
document.write('Количество ссылок:', document.getElementsByTagName('link').length);

document.write('<br/>');

for (let i = 0; i < 9; i++) {
    let img = (document.createElement('img'));
    img.id = `value ${i+1}`;
    img.src = "https://news.itmo.ru/images/news/big/p9214.jpg";
    img.style.height = 20 * (i+1)  + 'px';
    img.style.width =20*(i+1) +'px';
    img.alt = `Картинка ${i+1}`;
    img.style.marginRight = '5px';
    document.body.append(img);
    if (i==1) {

    }

}
document.write('Ширина первой картинки '.concat(document.body.getElementsByTagName('img').item(0).width));

let images = document.querySelectorAll('img');
let maxWidth = images[0].width;
images.forEach((img) => {
    if (img.width > maxWidth) {
        maxWidth = img.width;
    }
});

document.write('<br/>');
document.write("ширина самой широкой картинки равна ", maxWidth);

//высоту не выводит, ширина выводит. решение проблемы не нашел
let sumHeight =  0;
images.forEach((img) => {
    sumHeight = sumHeight + img.height ;
});

document.write('<br/>');
document.write("Сумма высот  = ", sumHeight);
document.write('<br/>');

let task3 = document.createElement("h2");
task3.innerText = "Задание 3";
document.body.append(task3);

// ФОрмы (3 задание)
let forms = [];
for (let i = 0; i < 10; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `formId${i+1}`;
    forms.push(form);
    document.body.append(form);
}





// вывод четных форм

for (let i = 0; i < forms.length; i++) {
	if (i % 2 == 1) {
		document.write(forms[i].name);
		document.write(', ');
	}
	if (i == forms.length) {
		break;
	}
	
}


// Добавить форму
let formsHTML = document.body.getElementsByTagName('form');
console.log(formsHTML);
for (let i = 0; i < formsHTML.length ; i++) {
	formsHTML[i].name="thisIsForm "+i;
    let inputCheck = document.createElement('input');
    let inputFile = document.createElement('input');
    let inputRadio = document.createElement('input');
    let inputRadio2 = document.createElement('input');
    inputCheck.type = "checkbox";
 	inputCheck.style.margin = "23px";
    inputFile.type = "file";
     inputFile.style.margin = "32px";
    inputRadio.type = "radio";
     inputRadio.style.margin = "25px";
    inputRadio2.type = "radio";
    inputRadio2.style.marginTop = "5px";


    formsHTML[i].append(inputFile);
    formsHTML[i].append(inputCheck);
    formsHTML[i].append(inputRadio);
    formsHTML[i].append(inputRadio2);
    

}

// добавить кнопку показатьимя формы
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Показать имя формы";
    button.style.margin = "5px";
    button.onclick = () => alert(formsHTML[i].name);
    formsHTML[i].append(button);
}

//создание кнопки принадлежность
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Принадлежность";
    button.style.margin = "5px";
    button.onclick = () => alert(button.parentNode.id);
    formsHTML[i].append(button);
}

// создание кнопки ресет
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'reset';
    button.innerText = "Сбросить";
    button.style.margin = "15px";
    formsHTML[i].append(button);
}

// показатьколичество полей
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Показать количество полей";
    button.style.margin = "5px";
    button.onclick = () => {
        alert(`Количество полей равно ${button.parentNode.childNodes.length}`);
    };
    formsHTML[i].append(button);
}

// иконки
document.body.querySelectorAll('button').forEach((button)=> {
    button.style.padding = '15px';
    button.style.borderRadius = '10px';
    button.style.border = '1px solid rgba(121, 121, 119, 4)';
    button.onmouseover = () => {
        button.style.backgroundColor = 'rgba(231, 0, 0, 4)';
        button.style.color = "white";
    };
    button.onmouseout = () => {
        button.style.color = 'green';
        button.style.backgroundColor = '#f0f0f0';
    };
    let image = document.createElement('img');
   image.style.width = '20px';
    image.style.height = '20px';
    image.style.verticalAlign = 'bottom';
    switch (button.innerText) {
        case "Показать имя формы": image.src = '1.png';
            break;
        case "Принадлежность":image.src = '2.png';
            break;
        case "Сбросить": image.src = '3.png';
            break;
        case "Показать количество полей": image.src = '4.png';
            break;
        
    }
    button.prepend(image);
});