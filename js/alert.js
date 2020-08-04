// args:
// {
// 	title:"温馨提示",
// 	content:"是否在页面添加一个蓝色的div",
// 	confirmFn:function(){
		// var adddiv=document.createElement("div");
		//  adddiv.style.backgroundColor='blue';
		//  adddiv.style.width='400px';
		//  adddiv.style.height='400px';
		// body.removeChild(zhezhao);
		// body.appendChild(adddiv);
// 		},
//     cancelFn:function(){
		
// 	}
	
// }

function newalert(args){      //args对象
	
	    var zhezhao=document.createElement('div')
		   zhezhao.className="zhezhao";
		   zhezhao.innerHTML=`<div class="zhezhao">
		<div class="alert">
			<div class="header">
				<span class="title">`+args.title+`</span>
				<span class="close">x</span>
		    </div>
			<div class="main">
				`+args.content+`
			</div>
			<div class="btnList">
				<div class="btn" id="ok">确定</div>
				<div class="btn" id="no">取消</div>
			</div>
		</div>
	</div> `
	    var body=document.querySelector('body')
		body.appendChild(zhezhao)
		//获取close元素
		var closediv=document.querySelector(".close")
		closediv.onclick=function(){
			body.removeChild(zhezhao)
		  }
		  var ok=document.querySelector('#ok');
		  ok.onclick=function(){
			 args.confirmFn();
			  body.removeChild(zhezhao)
		  }
		  var no=document.querySelector('#no');
		  no.onclick=function(){
			  typeof args.cancelFn=='function'?args.cancelFn:null;
			  body.removeChild(zhezhao)
		  }
}