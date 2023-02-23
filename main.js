import './style.css'
import * as THREE from 'three'

// ____ RENDERER ____
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// ____ SCENE & CAMERA ____
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 9999)
camera.position.set(0, 0, 10)
camera.lookAt(new THREE.Vector3(0, 0, 0))

// ____ SHAPES ____



// ____ ANIMATIONS ____
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()

// ____ EVENTS ____
addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
