import * as THREE from "three";

export class CreateScene {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  // aspect ratio
  aspectRatio = this.WIDTH / this.HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 10000;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  // create teh scene;
  scene = new THREE.Scene();

  constructor() {
    this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
    this.createCamera();
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(this.fieldOfView, this.aspectRatio, this.nearPlane, this.farPlane);
    // Set the position of the camera
    this.camera.position.x = 0;
    this.camera.position.z = 200;
    this.camera.position.y = 100;
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      // Allow transparency to show the gradient background
      // we defined in the CSS
      alpha: true,
      // Activate the anti-aliasing; this is less performat,
      // but, as our project is low-poly based, it should be fine :)
      antialias: true,
    });
    this.renderer.setSize(this.WIDTH, this.HEIGHT);

    // Enable shadow rendering
    this.renderer.shadowMap.enabled = true;
  }
}
