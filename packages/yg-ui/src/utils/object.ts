import { DeepMergeTwoTypes } from './type'

// inspired by https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6#gistcomment-3588880
export function mergeDeep<A, B>(
  target: any,
  source: any,
): DeepMergeTwoTypes<A, B> {
  for (const key of Object.keys(source)) {
    const currenttarget = target[key]
    const currentsource = source[key]

    if (currenttarget) {
      const objectsource = typeof currentsource === 'object'
      const objecttarget = typeof currenttarget === 'object'

      if (objectsource && objecttarget) {
        Array.isArray(currenttarget) && Array.isArray(currentsource)
          ? (target[key] = currenttarget.concat(currentsource))
          : mergeDeep(currenttarget, currentsource)

        continue
      }
    }

    target[key] = currentsource
  }

  return target
}

export function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item)
}
