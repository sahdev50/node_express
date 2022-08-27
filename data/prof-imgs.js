const imageArr = ()=>{
    imgs = []
    for (let i = 0; i < 15; i++) {
        imgs.push(`/images/${i}.jpg`)
    }
    return imgs
}

const imgData = imageArr()

module.exports = imgData