import { edges1 } from "./examples/example1";
import { Armor2D } from "./models/Armor2D";


const newArmor2D = new Armor2D(edges1.getData());

console.log(newArmor2D.generateLocals());
console.table(newArmor2D.generateDataArray())
console.table(newArmor2D.generateOrderOfDOF({ isRestrictedAbove: true }))
console.table(newArmor2D.generateDOFPointerInDataArray())
console.table(newArmor2D.buildGlobal())
console.table(newArmor2D.buildForces())
console.table(newArmor2D.splitGlobal())
console.table(newArmor2D.solveDisplacements())
console.table(newArmor2D.solveForces())