$('#login-button').click(function (event) { //检测点击 id为“login-button”的按钮（进入），跳转页面
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="孙雨馨" &&  pwd=="1101"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);//登陆成功，跳转进下一个页面
		}
	else{
		alert("Wrong Password");
	}
});
