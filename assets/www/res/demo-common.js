/** demo commons */

var menu_index = 0;

// share
droid.setMenuItem(
  menu_index++, true, droid.getResString("ttl_menu_share"), "ic_menu_share",
  function() {
    alert(droid.getResString("get_premium"));
  }
);
// info
droid.setMenuItem(
  menu_index++, true, droid.getResString("ttl_menu_info_details"), "ic_menu_info_details",
  function(){
    alert(droid.getResString("cnt_menu_info_details") + " " + droid.getResString("version"));
  }
);
// quit
droid.setMenuItem(
  menu_index++, true,  droid.getResString("dsp_menu_close_clear_cancel"), "ic_menu_close_clear_cancel",
  function() {
    // display confirm message
    var b = confirm(droid.getResString("msg_menu_close_clear_cancel"));
    if (b) droid.quit();
  }
);
// DEBUG : localStorage.clear()
droid.setMenuItem(
  menu_index++, true, "行程クリア", "ic_menu_delete",
  function() {
	    var b = confirm("行程リストをクリアしますか？");
	    if (b) {
	    	var keys = [];
		   	var keyNum = localStorage.length;
		   	for (var i = 0; i < keyNum; i++) {
		   	    keys[i] = localStorage.key(i);
		   	}
		   	for (var i = 0; i < keyNum; i++) {
   				localStorage.removeItem(keys[i]);
		   	}
  			reloadLocationList();
  		}
  }
);
