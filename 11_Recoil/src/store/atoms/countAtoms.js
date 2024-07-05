import { atom, selector } from "recoil";


export const countAtom = atom({
    key: 'countAtom',
    default: 0
})


export const evenCheckSelector = selector({
    key: 'selector',
    get: ({get}) => {
        const value = get(countAtom)

        if(value % 2 == 0) {
            return 1
        } else {
            return 0
        }
    }
})
