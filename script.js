//if (!window.location.href.endsWith('?old')) window.location.href = 'https://www.luctisity.com';

var header = `
<style>
	header {
	background-color:#6229ff;
	}
</style>
<header id="header">
	<div id="logo">
		<a href="index"><img src="img/icon.png" width="140px"></a>
	</div>
	<div id="search">
		<input type="text" placeholder="Search" id="searchbar">
		<a href=""><img src="img/mag_glass.png" width="25px" style="position:relative; top:8px;"></a>
	</div>
	<nav id="navstandard">
		<a href="#" class="link">Create</a>
		<a href="#" class="link">Explore</a>
		<a href="#" class="link">About</a>
		<a href="#" class="link">Store</a>
		<a href="#" class="link">Wiki</a>
		<a href="#" class="link">Map</a>
	</nav>
	<nav id="login" style="	display:none;">
		<a href="#" class="link" style="padding-right:6px;">Register</a>
		<a href="#" class="link"> Login</a>
	</nav>
	<nav id="profilestuff" style="display:block;">
		<nav>
			<a href="#"><img src="img/buttons/messages.png" width="40px"></a>
			<a href="#"><img src="img/buttons/mystuff.png" width="40px"></a>
			<a href="settings.html"><img src="img/buttons/settings.png" width="40px"></a>
			<img src="img/coins.png" width="40px"><b style="font-size:18px; position:relative; bottom:12px;">0</b>
			<img src="img/tokens.png" width="40px"><b style="font-size:18px; position:relative; bottom:12px;">0</b>
		</nav>
		<a href="#" class="link"><div id="profile" style="display:block;">
			<img src="img/ava_default.png" width="40px" id="avatar">
			<label style="padding-top:auto; padding-bottom:auto;" id="username" class="link"><b>demo_account</b></label>
		</div></a>	
	</nav>
</header><br/><br/><br/><br/><br/><br/>
`

document.write(header)

//Below are theme changing functions (I know, they're terribly made, but they work)

function css1(val) {
	document.getElementById('header').style.backgroundColor = val
}

function css2(val) {
	document.getElementsByTagName('body')[0].style.backgroundColor = val
}

function css3(val) {
	//document.getElementsByClassName('link').style.color = val
	var elements = document.getElementsByClassName('link'), i, len;
  
	for (i = 0, len = elements.length; i < len; i++) {
		elements[i].style.color = val
	}
}

function css4(val) {
	document.getElementsByTagName('input')[0].style.backgroundColor = val
}

function css5(val) {
	document.getElementsByTagName('body')[0].style.color = val
}

//Below are website presets

function themesdark() {
	css1('black') 
	css2('#2f3136')
	css3('#7d8084')
	css4('#40444b')
	css5('white')
}

function themewaste() {
	css1('#4d97ff') 
	css2('white')
	css3('white')
	css4('#4588e5')
	css5('#575e75')
}

function themedefault() {
	css1('#6229ff') 
	css2('black')
	css3('#ccccff')
	css4('#491cc4')
	css5('white')
}
