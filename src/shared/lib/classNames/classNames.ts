
type Mods = Record<string, boolean | string>


export function classNames(cls:string, mode:Mods = {}, additional:string[] = []):string{
    return [
        cls,
        ...additional.filter(Boolean),
        Object.keys(mode)
            .filter((classNames) => !!mode[classNames])
    ].join(' ')
}