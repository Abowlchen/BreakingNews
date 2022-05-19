$(function() {
    // 点击去注册账号让 登录框隐藏，注册框显示
    $('#link_reg').click(function() {
        $('.login-box').hide();
        $('.reg-box').show();
    });
    // 点击去登录让 注册框隐藏，登录框显示
    $('#link_login').click(function() {
        $('.login-box').show();
        $('.reg-box').hide();
    });
})