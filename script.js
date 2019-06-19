window.addEventListener('DOMContentLoaded', function () {
    let headerContainer = document.createElement('div');
    let header = document.createElement('h1');
    let headerText = document.createTextNode('This is an h1');
    let headerTwo = document.createElement('h2');
    let headerTextTwo = document.createTextNode('This is h2');
    let headerThree = document.createElement('h3');
    let headerTextThree = document.createTextNode('This is h3');
    let headerFour = document.createElement('h4');
    let headerTextFour = document.createTextNode('This is h4');
    let headerFive = document.createElement('h5');
    let headerTextFive = document.createTextNode('This is h5');
    let headerSix = document.createElement('h6');
    let headerTextSix = document.createTextNode('This is h6');
    
    header.appendChild(headerText);
    headerContainer.appendChild(header);
    headerTwo.appendChild(headerTextTwo);
    headerContainer.appendChild(headerTwo);
    headerThree.appendChild(headerTextThree);
    headerContainer.appendChild(headerThree);
    headerFour.appendChild(headerTextFour);
    headerContainer.appendChild(headerFour);
    headerFive.appendChild(headerTextFive);
    headerContainer.appendChild(headerFive);
    headerSix.appendChild(headerTextSix);
    headerContainer.appendChild(headerSix);
    document.body.appendChild(headerContainer);
    });
    