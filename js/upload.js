/*eslint-env jquery*/

$(window).on('load', function () {
    'use strict';
    
    $('#uploadModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    $("#getStarted").click(function () {
        $('#uploadModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $("#uploadSubmit").click(function (event) {
        event.preventDefault();

        if ($('#fileUploadConnections').val().split('\\').pop() === "connections.json") {
            $('#fileUploadConnectionsWarning').text("");

            var fileReader = new FileReader();
            fileReader.onload = function () {
                var connections = JSON.parse(fileReader.result);
                drawTable(connections);
            };
            fileReader.readAsText($('#fileUploadConnections').prop('files')[0]);

            $('#uploadModal').modal('hide');
            $('#getStartedWrapper').remove();
            $('#contentBody').removeClass('d-none');
        } else {
            $('#fileUploadConnectionsWarning').text("Error: This file is not connections.json");
        }
    });
});

function drawTable(connections) {
    function sanatizeData(res) {
        var data = [];
        for (var key in res) {
            data.push({
                key: key,
                value: res[key]
            });
        }
        return data;
    }

    $('#tableConnectionsFollowers').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }],
        data: sanatizeData(connections.followers),
        pagination: true,
        search: true
    });
    $('#followerCount').text($('#tableConnectionsFollowers').bootstrapTable('getOptions').totalRows);
    
    $('#tableConnectionsFollowing').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }],
        data: sanatizeData(connections.following),
        pagination: true,
        search: true
    });
    $('#followingCount').text($('#tableConnectionsFollowing').bootstrapTable('getOptions').totalRows);
    
    $('#tableConnectionsBlocked').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }],
        data: sanatizeData(connections.blocked_users),
        pagination: true,
        search: true
    });
    $('#blockedCount').text($('#tableConnectionsBlocked').bootstrapTable('getOptions').totalRows);
    
    $('#tableConnectionsRestricted').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }],
        data: sanatizeData(connections.restricted_users),
        pagination: true,
        search: true
    });
    $('#restrictedCount').text($('#tableConnectionsRestricted').bootstrapTable('getOptions').totalRows);
}
