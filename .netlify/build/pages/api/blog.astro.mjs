import { a as app } from '../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const date = formData.get("date")?.toString();
  const text = formData.get("text")?.toString();
  const tags = formData.get("tags")?.toString();
  const result = tags?.split(",").map((str) => str.trim()).filter((str) => str.length > 0);
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
      status: 500
    });
  }
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
