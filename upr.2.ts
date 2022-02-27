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