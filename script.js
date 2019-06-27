window.addEventListener('DOMContentLoaded', function () { 
    //In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
    let div = document.createElement('div');
    div.className = 'Header-Container';
    let div1 = document.getElementsByClassName('Header-Container').length;
    div.class = div1

    //Create a h1 element, then create a text node with the text "This is an h1". 
    //Append the text to the h1 then append the h1 to the div, then append the div to the body
    let header = document.createElement('h1');
    header.className = 'h1';
    let header1 = document.getElementsByClassName('h1').length;
    header.class = header1;
    let headerText = document.createTextNode('This is h1');

    //With the h1 now appearing on the page, lets practice creating multiple elements and having them appear. 
    //Create a h2 element, give it the text "This is an h2" and append it to the same div the h1 one is.
    //Repeat the following task for h3's through h6's.
    //Give each heading element a class name that represents what type of heading element it is. 
    //If it is an h1, the class should be "h1".
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

    //Go to styles.css and style each different heading element with a different color. 
    //Target the elements by class name.
    //Create and array of 8 colors, add an event listener that changes the color of a 
    //heading to a random color from the array when it is double clicked.

    let colors = ['blue', 'red', 'green', 'yellow', 'orange', 'brown', 'purple', 'pink'];

    function randomColors() {
        let randomColor1 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor2 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor3 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor4 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor5 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor6 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor7 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor8 = colors[Math.floor(Math.random() * 7) + 1];

        let randomColors = '(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ',' + randomColor4 + ',' + randomColor5 + ',' + randomColor6 + ',' + randomColor7 + ',' + randomColor8 + ')';
        console.log(randomColors);
 
        return randomColors;        
    }

    header.addEventListener('dblclick', function() {
        header.style.color = randomColors();
    });
    headerTwo.addEventListener('dblclick', function() {
        headerTwo.style.color = randomColors();
    });
    headerThree.addEventListener('dblclick', function() {
        headerThree.style.color = randomColors();
    });
    headerFour.addEventListener('dblclick', function() {
        headerFour.style.color = randomColors();
    });
    headerFive.addEventListener('dblclick', function() {
        headerFive.style.color = randomColors();
    });
    headerSix.addEventListener('dblclick', function() {
        headerSix.style.color = randomColors();
    });

    //Add a button in the index.html, give this button text that says 
    //"Click to add new list item", give the button a class name of your choosing.
    let button = document.createElement('button');
    button.className = 'button1';
    let button1 = document.getElementsByClassName('button');
    button.class = button1;
    let buttonText = document.createTextNode('Click to add new list item');    
    button.appendChild(buttonText);
    document.body.appendChild(button);


    //In the scripts.js file, write a function that inserts a list item, 
    //have the first item say "This is list item 1" and any subsequent list 
    //item should have the number incremented by 1.
    //Create an event listener that calls the new list item function every time the button is clicked.
    let btn = document.getElementsByTagName('button')[0];

    let newList = 1;
    
    btn.addEventListener('click', function() {
        let list = document.createElement('li');
        let listText = document.createTextNode('This is list item' + ' ' + newList);
        list.appendChild(listText);
        document.body.appendChild(list);
        newList++;
        //Using the same random color function created above, 
        //apply an event listener that when a list item is clicked once, 
        //it changes the color of the font to one fo the 8 random colors.
        list.addEventListener('click', function() {
            let randomNum = Math.floor(Math.random() * colors.length);
            list.style.color = colors[randomNum];
        });
        //Create a function that if a list item is double clicked it removes the list item from the DOM
        list.addEventListener('dblclick', function() {
            this.remove();
        })
        
    });

  

    

    

    
    
    

    
    

    

        
});
   




    


    


    
