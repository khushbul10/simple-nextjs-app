import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  if (!id) return Response.json({ error: "Product ID required" }, { status: 400 });
  const db = await dbConnect("products");
  let product;
  try {
    product = await db.findOne({ _id: new ObjectId(id) });
  } catch (e) {
    return Response.json({ error: "Invalid product ID" }, { status: 400 });
  }
  if (!product) return Response.json({ error: "Product not found" }, { status: 404 });
  return Response.json({ data: product });
}
