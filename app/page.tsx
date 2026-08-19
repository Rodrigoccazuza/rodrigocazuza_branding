import { brandMarkup, brandScript } from "./brand-content";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: brandMarkup }} />
      <script dangerouslySetInnerHTML={{ __html: brandScript }} />
    </>
  );
}
