/*
Да се опише Enum, който да съдържа възможни стойности за материал. Нека те да са примерно Glass, Plastic и Ceramic.
Да се създаде интерфейс Breakable, който да изисква да се дефинира пропърти кръстено material - от тип горния енъм. Да изисква и да се имплементира функция, която се казва break.
Да направим три класа - CeramicMug, PlasticMug и GlassMug - всеки имплементира Breakable. В конструктора на всеки клас да се зададе правилния материал за конкретния клас. В имплементациите на break функцията да излиза някакво съобщение, свързано с конкретния материал.

Да създадем един масив където има по едно копие от обект от тези трите класа т.е. един CeramicMug, един PlasticMug и един GlassMug.
С forEach да извикаме всичките break функции. С find да намерим само GlassMug-а. С map да създадем нов масив, където за всяка чаша остава само материала от който е направена т.е. [Enum.Ceramic, Enum.Plastic, Enum.Glass].
 */
enum Materials {
    Glass = "Glass",
    Plastic = "Plastic",
    Ceramic = "Ceramic"
}

interface Breakable {
    material:Materials;
    break: () =>{};
}

class CeramicMug implements Breakable{
    material:Materials;
    constructor() {
        this.material = Materials.Ceramic;
    }
    break() :string {
        return "This is mug of ceramic";
    }
}

class PlasticMug implements Breakable{
    material: Materials;
    constructor() {
        this.material=Materials.Plastic;
    }
    break() :string {
        return "This is mug of plastic ";
    };

}

class GlassMug implements Breakable {
    material: Materials;
    constructor() {
        this.material = Materials.Glass
    }
    break() :string {
        return "This is mug of glass ";
    };
}

let MugOfCeramic = new CeramicMug();
let MugOfPlastic = new PlasticMug();
let MugOfGlass = new GlassMug();
console.log(MugOfCeramic);
console.log(MugOfPlastic);
console.log(MugOfGlass);
console.log(" ")

let Mugs = [MugOfCeramic,MugOfPlastic,MugOfGlass];

Mugs.forEach((Mug) =>{
    console.log(Mug.break());
});

console.log(" ");

let glassMug = Mugs.find((mug) => {
    if(mug.material === Materials.Glass){
        return mug
    }
});
console.log(glassMug);
console.log(" ");

let mugMaterial = Mugs.map((mug) => mug.material)
console.log(mugMaterial);