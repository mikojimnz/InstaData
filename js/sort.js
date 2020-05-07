/*eslint-env jquery*/

$(window).on('load', function () {
    'use strict';

    $("#followFFollow").click(function () {
        if ($(this).hasClass("btn-info")) {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {});
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {});
            $(this).removeClass("btn-info");
            $("#followerFB").removeClass("btn-warning");
            $("#followerCF").removeClass("btn-success");
            $("#followingFB").removeClass("btn-warning");
            $("#followingCF").removeClass("btn-success");
        } else {
            $('#tableConnectionsFollowers').bootstrapTable('filterBy', {
                FB: 'Yes'
            });
            $('#tableConnectionsFollowing').bootstrapTable('filterBy', {
                FB: 'Yes'
            });
            $(this).addClass("btn-info");
            $("#followerFB").removeClass("btn-warning");
            $("#followerCF").removeClass("btn-success");
            $("#followingFB").removeClass("btn-warning");
            $("#followingCF").removeClass("btn-success");
        }
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
    });
});
