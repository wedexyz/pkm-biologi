var cartCount = 0,
	 buy = $( ".chart"),
	 span = $(".number"),
	 cart = $(".cart"),
	 quickview = $('.quickviewContainer'),
	 quickViewBtn = $('.quickview'),
	 close = $('.quickviewContainer .close'),
	 minicart = [],
	 totalPrice = [],
	 miniCartPrice;

buy.on('click', addToCart);
quickViewBtn.on('click', quickView);
cart.on('click', showMiniCart);
close.on('click', function(){
	quickview.removeClass('active');
});

function quickView() {
	var description = $(this).parent().find(".description").text(),
		 header = $(this).parent().find(".header").text(),
		 price = $(this).find(".price"),
		 quickViewHeader = $('.quickviewContainer .headline'),
		 quickViewDescription = $('.quickviewContainer .description');
	clearTimeout(timeQuick);
		if(quickview.hasClass('active')){
			quickview.removeClass('active');
			var timeQuick = setTimeout(function(){
				quickview.addClass('active');
			}, 300);
		} else{
			quickview.addClass('active');
		}
	
	quickViewHeader.text(header);
	quickViewDescription.text(description);
}

function showMiniCart() {
	$('.mini').toggleClass('visible');
}

function addToCart() {
	var self = $(this),
		 productName = $(this).parent().find('.header').text(),
		 miniCartNames = $('.product'),
		 names = $('.names'),
		 kirim = $('#kirim'),
		 price = $(this).parent().find(".price").text(),
		 priceInt = parseInt(price);
	
	totalPrice.push(priceInt);
	miniCartPrice = totalPrice.reduce(function(a,b){  return a+b });
	
	$("#miniprice").text('Total Harga: ' + miniCartPrice + ",-");
	minicart.push(productName);
	lastProduct = minicart[minicart.length - 1];
	miniCartNames.text('Your cart lines: ');
	names.append('<p>'+(cartCount+1) +". "+ lastProduct +" Harga "+"Rp. "+ price+'</p>');
	kirim.append((cartCount+1) +". "+ lastProduct +" Harga "+"Rp. "+ price+'%0a' );
	
	//names2.append('<p>'+(cartCount+1) +". "+ lastProduct +" Harga "+"Rp. "+ price+'</p>');
	
	cartCount++;
	//span.text(cartCount);
	document.getElementById('no').innerHTML = cartCount;


	
	clearTimeout(time);
	if(span.hasClass('update')){
		span.removeClass('update');
		span.addClass('updateQuantity');
		var time = setTimeout(function(){
			span.removeClass('updateQuantity');
			span.addClass('update');
		}, 700);
	} else{
		span.addClass('update');
	}
	if (cartCount == 1){
		cart.toggleClass('icon-basket icon-basket-loaded');
	}
	
	$(this).addClass('ok');
	var timeOk = setTimeout(function(){
		self.removeClass('ok');
	}, 1000);
}
function send_handle() {
	const num = '+6283846144706';
	const msg = document.getElementById("kirim").innerHTML;
	const name = document.getElementById('nama').value;
	const alamat = document.getElementById('alamat').value;

	const win = window.open(`https://wa.me/${num}?text=Saya%20Order%20Barang%20Atas%20Nama%20%0aNama:%20${name}'%0aAlamat:%20'${alamat}'%0a'${msg}`, '_blank');
	win.focus();
  }
  function lanjut() {
	var x = document.getElementById("tampilan");
  
	x.style="display: block;";
  }