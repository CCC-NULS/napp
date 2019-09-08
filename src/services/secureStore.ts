import * as ExpoSecureStore from 'expo-secure-store'
import {StoreService, StoreServiceI} from './store'

export class SecureStoreService extends StoreService implements StoreServiceI {
  static defaultOptions: ExpoSecureStore.SecureStoreOptions = {
    keychainAccessible: ExpoSecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  }

  protected _secureStore: typeof ExpoSecureStore

  constructor(
    namespace: string = SecureStoreService.defaultNamespace,
    secureStore: typeof ExpoSecureStore = ExpoSecureStore,
  ) {
    super(namespace)
    this._secureStore = secureStore
  }

  async put(key: string, value: string): Promise<void> {
    await this._secureStore.setItemAsync(super.getNsKey(key), value)
    await super.put(key, '1')
  }

  async get(key: string): Promise<string | null> {
    return this._secureStore.getItemAsync(super.getNsKey(key))
  }

  async del(key: string): Promise<void> {
    await this._secureStore.deleteItemAsync(super.getNsKey(key))
    await super.del(key)
  }

  async clear(): Promise<void> {
    const keys = await this.getKeys()
    if (keys.length > 0) {
      await Promise.all(keys.map((key: string) => this.del(key)))
      await super.clear()
    }
  }
}

export default new SecureStoreService()
