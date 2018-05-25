import{IProduct} from '../interfaces/product';
import{Injectable} from '@angular/core';
import{BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class ProductService{
    constructor(){

    }
    private _product: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
    get product(){
        return this._product.asObservable();
    } 
    getProduct(){
        return this._product.next(this.getProductFromServer());
    }
    private getProductFromServer(){
            return[{name: 'Node js', image: 'assets/asset-0.png', money:2000},
            {name: 'Lâp trình c', image: 'assets/asset-2.png', money: 10000},
            {name: 'Angular', image: 'assets/asset-3.png',  money: 20000},
            {name: 'Monggo', image: 'assets/asset-5.png',  money: 20000},
            {name: 'Front end cơ bản', image: 'assets/asset-1.png',  money: 20000},
            {name: 'Node js', image: 'assets/asset-0.png', money:2000}]
    }
    searchProduct(keyword:string){
        const product = this.getProductFromServer().filter(p=>p.name.toLowerCase().includes(keyword.toLowerCase()));
        this._product.next(product);
    }
}
