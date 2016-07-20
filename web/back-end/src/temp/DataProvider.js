/**
 * Created by dingpengwei on 7/19/16.
 */

function getHorizontalIndexTabItems() {
    var horizontalIndexTabItems = new Array();
    horizontalIndexTabItems.push(new TabItem("1","流量报表","horizontalIndexNormal","horizontalIndexSelect","horizontalIndexSelect"));
    horizontalIndexTabItems.push(new TabItem("2","销售报表","horizontalIndexNormal","horizontalIndexSelect","horizontalIndexNormal"));
    return horizontalIndexTabItems;
}

function getHorizontalTabItems() {
    var horizontalTabItems = new Array();
    horizontalTabItems.push(new TabItem("1","逐月","horizontalNormal","horizontalSelected","horizontalSelected"));
    horizontalTabItems.push(new TabItem("2","逐年","horizontalNormal","horizontalSelected","horizontalNormal"));
    horizontalTabItems.push(new TabItem("3","逐日","horizontalNormal","horizontalSelected","horizontalNormal"));
    horizontalTabItems.push(new TabItem("4","逐时","horizontalNormal","horizontalSelected","horizontalNormal"));
    horizontalTabItems.push(new TabItem("5","逐分","horizontalNormal","horizontalSelected","horizontalNormal"));
    return horizontalTabItems;
}

function getVerticalTabItems() {
    var VerticalTabItems = new Array();
    VerticalTabItems.push(new TabItem("1","系统管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("2","活动管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("3","产品管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("4","推荐管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("5","消息管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("6","皮肤管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("7","链接管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("8","用户管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("9","订单管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    VerticalTabItems.push(new TabItem("10","预约管理","verticalNormal","verticalSelected","verticalNormal","verticalNormalArrow","verticalSelectedArrow","verticalNormalArrow"));
    return VerticalTabItems;
}