export function normalizeColor(color: string){
    return color == "#000000" ? "#a0a0a0" : color
}


export function clearMessages(){
    let app: HTMLDivElement = <HTMLDivElement> document.querySelector("#app")
    let appElements: number = app.childElementCount

    if( appElements >= 5){
        let lastElement = app.querySelectorAll(".app-item")[0]
        lastElement.classList.remove("fadeIn")
        lastElement.classList.add("fadeOut")

        setTimeout(() => {
            lastElement.remove()
        }, 2100);

    }
}