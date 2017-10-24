/**
 * Created by hk on 2017/10/23.
 */
/**
 * <li>Echarts ��axisLabel��ֵ̫���Զ����д��������ԣ�360��IE7-IE11��google�����  * ��������������ʾ</li>
 * <li>����echarts ��״ͼ x ��������ʾ�������Ӽ�������Զ�������ʾ</li>
 * @param title             ��Ҫ���д���x��ֵ
 * @param data
 * @param fontSize          x�����������С������ͼƬ�����С���ö������˴��ڲ�Ĭ��Ϊ12
 * @param barContainerWidth         ��״ͼ��ʼ�����ڵ���������Ŀ��
 * @param xWidth            ��״ͼx����ߵĿհ׼�϶ x ��ֵ�����echarts�ĵ���grid���ԣ�Ĭ��80
 * @param x2Width           ��״ͼx���ʱ�Ŀհ׼�϶ x2 ��ֵ�����echarts�ĵ���grid���ԣ�Ĭ��80
 * @param insertContent     ÿ�ν�ȡ��Ҫƴ�Ӳ�������ݣ� ������Ĭ��Ϊ���з���\n
 * @returns titleStr        ��ȡƴ��ָ�����ݺ�������ַ���
 * @author lixin
 */
function getEchartBarXAxisTitle(title, datas, barContainerWidth,fontSize, xWidth, x2Width, insertContent){

    if(!title || title.length == 0) {
        alert("��ȡƴ�ӵĲ���ֵ����Ϊ�գ�");return 1;
    }
    if(!datas || datas.length == 0) {
        alert("���ڼ�����״ͼ���Ӹ����Ĳ���datas���Ϸ���"); return 2;
    }
    if(isNaN(barContainerWidth)) {
        alert("��״ͼ��ʼ�����ڵ������Ŀ�Ȳ���һ������");return 3;
    }
    if(!fontSize){
        fontSize = 12;
    }
    if(isNaN(xWidth)) {
        xWidth = 80;//Ĭ����echarts��Ĭ��ֵһ��
    }
    if(isNaN(x2Width)) {
        xWidth = 80;//Ĭ����echarts��Ĭ��ֵһ��
    }
    if(!insertContent) {
        insertContent = "\n";
    }

    var xAxisWidth =  parseInt(barContainerWidth) - (parseInt(xWidth) + parseInt(x2Width));//��״ͼx����=ͳ��ҳ����-��״ͼx��Ŀհ׼�϶(x + x2)
    var barCount = datas.length;                                //x�ᵥԪ��ĸ�������Ϊ��ȡx������ݵ�������
    var preBarWidth = Math.floor(xAxisWidth / barCount);        //ͳ��x��ÿ����Ԫ��ļ��
    var preBarFontCount = Math.floor(preBarWidth / fontSize) ;  //��״ͼÿ��������x���������ɵ����� = ÿ������ x ������� / ÿ���ֵĿ�ȣ�12px��
    if(preBarFontCount > 3) {    //Ϊ��x�������ʾ���ۣ�ÿ��������ʾ�������ֵļ�϶���磺ԭ��һ������һ����ʾ5���֣������һ�о�ֻ��ʾ3����
        preBarFontCount -= 2;
    } else if(preBarFontCount <= 3 && preBarFontCount >= 2) {//��ÿ���������պ��ܷ����������ַ�ʱ��������ֻ��һ���ַ�
        preBarFontCount -= 1;
    }

    var newTitle = "";      //ƴ��ÿ�ν�ȡ�����ݣ�ֱ�����Ϊ������ֵ
    var titleSuf = "";      //���ڴ��ÿ�ν�ȡ��ʣ�µĲ���
    var rowCount = Math.ceil(title.length / preBarFontCount);   //������ʾ��Ҫ���еĴ���
    if(rowCount > 1) {       //��������������״ͼÿ������x�����������ɵ��������򽫱��⻻��
        for(var j = 1; j <= rowCount; j++) {
            if(j == 1) {

                newTitle += title.substring(0, preBarFontCount) + insertContent;
                titleSuf = title.substring(preBarFontCount);    //��Ž���ȡ��ʣ�µĲ��֣������´�ѭ������ʣ�µĲ������ִ�ͷ��ȡ�̶�����
            } else {

                var startIndex = 0;
                var endIndex = preBarFontCount;
                if(titleSuf.length > preBarFontCount) {  //����ȡ��ʣ�µĲ��ֵĳ����Ƿ������״ͼ�������Ӽ�������ɵ�����

                    newTitle += titleSuf.substring(startIndex, endIndex) + insertContent;
                    titleSuf = titleSuf.substring(endIndex);    //���½�ȡ��ʣ�µĲ��֣������´μ�������ʣ�µĲ����н�ȡ�̶�����
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
