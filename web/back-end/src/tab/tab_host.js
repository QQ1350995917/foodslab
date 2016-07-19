/**
 * Created by dingpengwei on 7/17/16.
 */
/**
 * TabItem的基本数据对象
 * @param id 数据ID
 * @param displayName 显示名称
 * @param normalClassName 非选中状态下的样式名称
 * @param selectedClassName 选中状态下的样式名称
 * @param currentClassName 当前状态下的样式名称
 * @constructor
 */
function TabItem(id, displayName, normalClassName,selectedClassName,currentClassName,verticalNormalArrowClassName,verticalSelectedArrowClassName,verticalCurrentArrowClassName) {
    this.id = id;
    this.displayName = displayName;
    this.normalClassName = normalClassName;
    this.selectedClassName = selectedClassName;
    this.currentClassName = currentClassName;
    this.verticalNormalArrowClassName = verticalNormalArrowClassName;
    this.verticalSelectedArrowClassName = verticalSelectedArrowClassName;
    this.verticalCurrentArrowClassName = verticalCurrentArrowClassName;
}

/**
 * 初始化横向的TabHost
 * @param id 容器ID
 * @param tabItems 数据源集合
 */
function initHorizontalTabHostView(id, tabItems) {
    var tabHost = document.getElementById(id);
    var tabWidth = parseInt(tabHost.style.width);
    var tabHeight = parseInt(tabHost.style.height);
    var tabSize = tabItems.length;
    var tabItemWidth = tabWidth / tabSize;

    for (var index = 0; index < tabSize; index++) {
        var tabItem = tabItems[index];
        tabItem.width = tabItemWidth - 2;
        tabItem.height = tabHeight;
        createTabItem(tabHost,tabItem,false);
    }
}


/**
 * 初始化纵向的TabHost
 * @param id 容器ID
 * @param tabItems 数据源集合
 */
function initVerticalTabHostView(id, tabItems) {
    var tabHost = document.getElementById(id);
    var tabWidth = parseInt(tabHost.style.width);
    var tabHeight = parseInt(tabHost.style.height);
    var tabSize = tabItems.length;
    var tabItemHeight = tabHeight / tabSize;

    for (var index = 0; index < tabSize; index++) {
        var tabItem = tabItems[index];
        tabItem.width = tabWidth;
        tabItem.height = tabItemHeight;
        createTabItem(tabHost,tabItem,true);
    }
}

/**
 * 创建一个TabHost item并添加到dom
 * @param parent 容器
 * @param tabItemData 数据源
 */
function createTabItem(parent,tabItemData,isVertical) {
    var tabItemView = document.createElement('div');
    tabItemView.innerHTML = tabItemData.displayName;
    tabItemView.style.width = tabItemData.width + "px";
    tabItemView.className = tabItemData.currentClassName;
    tabItemView.normalClassName = tabItemData.normalClassName;
    tabItemView.selectedClassName = tabItemData.selectedClassName;
    tabItemView.addEventListener("click", onTabItemClick);
    if (isVertical){
        var tabItemViewArrow = document.createElement('div');
        tabItemViewArrow.tagName =
        tabItemViewArrow.className = tabItemData.verticalCurrentArrowClassName;
        tabItemViewArrow.normalClassName = tabItemData.verticalNormalArrowClassName;
        tabItemViewArrow.selectedClassName = tabItemData.verticalSelectedArrowClassName;
        tabItemView.appendChild(tabItemViewArrow)
    }
    parent.appendChild(tabItemView);
}

/**
 * 点击事件
 */
function onTabItemClick() {
    var tabLength = this.parentNode.childElementCount;
    for (var index = 0; index < tabLength; index++) {
        this.parentNode.childNodes[index].className = this.normalClassName;
        if (this.childNodes.length > 1){
            this.parentNode.childNodes[index].childNodes[1].className = this.parentNode.childNodes[index].childNodes[1].normalClassName;
            this.childNodes[1].className = this.childNodes[1].normalClassName;
        }
    }
    
    this.className = this.selectedClassName;
    if (this.childNodes.length > 1){
        this.childNodes[1].className = this.childNodes[1].selectedClassName;
    }

    new Toast('body',null,null,null,40).show(this.childNodes[0].data);
    
}