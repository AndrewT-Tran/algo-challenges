class Charity {}
class Bussiness {
    toString() {return 'Give us your money.';}
}
class Restaurant extends Bussiness {
    toString() {return 'Eat at Joe\'s!';}
}
class AutoRepairShop extends Bussiness {}
class Retail extends Bussiness{
    toString() {return 'Buy some stuff!';}
}
class ClothingStore extends Retail {}
class PhoneStore extends Retail{
    toString() {return 'Upgrade your perfectly good phone,now!';}
}


console.log(new PhoneStore().toString());
console.log(new ClothingStore().toString());
console.log(new Restaurant().toString());
console.log(new AutoRepairShop().toString());
console.log(new Charity().toString());