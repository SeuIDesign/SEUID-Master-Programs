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
                alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�")
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl)
        } else {
            alert("�����������֧�֣��밴�����沽�������1.����������á�2.���������ҳ��3.���룺" + vrl + "���ȷ����")
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
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������")
        }
    }
}