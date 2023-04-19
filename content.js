// 在content.js中
// 点击浏览器图标即可弹出框和菜单/按钮
function handleClick() {
    // 提取表格数据
    var tables = $('table');
    var wb = utils.book_new();
    for(let i=0;i<tables.length;i++){
		console.log(i);
      let ws = utils.table_to_sheet(tables[i]);
      utils.book_append_sheet(wb, ws, `Sheet$${i}`);
    }
    // 下载并保存到excel文件中
    writeFileSyncXLSX(wb, "result.xlsx",{ bookType: 'xlsx', type: 'binary' });
  }
  
  // 添加按钮点击事件监听器
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request && request.name === "ConvertTable2Excel") {
      handleClick();
    }
  });
  