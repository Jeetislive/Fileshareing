import file from "../models/file.model.js"

export const uploadImage = async(req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }

    try {
        const File = await file.create(fileObj);
        res.status(200).json({path: `http://localhost:8000/File/${File._id}`})
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
}

export const downloadImage = async(req,res) => {
    try {
        const File = await file.findById(req.params.FileId)
        console.log(File);
        

        File.downloadContent ++;

        await File.save();

        res.download(File.path, File.name);
    } catch (error) {
        console.error( error.message );
        res.status(500).json({ error: error.message });
    }
}