import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const title = formData.get("title")?.toString();
    const date = formData.get("date")?.toString();
    const text = formData.get("text")?.toString();
    const tagString = formData.get("tags")?.toString();
    const tags = tagString?.split(",")
        .map(str => str.trim())
        .filter(str => str.length > 0);

  try {
    const db = getFirestore(app);
    const blogRef = db.collection("blog");
    await blogRef.add({
        date,
        tags,
        text,
        title
    });
  } catch (error) {
    return new Response("Something went wrong" + error, {
    
      status: 500,
    });
  }
  return redirect("/");
};