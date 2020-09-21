import {atom} from "recoil"

export const userAtom = atom({
    key: "user",
    default: {}
})

export const moviesAtom = atom({
    key: "movies",
    default: []
})