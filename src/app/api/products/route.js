import dbConnect from "@/lib/dbConnect";


export async function GET(req) {
  const url = new URL(req.url, 'http://localhost');
  const limit = parseInt(url.searchParams.get('limit')) || 0;
  const db = await dbConnect("products");
  let cursor = db.find();
  if (limit > 0) cursor = cursor.limit(limit);
  const data = await cursor.toArray();
  return Response.json({ data });
}

export async function POST(req) {
  const body = await req.json();
  const db = await dbConnect("products");
  const result = await db.insertOne(body);
  return Response.json({ success: true, product: result }, { status: 201 });
}