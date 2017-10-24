/**
 * Created by hk on 2017/10/23.
 */
/**
 * <li>Echarts 中axisLabel中值太长自动换行处理；经测试：360、IE7-IE11、google、火狐  * 均能正常换行显示</li>
 * <li>处理echarts 柱状图 x 轴数据显示根据柱子间隔距离自动换行显示</li>
 * @param title             将要换行处理x轴值
 * @param data
 * @param fontSize          x轴数据字体大小，根据图片字体大小设置而定，此处内部默认为12
 * @param barContainerWidth         柱状图初始化所在的外层容器的宽度
 * @param xWidth            柱状图x轴左边的空白间隙 x 的值，详见echarts文档中grid属性，默认80
 * @param x2Width           柱状图x轴邮编的空白间隙 x2 的值，详见echarts文档中grid属性，默认80
 * @param insertContent     每次截取后要拼接插入的内容， 不传则默认为换行符：\n
 * @returns titleStr        截取拼接指定内容后的完整字符串
 * @author lixin
 */
function getEchartBarXAxisTitle(title, datas, barContainerWidth,fontSize, xWidth, x2Width, insertContent){

    if(!title || title.length == 0) {
        alert("截取拼接的参数值不能为空！");return 1;
    }
    if(!datas || datas.length == 0) {
        alert("用于计算柱状图柱子个数的参数datas不合法！"); return 2;
    }
    if(isNaN(barContainerWidth)) {
        alert("柱状图初始化所在的容器的宽度不是一个数字");return 3;
    }
    if(!fontSize){
        fontSize = 12;
    }
    if(isNaN(xWidth)) {
        xWidth = 80;//默认与echarts的默认值一致
    }
    if(isNaN(x2Width)) {
        xWidth = 80;//默认与echarts的默认值一致
    }
    if(!insertContent) {
        insertContent = "\n";
    }

    var xAxisWidth =  parseInt(barContainerWidth) - (parseInt(xWidth) + parseInt(x2Width));//柱状图x轴宽度=统计页面宽度-柱状图x轴的空白间隙(x + x2)
    var barCount = datas.length;                                //x轴单元格的个数（即为获取x轴的数据的条数）
    var preBarWidth = Math.floor(xAxisWidth / barCount);        //统计x轴每个单元格的间隔
    var preBarFontCount = Math.floor(preBarWidth / fontSize) ;  //柱状图每个柱所在x轴间隔能容纳的字数 = 每个柱子 x 轴间隔宽度 / 每个字的宽度（12px）
    if(preBarFontCount > 3) {    //为了x轴标题显示美观，每个标题显示留两个字的间隙，如：原本一个格能一样显示5个字，处理后一行就只显示3个字
        preBarFontCount -= 2;
    } else if(preBarFontCount <= 3 && preBarFontCount >= 2) {//若每个间隔距离刚好能放两个或者字符时，则让其只放一个字符
        preBarFontCount -= 1;
    }

    var newTitle = "";      //拼接每次截取的内容，直到最后为完整的值
    var titleSuf = "";      //用于存放每次截取后剩下的部分
    var rowCount = Math.ceil(title.length / preBarFontCount);   //标题显示需要换行的次数
    if(rowCount > 1) {       //标题字数大于柱状图每个柱子x轴间隔所能容纳的字数，则将标题换行
        for(var j = 1; j <= rowCount; j++) {
            if(j == 1) {

                newTitle += title.substring(0, preBarFontCount) + insertContent;
                titleSuf = title.substring(preBarFontCount);    //存放将截取后剩下的部分，便于下次循环从这剩下的部分中又从头截取固定长度
            } else {

                var startIndex = 0;
                var endIndex = preBarFontCount;
                if(titleSuf.length > preBarFontCount) {  //检查截取后剩下的部分的长度是否大于柱状图单个柱子间隔所容纳的字数

                    newTitle += titleSuf.substring(startIndex, endIndex) + insertContent;
                    titleSuf = titleSuf.substring(endIndex);    //更新截取后剩下的部分，便于下次继续从这剩下的部分中截取固定长度
                } else if(titleSuf.length > 0){
                    newTitle += titleSuf.substring(startIndex);
                }
            }
        }
    } else {
        newTitle = title;
    }
    return newTitle;
}
