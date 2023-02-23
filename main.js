import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// ____ RENDERER ____
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// ____ SCENE & CAMERA ____
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 9999)
new OrbitControls(camera, renderer.domElement)
camera.position.set(0, -20, 10)
camera.lookAt(new THREE.Vector3(0, 0, 0))

// ____ PLANE ____
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({
    color: 0x3c3c3c,
    side: THREE.DoubleSide,
  })
)
scene.add(plane)

// ____ SHAPES ____
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.set(-5, -5, 1)
scene.add(cube1)
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.set(-5, 0, 1)
scene.add(cube2)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.set(-5, 5, 1)
scene.add(cube3)
const cube4 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
)
cube4.position.set(0, -5, 1)
scene.add(cube4)
const cube5 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x00ffff })
)
cube5.position.set(0, 0, 1)
scene.add(cube5)
const cube6 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
)
cube6.position.set(0, 5, 1)
scene.add(cube6)
const cube7 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
)
cube7.position.set(5, -5, 1)
scene.add(cube7)
const cube8 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x99ffdd })
)
cube8.position.set(5, 0, 1)
scene.add(cube8)
const cube9 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x999999 })
)
cube9.position.set(5, 5, 1)
scene.add(cube9)


// ____ ANIMATIONS ____
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  cube1.rotation.z += 0.01
  cube2.rotation.z += 0.01
  cube3.rotation.z += 0.01
  cube4.rotation.z += 0.01
  cube5.rotation.z += 0.01
  cube6.rotation.z += 0.01
  cube7.rotation.z += 0.01
  cube8.rotation.z += 0.01
  cube9.rotation.z += 0.01
}

animate()

// ____ EVENTS ____
addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
