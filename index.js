const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


let services = [
  {
    _id: 1,
    title: "Essential Detail",
    description: "Thorough exterior hand wash, wheel cleaning, tire shine, and glass polish.",
    estimated_time: "2-3 Hours",
    category: "Maintenance",
    img: "DBS.png"
  },
  {
    _id: 2,
    title: "Premium Detail",
    description: "Full exterior wash, clay bar paint decontamination, and interior vacuuming.",
    estimated_time: "4-5 Hours",
    category: "Full Care",
    img: "M3.png"
  },
  {
    _id: 3,
    title: "Elite Detail & Correction",
    description: "Multi-stage paint correction, swirl removal, and high-gloss ceramic paint sealant.",
    estimated_time: "Full Day",
    category: "Paint Correction",
    img: "SVJ.png"
  },
  {
    _id: 4,
    title: "Interior Detail",
    description: "Deep carpet shampoo extraction, leather cleaning, and dashboard conditioning.",
    estimated_time: "3-4 Hours",
    category: "Interior",
    img: "Benz.png"
  },
  {
    _id: 5,
    title: "Exterior Detail",
    description: "Foam cannon wash, paint decontamination, chrome polishing, and protective wax finish.",
    estimated_time: "3 Hours",
    category: "Exterior",
    img: "R8.png"
  },
  {
    _id: 6,
    title: "Full Detail",
    description: "Our comprehensive top-to-bottom package combining exterior correction and interior restoration.",
    estimated_time: "Full Day",
    category: "Complete Restoration",
    img: "gt3rsL.png"
  }
];

app.get("/api/services", (req, res) => {
  res.send(services);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});