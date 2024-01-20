import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { MeshBasicMaterial } from 'three'

const draco = new DRACOLoader()
draco.setDecoderConfig({ type: 'js' })
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true, simplifyMaterial: false }
) {
  const { receiveShadow, castShadow, simplifyMaterial } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(draco)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'ghost'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
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
      function (error) {
        reject(error)
      }
    )
  })
}
