$('#logout').on('click', function() {
    var isconfirm = confirm('是否退出')
    if (isconfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function(data) {
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})