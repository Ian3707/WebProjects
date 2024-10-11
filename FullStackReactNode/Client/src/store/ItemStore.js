import {makeAutoObservable} from "mobx";

export default class ItemStore{
    constructor(){
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Телевизоры"},
            {id: 4, name: "Компьютерная техника"},
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Xiaomi"},
            {id: 3, name: "Samsung"},
            {id: 4, name: "Asus"},
            {id: 5, name: "Lenovo"},
            {id: 6, name: "Huawei"},
        ]  
        this._items = [
            {id: 1, name: "Iphone 12 Pro", price: 1000, rating: 4.7, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'},
            {id: 2, name: "Xiaomi Mi 10T", price: 900, rating: 4.9, img: 'https://content2.onliner.by/catalog/device/main/f3f255329df9b291bd4590af9530645d.jpeg'},
            {id: 3, name: "Samsung A72", price: 800, rating: 4.8, img: 'https://content2.onliner.by/catalog/device/main/ec1df71a08b255f01bad0889e0b75ce5.jpeg'},
            {id: 4, name: "Iphone 12 Pro", price: 1000, rating: 4.2, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'},
            {id: 5, name: "Xiaomi Mi 10T", price: 900, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/f3f255329df9b291bd4590af9530645d.jpeg'},
            {id: 6, name: "Samsung A72", price: 800, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/ec1df71a08b255f01bad0889e0b75ce5.jpeg'},
            {id: 7, name: "Iphone 12 Pro", price: 1000, rating: 3.6, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'},
            {id: 8, name: "Xiaomi Mi 10T", price: 900, rating: 4.6, img: 'https://content2.onliner.by/catalog/device/main/f3f255329df9b291bd4590af9530645d.jpeg'},
            {id: 9, name: "Samsung A72", price: 800, rating: 4.5, img: 'https://content2.onliner.by/catalog/device/main/ec1df71a08b255f01bad0889e0b75ce5.jpeg'},
            {id: 10, name: "Iphone 12 Pro", price: 1000, rating: 5, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'},
            {id: 11, name: "Xiaomi Mi 10T", price: 900, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/f3f255329df9b291bd4590af9530645d.jpeg'},
            {id: 12, name: "Samsung A72", price: 800, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/ec1df71a08b255f01bad0889e0b75ce5.jpeg'},
            {id: 13, name: "Iphone 12 Pro", price: 1000, rating: 5, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'},
            {id: 14, name: "Xiaomi Mi 10T", price: 900, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/f3f255329df9b291bd4590af9530645d.jpeg'},
            {id: 15, name: "Samsung A72", price: 800, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/ec1df71a08b255f01bad0889e0b75ce5.jpeg'},
            {id: 16, name: "Iphone 12 Pro", price: 1000, rating: 5, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'},
            {id: 17, name: "Xiaomi Mi 10T", price: 900, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/f3f255329df9b291bd4590af9530645d.jpeg'},
            {id: 18, name: "Samsung A72", price: 800, rating: 5, img: 'https://content2.onliner.by/catalog/device/main/ec1df71a08b255f01bad0889e0b75ce5.jpeg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setItems(items){
        this._items = items
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get items() {
        return this._items
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}