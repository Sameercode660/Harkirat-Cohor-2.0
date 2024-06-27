


const sampleFunction = async(req, res) => {
    try {
        
        res.status(200).json('Secufully served')

    } catch (error) {
        throw new Error(error)
    }
}

export {
    sampleFunction
}