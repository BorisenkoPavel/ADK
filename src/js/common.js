// import {ModalEffects} from 'modalEffects.js';
// import {seyHi} from './modalEffects.js';

$(document).ready(function () {
	
	AOS.init();

	svg4everybody({});
	var seyHi = function(){
		console.log('jskdaj')
	}
	seyHi()
})

import Flickity from 'flickity';

new Vue({
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});