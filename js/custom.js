function tab(m, n) {
    var tli = document.getElementById("tabmenu" + m).getElementsByTagName("li");
    var lli = document.getElementById("tablist" + m).getElementsByTagName("li");
    var mli = document.getElementById("tabmore" + m).getElementsByTagName("span");
    for (i = 0; i < tli.length; i++) {
        tli[i].className = i == n ? "hover": "";
        lli[i].style.display = i == n ? "block": "none";
        mli[i].style.display = i == n ? "block": "none"
    }
}
function setHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl)
    } catch(e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch(e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。")
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl)
        } else {
            alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。")
        }
    }
}
function addLove(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch(e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch(e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}