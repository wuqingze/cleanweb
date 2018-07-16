if(document.domain == 'blog.csdn.net'){

    var body = document.getElementsByTagName("body")[0]
    for(var i=body.children.length-1;i>=0;i--){
        if(body.children[i].getAttribute("id") != 'mainBox'){
            body.children[i].parentNode.removeChild(body.children[i]);
        }
    }
    
    var mainBox = document.getElementById("mainBox")
    for(var i=mainBox.children.length-1;i>=0;i--){
        if(mainBox.children[i].nodeName != 'MAIN'){
            mainBox.children[i].parentNode.removeChild(mainBox.children[i]);
        }
    }
    
    var main = document.getElementsByTagName("main")[0]
    for(var i= main.children.length-1; i>=1; i--){
        main.children[i].parentNode.removeChild(main.children[i])
    }

    document.getElementsByTagName('main')[0].style = 'position: absolute;left: 160px;'
}

if(document.domain == 'www.jianshu.com'){
    var body = document.getElementsByTagName("body")[0]
    for(var i=body.children.length-1;i>=0;i--){
        if(!(body.children[i].nodeName == 'DIV' && body.children[i].getAttribute('class') == 'note')){
            body.children[i].parentNode.removeChild(body.children[i]);
        }
    }

    var d = body.children[0]

    for(var i=d.children.length-1;i>0; i--){
        if(d.children[i].getAttribute('class') != 'post' || d.children[i].nodeName == 'A'){
            d.children[i].parentNode.removeChild(d.children[i]);
        }
    }

    d.children[0].parentNode.removeChild(d.children[0]) 
}

if(document.domain == 'www.baidu.com'){
    var container = document.getElementById("container")
    if(container != null){
        for(var i=container.children.length-1; i>=0; i--){
            if(container.children[i].getAttribute('id') != 'content_left'){
                container.children[i].parentNode.removeChild(container.children[i]);
            }
        }
        document.getElementById("foot").parentNode.removeChild(document.getElementById("foot"))
    }
}   
if(document.domain == 'www.cnblogs.com'){
    var home = document.getElementById("home");
    for(var i=home.children.length-1;i>=0;i--){
        if(home.children[i].getAttribute('id') != 'main'){
            home.children[i].parentNode.removeChild(home.children[i]);
        }
    }

    var main = document.getElementById('main')
    for(var i=main.children.length-1;i>=0;i--){
        if(main.children[i].getAttribute('id') != 'mainContent'){
            main.children[i].parentNode.removeChild(main.children[i]);
        }
    }

    var post = document.getElementById('post_detail')
    var parent = post.parentNode
    for(var i=parent.children.length-1;i>=0;i--){
        if(parent.children[i].getAttribute('id') != 'post_detail'){
            parent.removeChild(parent.children[i]);
        }
    }
}