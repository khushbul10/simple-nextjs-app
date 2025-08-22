import dbConnect from "@/lib/dbConnect";


export async function GET() {
  const data = await dbConnect("products").find().toArray();
  return Response.json({ data })
}

export async function POST(req) {
  const body = await req.json();
  const db = await dbConnect("products");
  const result = await db.insertOne(body);
  return Response.json({ success: true, product: result }, { status: 201 });
}