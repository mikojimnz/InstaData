$('#process').on('click', function() {
    var list1 = $('#list1').val().trim().split('\n');
    var list2 = $('#list2').val().trim().split('\n');

    var newList1 = [];
    var newList2 = [];
    var matches = []


    for(var i = 0; i < list1.length; i++){
        list1[i].trim();
        
        if (i % 4 != 1) continue
        if (list1[i].length <= 0) continue;

        newList1.push(list1[i]);
    }

    for(var i = 0;i < list2.length; i++){
        list2[i].trim();
        
        if (i % 4 != 1) continue
        if (list2[i].length <= 0) continue;

        newList2.push(list2[i]);
    }

    $('#list1').val(newList1.join('\n'));
    $('#list2').val(newList2.join('\n'));

    newList1.forEach(e => {
        if (newList2.includes(e)) matches.push(e);
    });

    $('#matchCount').text(matches.length);

    matches.forEach(e => {
        $('#matchResults tbody').append(`<tr><td><a href="https://instagram.com/${e}" target="_blank">${e}</a></td></tr>`)
    });

    if (matches.length > 0 ) $(this).remove();
});