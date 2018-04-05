$('#toggle_message').click(function(){
    var value = $('#toggle_message').attr('value');
    $('#test').toggle(100);

    if(value=='Hide'){
        $('#toggle_message').attr('value', 'Show');
        console.log("now you dont")
    }else if(value == 'Show'){
        $('#toggle_message').attr('value', 'Hide');
    }
});