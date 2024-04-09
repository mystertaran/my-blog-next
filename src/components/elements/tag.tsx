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
    if (typeof name === 'string') {
        names = [name]; 
    } else if (Array.isArray(name)) {
        names = name;
    } else {
        console.error('name is not a string or an array:', name);
        return null;
    }

    const cleanNames = names.map(tag => tag.replace(/\r/g, ''));
    const tags = cleanNames.flatMap(name => name.trim().split(" "));
    const tagsWithHash = tags.filter(tag => tag.trim() !== '').map(tag => `#${tag}`);
    const tagsString = tagsWithHash.join(', ');

    return (
        <Link href={link} passHref>
            <span className={c("inline-block", props.className)}>{tagsString}</span>
        </Link>
    );
};

export default Tag;