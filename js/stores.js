var shopsArr=[];
$(function(){

	//城市切换
	$('.cityName').on('click',function(){
		$('.storesWrap').hide();
		$('.cityWrap').show();
	})
	//点击索引查询城市
	$('body').on('click', '.letter a', function () {
	    var s = $(this).html();
	    var t=$('#' + s + '1').offset().top;
	    $(window).scrollTop(t);
	});

	//门店信息接口
	var url="https://member.dawang.tv/index/getShopList";

	$.ajax({
	    type: "GET",
	    url: url,
	    dataType: "json",
	    success: function (data) {
	        console.log(data);
	        //获取所有门店列表数据
	        shopsArr=data.data.stores;

	        //循环门店数据列表，展示门店所在城市
	        shopsArr.forEach(function(item){
	        	//
	        	var city=item.name.split('-')[0];
	        	var shopName=item.name.split('-')[1]
	        	$("#"+city).show();

	        	//初始进入展示门店 <a href='tel:"+item.telephone+"'>"+item.telephone+"</a>
	        	if(city =='北京'){
	        		var cityLi="<li>"
	        		+"<h2>"+shopName+"</h2>"	
	        		+"<p>"
	        			+"<span class='storesTime'>"+item.businessHours+"</span>"
	        			+"<span class='storesPhone'><a href='tel:"+item.telephone+"'>"+item.telephone+"</a></span>"
	        		+"</p>"
	        		+"<p class='storesAddress'>"+item.address+"</p>"
	        		+"</li>"
	        		$('.storesList').append(cityLi)
	        	}
	    	});


	        //点击城市，显示该城市的门店信息
	        $('.city-list p').on('click',function(){
	        	//点击前清空上一次城市的数据
	        	$('.storesList').html('');
	        	//点击后门店列表显示，城市列表隐藏
	        	$('.storesWrap').show();
	        	$('.cityWrap').hide();
	        	//获取点击城市的data-id
	        	var dataId=$(this).attr('id');
	        	//获取点击城市的name
	        	var cityName=$(this).html();
	        	//将点击的城市name赋值到页面展示。
	        	$("#cityName").html(cityName);

	        	//循环门店列表，展示所选城市的门店信息
	        	for(var i=0;i<shopsArr.length;i++){
	        		var city=shopsArr[i].name.split('-')[0];
	        		var shopName=shopsArr[i].name.split('-')[1]
	        		if(dataId == city){
	        			var cityLi="<li>"
						+"<h2>"+shopName+"</h2>"	
						+"<p>"
							+"<span class='storesTime'>"+shopsArr[i].businessHours+"</span>"
							+"<span class='storesPhone'><a href='tel:"+shopsArr[i].telephone+"'>"+shopsArr[i].telephone+"</a></span>"
						+"</p>"
						+"<p class='storesAddress'>"+shopsArr[i].address+"</p>"
						+"</li>"
						$('.storesList').append(cityLi)
	        		}
	        	}
	        })
	    },
	    error: function (data) {
	        alert('获取数据失败，请退出重试');
	    }
	})
	
})

function backStores(){
	$('.storesWrap').show();
	$('.cityWrap').hide();
}