$(':button').click(()=>{
    alert('hello');
})

$(':submit').click(()=>{
    //'this' is not working for some reason....
    $(this).attr('value','Please Wait...')
    console.log($(':submit').val())
})