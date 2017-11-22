import {Mesh, MeshStandardMaterial, Object3D, TorusKnotBufferGeometry} from 'three';

export default class Torus extends Object3D
{
	constructor()
	{
		super();

		const geometry = new TorusKnotBufferGeometry(2, 0.25, 100, 16);
		const material = new MeshStandardMaterial({color: 0xA197C9, roughness: 0.1, metalness: 0.8});
		const mesh = new Mesh(geometry, material);

		this.add(mesh);
	}
}
