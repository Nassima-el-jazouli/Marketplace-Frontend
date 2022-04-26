import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announce  } from '../models/announce';

const CONTRACT_API = 'http://localhost:9191/Ethereum/';
const ANNOUNCE_API= 'http://localhost:9191/Announce/';

@Injectable({
  providedIn: 'root'
})

export class ContractService {

  constructor(private http: HttpClient) { }


hello():Observable<any>{
    console.log("test call **************************************");
    return this.http.get(CONTRACT_API+'hello');
  }

  getNombreOfHouses():Observable<any>{
      console.log("getNombreOfHouses call **************************************");
      return this.http.get(CONTRACT_API+'getNombreOfHouses?ownerAddress=0x203157B8F29ffB29e0DE0ee593497a2591C66162');
    }

  getHouse():Observable<any>{
        return this.http.get(CONTRACT_API+
                  'getHouse?_HouseHolder=0x203157B8F29ffB29e0DE0ee593497a2591C66162&_index=0');
  }

   // add house to ethereum
      public AddHouseToEthereum(ownerAddress: String,title:String) {
           return this.http.post(CONTRACT_API+ 'AddHouse?ownerAddress='+ownerAddress+'&title='+title,null);
        }

}
