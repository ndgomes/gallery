import { getImage } from "~/server/queries";

export default async function FullImagePageView(props: { id: number }) {
  const image = await getImage(props.id);
  return <img src={image.url} alt={image.name} className="w-96" />;
}
