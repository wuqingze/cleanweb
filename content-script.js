//引入jQuery
; (function (d, s) { d.body.appendChild(s = d.createElement('script')).src = 'http://code.jquery.com/jquery-1.9.1.min.js' })(document);

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
    document.getElementById("btn-readmore").click()
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
    setTimeout(() => {
        var container = document.getElementById("container")
        if(container != null){
            for(var i=container.children.length-1; i>=0; i--){
                if(container.children[i].getAttribute('id') != 'content_left'){
                    container.children[i].parentNode.removeChild(container.children[i]);
                }
            }
            document.getElementById("foot").parentNode.removeChild(document.getElementById("foot"))
        }    
    }, 100);
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

if (document.domain == 'juejin.im'){
    var page = document.getElementsByClassName('view-container')[0]
    page.children[0].setAttribute('hidden', true)
    var main = page.children[1]

    for (var i = main.children.length - 1; i >= 1; i--) {
        main.children[i].setAttribute('hidden', true);
    }

    var content = main.children[0]
    content.children[1].setAttribute('hidden', true)

    content.children[0].setAttribute('style', 'position:absolute;left:150px')
}
if (document.domain == 'www.runoob.com'){
    var b = document.getElementsByTagName('body')[0]
    b.children[0].parentNode.removeChild(b.children[1])
    b.children[0].parentNode.removeChild(b.children[0])
}

if (document.domain == 'wenku.baidu.com') {
    if ($('span.fc2e') != null) {
        $('span.fc2e').click();
        window.scrollTo(0, 0);
    }
    setTimeout(() => {
        $(".aside").remove();
        $("#doc #hd").remove();
        $(".crubms-wrap").remove();
        $(".user-bar").remove();
        $("#doc-header").remove();
        $(".reader-tools-bar-wrap").remove();
        $(".fix-searchbar-wrap").remove();
        $("#bottom-doc-list-8").remove();
        $(".ft").remove();
        $("#ft").remove();
        $("#docBubble").remove();
        $('.hd').remove();
        $('.wk-other-new-cntent').remove();
        $('#html-reader-go-more').remove();
        $('.new-wm').remove();
        $('#bottom-download').remove();
        $('#pay-page').remove();
        $('.banner-wrap').remove();
        $('#next_doc_box').remove();
        $('.high-quality-doc').remove();
        $("body").attr("margin", "auto");
        $('span.new-ico-wkmember-free-doc').remove();
        $('div.share-doc.doc-character-tag').remove();
        window.scrollTo(0, 0);
    }, 1000);

    window.scrollTo(0, 0);
}