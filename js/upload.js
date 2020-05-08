/*global $, FileReader*/

function drawTable(connections) {
    'use strict';

    function sanatizeData(res, FB, CF) {
        var data = [],
            res2 = [],
            extra = [],
            key;

        if (FB !== undefined) {
            for (key in FB) {
                res2.push(key);
            }
        }

        if (CF !== undefined) {
            for (key in CF) {
                extra.push(key);
            }
        }

        for (key in res) {
            if (FB !== undefined && CF !== undefined) {
                data.push({
                    key: key,
                    value: res[key].substr(0, 19).replace("T", " "),
                    FB: ($.inArray(key, res2) + 1) ? "Yes" : "No",
                    extra: ($.inArray(key, extra) + 1) ? "Yes" : "No"
                });
            } else if (CF !== undefined) {
                data.push({
                    key: key,
                    value: res[key].substr(0, 19).replace("T", " "),
                    extra: ($.inArray(key, extra) + 1) ? "Yes" : "No"
                });
            } else {
                data.push({
                    key: key,
                    value: res[key].substr(0, 19).replace("T", " ")
                });
            }
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
        }, {
            field: 'extra',
            title: 'Close Friend',
            sortable: true,
            visible: false
        }, {
            field: 'FB',
            title: 'Follow Back',
            sortable: true,
            visible: false
        }],
        data: sanatizeData(connections.followers, connections.following, connections.close_friends),
        pagination: true,
        search: true,
        sortName: 'key'
    });
    $('#tableConnectionsFollowing').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }, {
            field: 'extra',
            title: 'Close Friend',
            sortable: true,
            visible: false
        }, {
            field: 'FB',
            title: 'Follow Back',
            sortable: true,
            visible: false
        }],
        data: sanatizeData(connections.following, connections.followers, connections.close_friends),
        pagination: true,
        search: true,
        sortName: 'key'
    });
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
        search: true,
        sortName: 'key'
    });
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
        search: true,
        sortName: 'key'
    });
    $('#tableRequestIn').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }],
        data: sanatizeData(connections.follow_requests_received),
        pagination: true,
        search: true,
        sortName: 'key'
    });
    $('#tableRequestOut').bootstrapTable({
        columns: [{
            field: 'key',
            title: 'Username',
            sortable: true
        }, {
            field: 'value',
            title: 'Date',
            sortable: true
        }],
        data: sanatizeData(connections.follow_requests_sent),
        pagination: true,
        search: true,
        sortName: 'key'
    });
    
    $('#followerCount').text($('#tableConnectionsFollowers').bootstrapTable('getOptions').totalRows);
    $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
        FB: 'Yes'
    });
    $('#f4f').text($('#tableConnectionsFollowers').bootstrapTable('getOptions').totalRows);
    $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
    
    $('#followingCount').text($('#tableConnectionsFollowing').bootstrapTable('getOptions').totalRows);
    $('#blockedCount').text($('#tableConnectionsBlocked').bootstrapTable('getOptions').totalRows);
    $('#restrictedCount').text($('#tableConnectionsRestricted').bootstrapTable('getOptions').totalRows);
    $('#requestInCount').text($('#tableRequestIn').bootstrapTable('getOptions').totalRows);
    $('#requestOutCount').text($('#tableRequestOut').bootstrapTable('getOptions').totalRows);
}

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

    $("table").on('click-row.bs.table', function (field, value) {
        window.open('https://instagram.com/' + value.key, '_blank');
    });
});
