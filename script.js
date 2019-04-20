// ==UserScript==
// @name         MiniYouTube
// @version      0.5.4
// @homepage https://github.com/misterzym/blockvkbot
// @description  Делает маленьким окошко для ютубки
// @author       Misterzym
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);

    setTimeout(function(){

        if (window.location.href.indexOf("mini=1") !== -1){
            $("#player.style-scope.ytd-watch-flexy").remove();
            $("ytd-live-chat-frame#chat.style-scope.ytd-watch-flexy").remove();
            $("#meta-contents.style-scope.ytd-watch-flexy").remove();
            $("ytd-watch-next-secondary-results-renderer.style-scope.ytd-watch-flexy").remove();
            $(".style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default").hide();
            $("#container.style-scope.ytd-masthead").remove();
            $("ytd-page-manager#page-manager").css("margin-top","0px").css("overflow","hidden");
            $("#primary.style-scope.ytd-watch-flexy").css("padding-top","0px");
            $("body").css("overflow","hidden");
            return;
        }

        $("#info-text.style-scope.ytd-video-primary-info-renderer").append("<a href='"+window.location.href +"&mini=1' class='minified' style='padding:6px;background:purple;border-radius:15px;color:white;margin-left:5px;'>Mini</a>");

        $(".minified").on("click",function(){
            var newWin = window.open($(this).attr("href"), 'example', 'width=640,height=110,menubar=no,toolbar=no,location=no,status=no');
            return false;
        });
    },5000);
})();
