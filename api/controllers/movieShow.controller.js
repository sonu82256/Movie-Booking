import Show from "../models/movieShow.model.js";

export const addMovieShow = async (req, res) => {

    const {adminId, movieName, date, time, price, seat} = req.body;
    const newMovie = new Show({adminId, movieName, date, time, price, seat})
    try {
        await newMovie.save();
        res.status(201).json("movie addes successfully");
    } catch (error) {
        res.send("error adding movie" + error);
    }
}

export const getMovieShow = async (req, res) => {
    const allShow = await Show.find();
    res.send(allShow);
}

// export const updateSeat = async (req, res) => {
//     const id = req.params.id;
//     const idx = req.body;
//     try {
//         const currShow = await Show.findByIdAndUpdate(id)(
//             id,
//             {
//                 set: 
//                 {
//                     seat : true,
//                 }
//             }
//         )
//         console.log(currShow)
//         res.send(currShow)
//     } catch (error) {
//         res.send("error updating seat" + error);
//     }  
// }


export const updateSeat = async (req, res) => {
    const { id } = req.params; 
    const { seatIndices } = req.body; 

    try {
        const show = await Show.findById(id);
        if (!show) {
            return res.status(404).json({ message: "Show not found" });
        }

        for (let index of seatIndices) {
            if (index < 0 || index >= show.seats.length) {
                return res.status(400).json({ message: `Invalid seat index: ${index}` });
            }
            show.seats[index] = show.seats[index] === 0 ? 1 : 0;
        }
        await show.save();
        res.json({ message: "Seats updated successfully", seats: show.seats });
    } catch (error) {
        res.status(500).json({ message: "Error updating seats", error: error.message });
    }
};