const outerfunction = () => {
    let name = "Manikumar"
    const innerfunction = () => {
        console.log(name)
    }
    innerfunction()
}

outerfunction()
