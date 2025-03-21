export default function handler(req, res) {
  const meeting = {
    date: "15 Apr 2025",
    time: "7:00 PM",
    type: "Committee Meeting"
  };
  res.status(200).json({
    message: "Reminder sent!",
    meeting
  });
}
