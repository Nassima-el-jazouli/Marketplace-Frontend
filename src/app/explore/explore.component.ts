import { Component, OnInit } from '@angular/core';
import { AnnounceService } from '../_services/announce.service';
import { Announce } from '../models/announce';



@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

num=0;
  NombreOfHouses=0;
 House={  ownerAddress:"H",
          location:"A",
          cost:0,
          HouseID:"J"
          }
announces: Announce[] ;

  constructor(private announceService:AnnounceService) { this.announces=[]}

  ngOnInit(): void {


this.announceService.AnnouncesTrueValidatePublished().subscribe(result=> {
            this.announces = result;
          });


}
}



  /* console.log("salam*****************************");
        this.contractService.hello().subscribe(res => {
          this.num = res;
        });

        this.contractService.getNombreOfHouses().subscribe(res => {
                this.NombreOfHouses = res;
              });

         this.contractService.getHouse().subscribe(res => {
                      this.House.ownerAddress = res.ownerAddress;
                      this.House.location = res.location;
                      this.House.cost = res.cost;
                      this.House.HouseID = res.HouseID;

                      console.log("data  "+res.location);

                    });


         console.log("location  "+this.House.location);
 */



