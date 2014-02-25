# modal

---

以弹出对话框的形式出现，具有最小和最实用的功能集。

---

````html
 <!-- Button trigger modal -->
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
````

## 使用说明

模态插件根据需求切换内容的隐藏与显示,通过data属性或JavaScript调用。它会增加`.model-open`到`<body>`标签覆盖默认滚动行为；并生成一个`.modal-backdrop`元素，当点击模态窗口外部区域时隐藏窗口。


### 通过data属性

不需写JavaScript代码也可激活模态框。通过在一个起控制器作用的页面元素（例如，按钮）上设置data-toggle="modal"，并使用data-target="#foo"或href="#foo"指向特定的模态框即可。

```html
<button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
```

### 通过JavaScript调用

只需一行JavaScript代码，即可通过id myModal调用模态框：

```javascript
$('#myModal').modal(options)
```

