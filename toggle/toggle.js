$('#toggle_message').click(function(){
    var value = $('#toggle_message').attr('value');
    $('#message').toggle('fast');

    if(value=='Hide'){
        $('#toggle_message').attr('value', 'Show');
        console.log("now you dont")
    }else if(value == 'Show'){
        $('#toggle_message').attr('value', 'Hide');
        console.log("now you see me")
    }
});