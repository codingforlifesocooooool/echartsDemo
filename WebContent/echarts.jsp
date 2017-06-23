<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="echarts.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        var pieData = [
		                [{value:5, name:'衬衫'},
		                {value:20, name:'羊毛衫'},
		                {value:36, name:'雪纺衫'},
		                {value:10, name:'裤子'},
		                {value:10, name:'高跟鞋'},
		                {value:20, name:'袜子'}, 
		                ],
		                [
						{value:6, name:'衬衫'},
						{value:7, name:'羊毛衫'},
						{value:8, name:'雪纺衫'},
						{value:9, name:'裤子'},
						{value:10, name:'高跟鞋'},
						{value:11, name:'袜子'}, 
		                ]
		            ]
        
        // 指定图表的配置项和数据
      var option = {
	 		title: {
	      	   text: 'ECharts 入门示例'
	  		},
		    tooltip: {
		         trigger: 'axis',  
		         axisPointer:{
		            type: 'shadow',
		         },
		    },
		    legend: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    xAxis: {
		        data:['商城','地摊']
		    },
		    yAxis: {},
		    series: [{
		        name: '衬衫',
		        type: 'bar',
		        data: [5, 6]
		    },{
		        name: '羊毛衫',
		        type: 'bar',
		        data: [5, 7]   
		        
		    },{
		        name: '裤子',
		        type: 'bar',
		        data: [5, 8]   
		        
		    },{
		        name: '雪纺衫',
		        type: 'bar',
		        data: [5, 9]   
		        
		    },{
		        name: '高跟鞋',
		        type: 'bar',
		        data: [5, 10]   
		        
		    },{
		        name: '袜子',
		        type: 'bar',
		        data: [5, 11]   
		        
		    },
		       {
		            name:'不通区域服装价格比',
		            type:'pie',
		            tooltip : {
		                trigger: 'item',
		                formatter: '{a} <br/>{b} : {c} ({d}%)'
		            },
		            center: ['90%','20%'],
		            radius : [0,100],
		            itemStyle :{
		                normal : {
		                    labelLine : {
		                        length : 30
		                    }
		                }
		            },
		            data:[
		                {value:5, name:'衬衫'},
		                {value:20, name:'羊毛衫'},
		                {value:36, name:'雪纺衫'},
		                {value:10, name:'裤子'},
		                {value:10, name:'高跟鞋'},
		                {value:20, name:'袜子'}, 
		            ]
		        }
		    ]
		};
        
		
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
</body>
</html>