window.onload = function () {
    
    new Slider({
        images: '.gal1 img',
        btnPrev: '.gal1 .buttons .back',
        btnNext: '.gal1 .buttons .next',
        auto: false
    });
    
	new Slider({
        images: '.gal2 img',
        btnPrev: '.gal2 .buttons .back',
        btnNext: '.gal2 .buttons .next',
        auto: true,
        rate: 2000
    });
}


function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
		
	this.auto = obj.auto;
		
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
    
    this.rate = obj.rate || 1000;
	
	var i = 0;
    
    var slider = this;

	this.back = function () {
		slider.images[i].classList.remove('show');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images[i].classList.add('show');
	}

	this.next = function () {
		slider.images[i].classList.remove('show');
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images[i].classList.add('show');
	}
	
    document.querySelector(slider.btnPrev).onclick = slider.back;
    document.querySelector(slider.btnNext).onclick = slider.next;
		
	if(slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
}
//window.onload = function(){
//
//var foto = document.querySelectorAll('.gal1 img');  
//    
//var foto2 = document.querySelectorAll('.gal2 img');
//
//var newSlider = new Slider(foto);
//    
//document.querySelector('.gal1 .buttons .back').onclick = function() {
//        newSlider.prev();
//    }
//        document.querySelector('.gal1 .buttons .next').onclick = function() {
//        newSlider.next();
//    }
//        
//        var newSlider2 = new Slider(foto2);
//    
//document.querySelector('.gal2 .back').onclick = function() {
//        newSlider2.prev();
//    }
//        document.querySelector('.gal2 .next').onclick = function() {
//            
//        newSlider2.next();  
//    }
// setInterval(function() {newSlider2.prev();},2000);
//}
//
// function Slider(foto) {
//     this.foto = foto;
//     var i = 0;
//     
//     this.prev = function () {
//         this.foto[i].classList.remove('show');
//         i--;
//         if(i < 0) {
//             i = this.foto.length - 1;
//         }
//         this.foto[i].classList.add('show');
//     }
//     
//     this.next = function () {
//         this.foto[i].classList.remove('show');
//         i++;
//         if(i >= this.foto.length) {
//             i = 0;
//         }
//         this.foto[i].classList.add('show');
//     }
//     
// }   
