$(function() {
    $('#link_reg').click(function() {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    $('#link_login').click(function() {
        $('.login-box').show();
        $('.reg-box').hide();
    })
})