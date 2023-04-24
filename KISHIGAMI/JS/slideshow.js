// JavaScript Document
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [
				{ src: './imges/パソコン修理.png'},
				{ src: './imges/スキル.png'},
				{ src: './imges/インテリア.png'}
			];
		} else {
			var responsiveImage = [
				{ src: './imges/パソコン修理S.png'},
				{ src: './imges/スキルS.png'},
				{ src: './imges/インテリアS.png'}
			];
		}

$('#slider').vegas({
		overlay: true,
		transition: 'fade2',
		transitionDuration: 2000,
		delay: 5000,
		animationDuration: 20000,
		animation: 'random',
		slides: responsiveImage,
	});