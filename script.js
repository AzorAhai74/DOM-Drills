window.addEventListener('DOMContentLoaded', function () {
    let headerContainer = document.createElement('div');
    let header = document.createElement('h1');
    let headerText = document.createTextNode('This is an h1');
    
    header.appendChild(headerText);
    headerContainer.appendChild(header);
    document.body.appendChild(headerContainer);
    });
    