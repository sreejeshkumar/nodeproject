const product = require("../model/product")


const addlist = async (req, res, next) => {
    const { name, description, price, image } = req.body
    let list;
    try {
        list = new product({
            name: name,
            description: description,
            price: price,
            image: image

        })

        await list.save()
    } catch (err) {
        console.log(err);
    }

    if (!list) {
        return res.status(500).json({ message: "unable to add" })
    } else {
        return res.status(201).json({ list })
    }
}


const updatelist = async (req, res, next) => {
    const id = req.params.id
    const { name, description, price, image } = req.body
    let list;
    try {
        list = await product.findByIdAndUpdate(id, {
            name: name,
            description: description,
            price: price,
            image: image

        })
        list = await list.save()
    } catch (err) {
        console.log(err);
    }

    if (!list) {
        return res.status(500).json({ message: "unable to update" })
    } else {
        return res.status(200).json({ list })
    }

}

const deletelist = async (req, res, next) => {
    const id = req.params.id
    let list;
    try {
        list = await product.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }

    if (!list) {
        return res.status(500).json({ message: "unable to delete" })
    } else {
        return res.status(200).json({ message: "delete" })
    }


}


exports.addlist = addlist
exports.updatelist = updatelist
exports.deletelist = deletelist