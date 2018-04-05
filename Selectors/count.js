var count = $('*').length;

var pCount = $('#area').find('p').length

// alert(pCount);

// document.write(count, " elements on this page");

// document.write("<p>"+pCount, " paragraph elements inside area div on this page</p>");


var name = $('.name').val();

//alert comes up with whatever value is in the html class .name, also works with ids obvi
// alert(name);

document.write("<br>"+name);

$('#clickme').click(()=>{
    alert("Loser");
})

$('p:first').text("There isn't actually any text in this 'p' tag");
$('p:last').text("This should appear below the first 'p' tag");