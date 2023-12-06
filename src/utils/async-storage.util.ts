import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItemAsyncStorage = async <T>({
  key,
  data,
}: {
  key: string
  data: T
}): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(data))
}

export const getItemAsyncStorage = async <T>(
  key: string,
): Promise<T | null> => {
  const data = await AsyncStorage.getItem(key)
  if (data === null) return null
  return JSON.parse(data) as T
}

export const deleteItemAsyncStorage = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key)
}
