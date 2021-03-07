import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const storage = new Map()

export type StateDestructor = () => void

export type UsePersistentStateTuple<T> = [T, Dispatch<SetStateAction<T>>, StateDestructor]

/* Behaves like useState, but state is persisted after unmount */
export function usePersistentState<K, V>(key: K, initialState: SetStateAction<V>): UsePersistentStateTuple<V> {
	const [state, setState] = useState<V>(storage.get(key) ?? initialState)

	useEffect(() => {
		storage.set(key, state)
	}, [key, state])

	const clear: StateDestructor = () => storage.delete(key)

	return [state, setState, clear]
}
