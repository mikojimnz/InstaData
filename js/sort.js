/*global $*/

$(window).on('load', function () {
    'use strict';

    function clearFilters() {
        $("#followerFB").removeClass("btn-warning");
        $("#followerCF").removeClass("btn-success");
        $("#followingFB").removeClass("btn-warning");
        $("#followingCF").removeClass("btn-success");
        $("#followerFB").addClass("btn-light");
        $("#followerCF").addClass("btn-light");
        $("#followingFB").addClass("btn-light");
        $("#followingCF").addClass("btn-light");
    }

    function updateStats() {
        $('#followerCount').text($('#tableConnectionsFollowers').bootstrapTable('getOptions').totalRows);
        $('#followingCount').text($('#tableConnectionsFollowing').bootstrapTable('getOptions').totalRows);
    }

    $("#followFFollow").click(function () {
        if ($(this).hasClass("btn-primary")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).addClass("btn-light");
            $(this).removeClass("btn-primary");
            clearFilters();
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                FB: 'Yes'
            });
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                FB: 'Yes'
            });
            $(this).removeClass("btn-light");
            $(this).addClass("btn-primary");
            clearFilters();
        }

        updateStats();
    });

    $("#followerCF").click(function () {
        if ($(this).hasClass("btn-success")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $(this).addClass("btn-light");
            $(this).removeClass("btn-success");
            $("#followerFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-primary");
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                extra: 'Yes'
            });
            $(this).removeClass("btn-light");
            $(this).addClass("btn-success");
            $("#followerFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-primary");
        }

        updateStats();
    });

    $("#followerFB").click(function () {
        if ($(this).hasClass("btn-warning")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $(this).addClass("btn-light");
            $(this).removeClass("btn-warning");
            $("#followerCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-primary");
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                FB: 'No'
            });
            $(this).removeClass("btn-light");
            $(this).addClass("btn-warning");
            $("#followerCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-primary");
        }

        updateStats();
    });

    $("#followingCF").click(function () {
        if ($(this).hasClass("btn-success")) {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).addClass("btn-light");
            $(this).removeClass("btn-success");
            $("#followingFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-primary");
        } else {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                extra: 'Yes'
            });
            $(this).removeClass("btn-light");
            $(this).addClass("btn-success");
            $("#followingFB").removeClass("btn-warning");
            $("#followFFollow").removeClass("btn-primary");
        }

        updateStats();
    });

    $("#followingFB").click(function () {
        if ($(this).hasClass("btn-warning")) {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).addClass("btn-light");
            $(this).removeClass("btn-warning");
            $("#followingCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-primary");
        } else {
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                FB: 'No'
            });
            $(this).removeClass("btn-light");
            $(this).addClass("btn-warning");
            $("#followingCF").removeClass("btn-success");
            $("#followFFollow").removeClass("btn-primary");
        }

        updateStats();
    });
});
