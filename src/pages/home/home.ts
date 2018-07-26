import { Component,EventEmitter } from '@angular/core';
import { NavController,MenuController,Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	distance: number = 10;
	dualValue2: any = { lower: 33, upper: 60 };
	text: number = 0;
	gender:string="Women";
	showme:boolean=true;
	lang : string="English";
	headrName:string="FoodMe";
	ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
      like: {
          backgroundColor: '#28e93b'
      },
      dislike: {
          backgroundColor: '#e92828'
      }
	};
	
	food: any;

  constructor( private sanitizer: DomSanitizer,	public navCtrl: NavController,	public menuCtrl: MenuController,	public platform:Platform) {
        this.menuCtrl.enable(true)
        if(this.platform.is('ios' || 'android')){
        	this.headrName="Profile";
        }
		this.food = [
			   'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
			   'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
			   'http://woman.ng/wp-content/uploads/2015/11/moi-moi-rollup-1.jpg',
			   'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
			   'https://www.kitchensanctuary.com/wp-content/uploads/2015/08/Indonesian-Fried-Rice-square.jpg',
			   'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
			   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhM0TSPzQYnwkOK2YcWmrMcHNA_LjRRLNOZLCIn5daIZpO0g_1',
			   'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
			   'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/1/6/l162893320.jpg',
			   'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
			   'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
			   'http://woman.ng/wp-content/uploads/2015/11/moi-moi-rollup-1.jpg',
			   'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
			   'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
			   'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/27/6/enhanced/webdr04/original-21405-1427452749-4.jpg?downsize=715:*&output-format=auto&output-quality=auto',
			   'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/1/6/l162893320.jpg',
			   'https://www.kitchensanctuary.com/wp-content/uploads/2015/08/Indonesian-Fried-Rice-square.jpg',
			   'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/1/6/l162893320.jpg',
			   'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/27/6/enhanced/webdr05/original-22418-1427453181-8.jpg?crop=667:667;167,0&downsize=715:*&output-format=auto&output-quality=auto',
			   'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
			   'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
			   'https://www.kitchensanctuary.com/wp-content/uploads/2015/08/Indonesian-Fried-Rice-square.jpg',
			   'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
			   'http://woman.ng/wp-content/uploads/2015/11/moi-moi-rollup-1.jpg'
		];
        
		for (let i = 0; i < this.food.length; i++) {
			this.attendants.push({
				id: i + 1,
				likeEvent: new EventEmitter(),
				destroyEvent: new EventEmitter(),
				asBg: this.sanitizer.bypassSecurityTrustStyle('url('+this.food[i]+')')
			});
		 }
		 this.ready = true;
	}
		
onCardInteract(event) {  console.log(event);  }

  chekPlatform() { console.log('hello there');  }
}
