import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }
  activeWarehousId;
  typeId;
  saveUsername;
  showProduct:boolean = false;
  specificProducts;
  radioChoise
  types = []

  Warehouses = [
    { id: 1, name: 'Warehous 1' ,
       types : [
    { id: 1, name: 'warehouse 1 type 1' },
    { id: 2, name: 'warehouse 1 type 2 ' },
    { id: 3, name: 'warehouse 1 type 3' },
    { id: 4, name: 'warehouse 1 type 4' },
    { id: 5, name: 'warehouse 1 type 5' },
    { id: 6, name: 'warehouse 1 type 6' },
    { id: 7, name: 'warehouse 1 type 7' },
    { id: 8, name: 'warehouse 1 type 8' },
    ]
        
      

      },

     { 
      id: 2, 
      name: 'Warehous 2' ,
      
      types : [
      { id: 1, name: 'warehouse 2 type 1' },
      { id: 2, name: 'warehouse 2 type 2 ' },
      { id: 3, name: 'warehouse 2 type 3' },
      { id: 4, name: 'warehouse 2 type 4' },
      { id: 5, name: 'warehouse 2 type 5' },
      { id: 6, name: 'warehouse 2 type 6' },
      { id: 7, name: 'warehouse 2 type 7' },
      { id: 8, name: 'warehouse 2 type 8' },
    ]
        
      

      },
      

      { id: 3, name: 'Warehous 3' ,
       types : [
    { id: 1, name: 'warehouse 3 type 1' },
    { id: 2, name: 'warehouse 3 type 2 ' },
    { id: 3, name: 'warehouse 3 type 3' },
    { id: 4, name: 'warehouse 3 type 4' },
    { id: 5, name: 'warehouse 3 type 5' },
    { id: 6, name: 'warehouse 3 type 6' },
    { id: 7, name: 'warehouse 3 type 7' },
    { id: 8, name: 'warehouse 3 type 8' },
    ]
        
      

      },

      { id: 4, name: 'Warehous 4' ,
       types : [
    { id: 1, name: 'warehouse 4 type 1' },
    { id: 2, name: 'warehouse 4 type 2 ' },
    { id: 3, name: 'warehouse 4 type 3' },
    { id: 4, name: 'warehouse 4 type 4' },
    { id: 5, name: 'warehouse 4 type 5' },
    { id: 6, name: 'warehouse 4 type 6' },
    { id: 7, name: 'warehouse 4 type 7' },
    { id: 8, name: 'warehouse 4 type 8' },
    ]
        
      

      },

      { id: 5, name: 'Warehous 5' ,
       types : [
    { id: 1, name: 'warehouse 5 type 1' },
    { id: 2, name: 'warehouse 5 type 2 ' },
    { id: 3, name: 'warehouse 5 type 3' },
    { id: 4, name: 'warehouse 5 type 4' },
    { id: 5, name: 'warehouse 5 type 5' },
    { id: 6, name: 'warehouse 5 type 6' },
    { id: 7, name: 'warehouse 5 type 7' },
    { id: 8, name: 'warehouse 5 type 8' },
    ]
        
      

      },

      { id: 6, name: 'Warehous 6' ,
       types : [
    { id: 1, name: 'warehouse 6 type 1' },
    { id: 2, name: 'warehouse 6 type 2 ' },
    { id: 3, name: 'warehouse 6 type 3' },
    { id: 4, name: 'warehouse 6 type 4' },
    { id: 5, name: 'warehouse 6 type 5' },
    { id: 6, name: 'warehouse 6 type 6' },
    { id: 7, name: 'warehouse 6 type 7' },
    { id: 8, name: 'warehouse 6 type 8' },
    ]
        
      

      },

      { id: 7, name: 'Warehous 7' ,
       types : [
      { id: 1, name: 'warehouse 7 type 1' },
      { id: 2, name: 'warehouse 7 type 2 ' },
      { id: 3, name: 'warehouse 7 type 3' },
      { id: 4, name: 'warehouse 7 type 4' },
      { id: 5, name: 'warehouse 7 type 5' },
    ]
        
      

      },

      { id: 8, name: 'Warehous 8' ,
       types : [
      { id: 1, name: 'warehouse 8 type 1' },
      { id: 2, name: 'warehouse 8 type 2 ' },
      { id: 3, name: 'warehouse 8 type 3' },
      { id: 4, name: 'warehouse 8 type 4' },
      { id: 5, name: 'warehouse 8 type 5' },
      { id: 6, name: 'warehouse 8 type 6' },
      { id: 7, name: 'warehouse 8 type 7' },
      { id: 8, name: 'warehouse 8 type 8' },
    ]
        
      

      },

  ];


products = [
  { id: 1, name: 'products 1', wareHouseId: 1, typeId : 1 },
  { id: 2, name: 'products 2 ', wareHouseId: 1, typeId : 2 },
  { id: 3, name: 'products 3', wareHouseId: 1, typeId : 2 },

  { id: 4, name: 'products 4', wareHouseId: 1, typeId : 3 },
  { id: 5, name: 'products 5', wareHouseId: 1, typeId : 3 },
  { id: 6, name: 'products 6', wareHouseId: 1, typeId : 3 },
  { id: 7, name: 'products 7', wareHouseId: 1, typeId : 3 },
  
  { id: 8, name: 'products 8', wareHouseId: 1, typeId : 4 },
  { id: 9, name: 'products 9', wareHouseId: 1, typeId : 4 },

  { id: 10, name: 'products 10 ', wareHouseId: 2, typeId : 1 },
  { id: 11, name: 'products 11', wareHouseId: 3, typeId : 1  },
  { id: 12, name: 'products 12', wareHouseId: 3, typeId : 1 },
  { id: 13, name: 'products 13', wareHouseId: 3, typeId : 1 },
  { id: 14, name: 'products 14', wareHouseId: 3, typeId : 1 },
  { id: 15, name: 'products 15', wareHouseId: 3, typeId : 1 },
  { id: 16, name: 'products 16', wareHouseId: 3, typeId : 1 },
  { id: 17, name: 'products 17', wareHouseId: 3, typeId : 1 },
  { id: 18, name: 'products 18 ', wareHouseId: 3, typeId :2 },
  { id: 19, name: 'products 19', wareHouseId: 3, typeId : 2 },
  { id: 20, name: 'products 20', wareHouseId: 3, typeId : 2 },
  { id: 21, name: 'products 21', wareHouseId: 3, typeId : 2 },
  { id: 22, name: 'products 22', wareHouseId: 3, typeId : 3 },
  { id: 23, name: 'products 23', wareHouseId: 3, typeId : 3 },
  { id: 24, name: 'products 24', wareHouseId: 5, typeId : 3 },
  { id: 25, name: 'products 25', wareHouseId: 5, typeId : 3 },
  { id: 26, name: 'products 26 ', wareHouseId: 5, typeId : 1 },
  { id: 27, name: 'products 27', wareHouseId: 5, typeId : 1 },
  { id: 28, name: 'products 28', wareHouseId: 5, typeId : 1 },
  { id: 29, name: 'products 29', wareHouseId: 5, typeId : 1 },
  { id: 30, name: 'products 30', wareHouseId: 5, typeId : 1 },
  { id: 31, name: 'products 31', wareHouseId: 5, typeId : 1 },
  { id: 32, name: 'products 32', wareHouseId: 5, typeId : 1 },
];

filteredProducts =[]

  ngOnInit(): void {
  }

  onClear(){
    this.typeId = undefined;
  }

  filter() {
    this.filteredProducts = this.products.filter(res=> {
      return res.wareHouseId === this.activeWarehousId && res.typeId === this.typeId
    });
  }


  log(){
    console.log(this.specificProducts)
  }
 setTypes(){
   if(!this.activeWarehousId){
     this.types = []
   }else{
     this.types = this.Warehouses.filter(res =>  res.id === this.activeWarehousId)[0].types
    }
 
    this.typeId = null
  }
}
