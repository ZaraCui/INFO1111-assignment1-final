const residents = {
  "101": "Zara Cui",
  "102": "Jasmine Liu",
  "103": "Rebecca Xiong",
  "104": "David Cui",
  "105": "Kangyi Wang"
};

export default function handler(req, res) {
  const { unit } = req.query;
  const name = residents[unit];
  if (name) {
    res.status(200).json({ unit, name });
  } else {
    res.status(404).json({ message: "Resident not found" });
  }
}
