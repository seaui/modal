/*!
 * Created by wqh on 14-2-10.
 */
define(function (require) {
    var $ = require('$'),
        modal = require('modal');
    var $modal = modal.init({id: '00', buttonText: {ok: '确定', cancel: '取消'}, content: 'hello world!', title: '提示'},function() {
        alert('ok');
    });
    $(function() {
        $('#btnDialog').bind('click', function () {
            $modal.modal('show');
        })
    });
});
