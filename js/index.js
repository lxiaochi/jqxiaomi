/*header*/
(function (){
	var $buy = $("#header .h_m_r_buy");
	var $buyA = $buy.find("a.buy");
	var $buyHide = $buy.find('.hide');
	$buy.hover(function(){
		$buyA.addClass("hover");
		$buyHide.stop().slideDown(300);
	},function(){
		$buyHide.stop().slideUp(300 , function(){
				$buyA.removeClass('hover');
		});
	});
})();
/*nav_main*/
(function(){
		
		var $product = $('#nav .n_main .product');
		var $hide = $('#nav .nav_hide');
		var $ul = $('#nav .nav_hide .n_h_main ul')
		$product.hover(function(){
			$hide.stop().slideDown();
			$ul.eq( $(this).index() ).show().siblings().hide();
		},function(){
			$hide.stop().slideUp();
		});
		$hide.hover(function(){
			$(this).stop().slideDown();
		},function(){
			$(this).stop().slideUp();
		});

	})();
/*nav_search*/
(function (){
	var $input = $('#nav .n_search input');
	var $search = $('#nav .n_search');
	var $hide = $('#nav .n_search .hide');
	var $tip = $('#nav .n_search .n_s_input a.tip');
	$input.on('focus blur' , function(){
		$search.toggleClass('focus');
		$hide.fadeToggle(100);
		$tip.fadeToggle(200);
	});
})();

/*banner_main*/
(function (){
	var $tab = $('#banner .b_main .b_m_tab li');
	var $pic = $('#banner .b_m_pic li');
	var $btn = $('#banner .b_m_btn .btn');
	var lengh = $pic.length;
	var index = 0;
	$pic.eq(0).show();
	$tab.eq(0).addClass('on');
	$tab.click(function(){
		$pic.eq(index).fadeOut(800);
		$tab.eq(index).removeClass('on');
		index = $(this).index();
		$pic.eq(index).fadeIn(800);
		$tab.eq(index).addClass('on');
	})
	$btn.click(function (){
		var i = $(this).index();
		$pic.eq(index).fadeOut(800);
		$tab.eq(index).removeClass('on');
		if ( i ) {
			index ++ ; 
			index %= length;
		}else{
			index --;
			if(index<0)index = length-1;
		}
		$pic.eq(index).fadeIn(800);
		$tab.eq(index).addClass('on');
	})
})()	