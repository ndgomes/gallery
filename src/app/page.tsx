import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/600c6c80-1e4b-4c4e-a5dd-65942cd75d56-oqm6nl.jpg",
  "https://utfs.io/f/d667b319-d4c3-44ac-9a4d-5045c5eea8d0-omw0vc.jpg",
  "https://utfs.io/f/df34cde7-f8e4-4384-9a21-31c8fae16868-qdzgmz.jpg",
  "https://utfs.io/f/83d6bb03-ab3a-4d5b-89db-40184cb71764-ifu5s6.jpg",
  "https://utfs.io/f/81db3c91-55b0-493f-a324-77469c747aa7-4h6zxc.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-4">
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
