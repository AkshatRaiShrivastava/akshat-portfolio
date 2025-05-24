import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("portfolio");
    const result = await db
      .collection("visitors")
      .findOneAndUpdate(
        { _id: "visitor_count" },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" }
      );

    await client.close();
    res.status(200).json({ count: result.value?.count || 1 });
  } catch (error) {
    res.status(500).json({ error: "Failed to update visitor count" });
  }
}
