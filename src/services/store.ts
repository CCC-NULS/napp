import {AsyncStorage} from 'react-native'

export interface StoreServiceI {
  put(key: string, value: string): Promise<void>
  get(key: string): Promise<string | null>
  del(key: string): Promise<void>
  clear(): Promise<void>
  exists(key: string): Promise<boolean>
  getKeys(): Promise<string[]>
}

export class StoreService implements StoreServiceI {
  static defaultNamespace = 'COMMON'

  protected _namespace: string
  protected _store: typeof AsyncStorage

  constructor(
    namespace: string = StoreService.defaultNamespace,
    store: typeof AsyncStorage = AsyncStorage,
  ) {
    this._namespace = namespace
    this._store = store
  }

  async put(key: string, value: string): Promise<void> {
    await this._store.setItem(this.getNsKey(key), value)
  }

  async get(key: string): Promise<string | null> {
    return this._store.getItem(this.getNsKey(key))
  }

  async del(key: string): Promise<void> {
    await this._store.removeItem(this.getNsKey(key))
  }

  async exists(key: string): Promise<boolean> {
    try {
      return (await this.get(key)) !== null
    } catch (e) {
      return false
    }
  }

  async getKeys(): Promise<string[]> {
    const keys = await this._store.getAllKeys()
    return keys.filter((key: string) => key.indexOf(this._namespace) === 0)
  }

  async clear(): Promise<void> {
    const keys = await this.getKeys()
    if (keys.length > 0) await this._store.multiRemove(keys)
  }

  protected getNsKey(key: string): string {
    return `${this._namespace}__${key}`
  }
}

export default new StoreService()
