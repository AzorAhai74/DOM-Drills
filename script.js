window.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'Header-Container';
    let div1 = document.getElementsByClassName('Header-Container').length;
    div.class = div1
    let header = document.createElement('h1');
    header.className = 'h1';
    let header1 = document.getElementsByClassName('h1').length;
    header.class = header1;
    let headerText = document.createTextNode('This is h1');
    let headerTwo = document.createElement('h2');
    headerTwo.className = 'h2';
    let header2 = document.getElementsByClassName('h2').length;
    headerTwo.class = header2;
    let headerTextTwo = document.createTextNode('This is h2');
    let headerThree = document.createElement('h3');
    headerThree.className = 'h3';
    let header3 = document.getElementsByClassName('h3').length;
    headerThree.class = header3;
    let headerTextThree = document.createTextNode('This is h3');
    let headerFour = document.createElement('h4');
    headerFour.className = 'h4';
    let header4 = document.getElementsByClassName('h4').length;
    headerFour.class = header4;
    let headerTextFour = document.createTextNode('This is h4');
    let headerFive = document.createElement('h5');
    headerFive.className = 'h5';
    let header5 = document.getElementsByClassName('h5').length;
    headerFive.class = header5;
    let headerTextFive = document.createTextNode('This is h5');
    let headerSix = document.createElement('h6');
    headerSix.className = 'h6';
    let header6 = document.getElementsByClassName('h6').length;
    headerSix.class = header6;
    let headerTextSix = document.createTextNode('This is h6');
    
    header.appendChild(headerText);
    div.appendChild(header);
    headerTwo.appendChild(headerTextTwo);
    div.appendChild(headerTwo);
    headerThree.appendChild(headerTextThree);
    div.appendChild(headerThree);
    headerFour.appendChild(headerTextFour);
    div.appendChild(headerFour);
    headerFive.appendChild(headerTextFive);
    div.appendChild(headerFive);
    headerSix.appendChild(headerTextSix);
    div.appendChild(headerSix);
    document.body.appendChild(div);
    
    });
    