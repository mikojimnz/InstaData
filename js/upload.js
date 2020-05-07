/*eslint-env jquery*/

$(window).on('load', function () {
    'use strict';

    $('#uploadModal').modal('show');

    $("#upload-submit").click(function (event) {
        event.preventDefault();

        if ($('#fileUploadConnections').val().split('\\').pop() === "connections.json") {
            $('#fileUploadConnectionsWarning').text("");

            var fileReader = new FileReader();
            fileReader.onload = function () {
                var connections = JSON.parse(fileReader.result);
                console.log(connections);
            };
            fileReader.readAsText($('#fileUploadConnections').prop('files')[0]);

            $('#uploadModal').modal('hide');
        } else {
            $('#fileUploadConnectionsWarning').text("Error: This file is not connections.json");
        }
    });
});
