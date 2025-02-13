
/* Code I found to try fix up the light box

$('img').each(function(index){
    var imageSizeProportion = $('img')[index].width / $('img')[index].height;
    var width = '1600';
    var height = '1067';
    imageSizeProportion > 1.5 ? height = (1600/imageSizeProportion).toString() : width = (1067*imageSizeProportion).toString();
    var fullsize = width + 'x' + height;
    $('.mdb-lightbox a')[index].attributes[1].value = fullsize;
});

*/

console.log("whello");


// ScrollFade 0.1

var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});