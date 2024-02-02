import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { MeshBasicMaterial } from 'three'

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
dracoLoader.setDecoderConfig({ type: 'wasm' })

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true, simplifyMaterial: false }
) {
  const { receiveShadow, castShadow, simplifyMaterial } = options
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'ghost'
        obj.position.set(0, 0, 0)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow

            if (simplifyMaterial) {
              child.material = new MeshBasicMaterial({
                color: child.material.color,
                map: child.material.map
              })
            }
          }
        })
        resolve(obj)
      },
      undefined,
      error => {
        console.error('An error happened during the GLTF model loading:', error)
        reject(error)
      }
    )
  })
}
