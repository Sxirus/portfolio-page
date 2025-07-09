export const prerender = false;
import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const title = formData.get("title")?.toString();
    const date = formData.get("date")?.toString();
    const text = formData.get("text")?.toString();
    const tags = formData.get("tags")?.toString();
    const result = tags?.split(",")
        .map(str => str.trim())
        .filter(str => str.length > 0);

  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("blog");
    await friendsRef.add({
        date,
        result,
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