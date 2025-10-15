import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await addDoc(collection(db, "rsvps"), req.body);
      return res.status(200).json({ message: "RSVP saved!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to save RSVP" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}