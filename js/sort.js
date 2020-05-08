/*global $*/

$(window).on('load', function () {
    'use strict';

    function clearFilters() {
        $("#followerFB").removeClass("btn-warning");
        $("#followerCF").removeClass("btn-success");
        $("#followingFB").removeClass("btn-warning");
        $("#followingCF").removeClass("btn-success");
    }

    function updateStats() {
        $('#followerCount').text($('#tableConnectionsFollowers').bootstrapTable('getOptions').totalRows);
        $('#followingCount').text($('#tableConnectionsFollowing').bootstrapTable('getOptions').totalRows);
    }

    $("#followFFollow").click(function () {
        if ($(this).hasClass("btn-info")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).removeClass("btn-info");
            clearFilters();
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                FB: 'Yes'
            });
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                FB: 'Yes'
            });
            $(this).addClass("btn-info");
            clearFilters();
        }

        updateStats();
    });

    $("#followerCF").click(function () {
        if ($(this).hasClass("btn-success")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $(this).removeClass("btn-success");
            $("#followerFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-info");
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                extra: 'Yes'
            });
            $(this).addClass("btn-success");
            $("#followerFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-info");
        }

        updateStats();
    });

    $("#followerFB").click(function () {
        if ($(this).hasClass("btn-warning")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $(this).removeClass("btn-warning");
            $("#followerCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-info");
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                FB: 'No'
            });
            $(this).addClass("btn-warning");
            $("#followerCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-info");
        }

        updateStats();
    });

    $("#followingCF").click(function () {
        if ($(this).hasClass("btn-success")) {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).removeClass("btn-success");
            $("#followingFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-info");
        } else {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                extra: 'Yes'
            });
            $(this).addClass("btn-success");
            $("#followingFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-info");
        }

        updateStats();
    });

    $("#followingFB").click(function () {
        if ($(this).hasClass("btn-warning")) {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).removeClass("btn-warning");
            $("#followingCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-info");
        } else {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                FB: 'No'
            });
            $(this).addClass("btn-warning");
            $("#followingCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-info");
        }

        updateStats();
    });
});
