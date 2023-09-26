

export function getQueryParams(params: OptionalRecord<string, string | undefined>) {

    const searchParams = new URLSearchParams(window.location.search)
    Object.entries(params).forEach(([name, value]) => {
        if(value){
            searchParams.set(name, value)
        }
    })

    return `?${searchParams.toString()}`

}

/**
 * Функция добавления парметров стhоки запроса в URL.
 * @param params 
 */

export function addQueryParams(params: OptionalRecord<string, string>){
    window.history.pushState(null, '', getQueryParams(params))
}