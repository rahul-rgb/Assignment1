import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.component.html',
  styleUrls: ['./online-shop.component.css']
})
export class OnlineShopComponent {
  public categories = ['Electronics', 'Shoes'];
    public electronics = ['mobile', 'samsung tv', 'Micromax'];
    public shoes = ['nike', 'puma'];
    public selectedProducts = [];
    public selectCategory;
    public productData = [
        {
          Name: 'samsung tv',
          Price: 45000,
          Photo: 'assets/tv.jpg'
        },
        {
          Name: 'mobile',
          Price: 15000,
          Photo: 'assets/mobile.jpg'
        },
        {
          Name: 'Micromax',
          Price: 10000,
          Photo: 'assets/mobile.jpg'
        },
        {
          Name: 'nike',
          Price: 4000,
          Photo: 'assets/nike.webp'
        },
        {
          Name: 'puma',
          Price: 4500,
          Photo: 'assets/puma.jpg'
        }
    ]
    public selectedProduct;
    public searchResults = [];
    public prodName = '';
    public prodPrice = 0;
    public prodPhoto = '';
    public cartItems = [];
    public isCartVisible = false;
    public cartItemsCount = 0;
    public CategoryChanged(){
      switch(this.selectCategory){
        case 'Electronics':
          this.selectedProducts = this.electronics;
          break;
          case 'Shoes':
          this.selectedProducts = this.shoes;
          break;
      }
    }

    public ProductChanged(){
        this.searchResults = this.productData.filter(x=>x.Name==this.selectedProduct);
        this.prodName = this.searchResults[0].Name;
        this.prodPrice = this.searchResults[0].Price;
        this.prodPhoto = this.searchResults[0].Photo;
    }

    public AddToCart(){
      this.cartItems.push(this.searchResults[0]);
      this.cartItems.length;
    }

    public DeleteCartItem(index){
      let status = confirm('are you sure, want to delete?');
      if(status == true){
          this.cartItems.splice(index, 1);
          this.cartItemsCount = this.cartItems.length;
      }
    }

    public showCart(){
      this.isCartVisible = (this.isCartVisible == false)?true:false;
    }
}
