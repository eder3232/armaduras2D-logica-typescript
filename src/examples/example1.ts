import { Edges } from "../models/Edges";
import { Vertices } from "../models/Vertices";

const vertices1 = new Vertices()

vertices1.add({
  id: 'v1',
  coordinates: { x: 0, z: 0 },
  forces: { x: 0, z: 0 },
  displacements: { x: 0, z: 0 },
  isRestricted: { x: true, z: true },
  springs: { x: 0, z: 0 },
  userDOF: { x: 7, z: 8 },
})
vertices1.add({
  id: 'v2',
  coordinates: { x: 3, z: 0 },
  forces: { x: 0, z: 0 },
  displacements: { x: 0, z: 0 },
  isRestricted: { x: true, z: true },
  springs: { x: 0, z: 0 },
  userDOF: { x: 5, z: 6 },
})
vertices1.add({
  id: 'v3',
  coordinates: { x: 0, z: 4 },
  forces: { x: 4.8, z: -6.4 },
  displacements: { x: 0, z: 0 },
  isRestricted: { x: false, z: false },
  springs: { x: 0, z: 0 },
  userDOF: { x: 3, z: 4 },
})
vertices1.add({
  id: 'v4',
  coordinates: { x: 3, z: 4 },
  forces: { x: 0, z: -6 },
  displacements: { x: 0, z: 0 },
  isRestricted: { x: false, z: false },
  springs: { x: 0, z: 0 },
  userDOF: { x: 1, z: 2 },
})

export const edges1 = new Edges(vertices1.getData())

edges1.add({
  id: 'e1',
  from: 'v1',
  to: 'v2',
  area: 10 * 10 ** -4,
  elasticity: 2 * 10 ** 7
})
edges1.add({
  id: 'e2',
  from: 'v3',
  to: 'v4',
  area: 10 * 10 ** -4,
  elasticity: 2 * 10 ** 7
})
edges1.add({
  id: 'e3',
  from: 'v1',
  to: 'v3',
  area: 10 * 10 ** -4,
  elasticity: 2 * 10 ** 7
})
edges1.add({
  id: 'e4',
  from: 'v2',
  to: 'v4',
  area: 10 * 10 ** -4,
  elasticity: 2 * 10 ** 7
})
edges1.add({
  id: 'e5',
  from: 'v1',
  to: 'v4',
  area: 10 * 10 ** -4,
  elasticity: 2 * 10 ** 7
})
edges1.add({
  id: 'e6',
  from: 'v2',
  to: 'v3',
  area: 10 * 10 ** -4,
  elasticity: 2 * 10 ** 7
})