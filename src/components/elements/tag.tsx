import React from "react";
import Link from "next/link";
import { c } from "../../utils";

interface TagProps {
  link?: string;
  name: string | string[];
  className?: string;
}

const Tag: React.FC<TagProps> = ({ link = "#", name, ...props }) => {
  let names: string[] = [];
  if (typeof name === "string") {
    names = [name];
  } else if (Array.isArray(name)) {
    names = name;
  } else {
    console.error("name is not a string or an array:", name);
    return null;
  }

  const cleanNames = names.map((tag) => tag.replace(/\r/g, ""));
  const tags = cleanNames.flatMap((name) => name.trim().split(" "));
  const tagsWithHash = tags
    .filter((tag) => tag.trim() !== "")
    .map((tag) => `#${tag}`);

  return (
    <Link href={link} passHref>
      {tagsWithHash.map((tag, index) => (
        <span
          key={index}
          className={c(
            "font semibold ease mr-2 inline-block rounded-full border-2 border-solid border-light bg-dark px-5 py-3 capitalize text-light transition-all duration-200 hover:scale-105",
            props.className,
          )}
        >
          {tag}
        </span>
      ))}
    </Link>
  );
};

export default Tag;
