export const STORAGE_TYPE = {
    local: 'local',
    session: 'session'
} as const;

type StorageType = typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE];

export const STORAGE_KEYS = {
    generator: 'generator',
} as const;

type StorageKeys = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];

const getStorage = (storageType: StorageType): Storage => {
    if (storageType === STORAGE_TYPE.local) {
        return localStorage;
    }
    return sessionStorage;
};

type StorageInstance<T extends string | null> = {
    get: () => T;
    set: (value: T) => void;
    remove: () => void;
};

export const getStorageInstance = <T extends string | null>(storageType: StorageType, key: StorageKeys): StorageInstance<T> => {
    const storage = getStorage(storageType);

    return {
        get: () => storage.getItem(key) as T,
        set: (value) => {
            if (value === null) {
                storage.removeItem(key);
            } else {
                storage.setItem(key, value);
            }
        },
        remove: () => storage.removeItem(key),
    };
}
