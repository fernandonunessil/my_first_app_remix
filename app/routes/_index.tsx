import type { MetaFunction } from "@remix-run/node";

import PrLogotype from "public/PH.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Profession Hub" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <div className="w-full text-center p-6">
      <h1 className="text-3xl">Bem vindo ao Profession Hub</h1>
      <p className="text-lg text-justify p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        adipisci quidem nulla eius repudiandae alias facilis accusamus
        asperiores aut ut obcaecati vel unde pariatur, sunt, aliquam ea impedit.
        Rem, praesentium! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Incidunt nobis dolor, minus cum, quam nam rem perferendis fugiat
        illum a magni atque delectus itaque culpa explicabo modi beatae maiores?
        Sint! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        omnis dicta quod! Perspiciatis est deleniti optio, facere recusandae
        ullam minima. Corrupti asperiores molestiae nisi nesciunt, recusandae
        vel modi facilis dolorem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi repellendus, nihil veritatis at tempora
        ducimus non inventore ea, assumenda maiores reiciendis nam dignissimos
        accusantium facilis quasi, saepe ratione ad quaerat.
      </p>
      <div className="flex items-center justify-center p-6">
        <img src={PrLogotype} alt="PR logo" />
      </div>
    </div>
  );
}
