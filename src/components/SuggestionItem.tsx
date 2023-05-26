import React, { useMemo } from "react";
import { Product } from "../App";

interface Props {
  item: Product;
  searchTerm: string;
}

const HIGHLIGHT_TEMPLATE = `<span class='highlighted'>$1</span>`;

export default function SuggestionItem({ item, searchTerm }: Props) {
  const regex = useMemo(
    () => new RegExp(`(${searchTerm})`, "gi"),
    [searchTerm]
  );

  const title = useMemo(
    () => item.title.replace(regex, HIGHLIGHT_TEMPLATE),
    [item.title, regex]
  );
  const description = useMemo(
    () => item.description.replace(regex, HIGHLIGHT_TEMPLATE),
    [item.description, regex]
  );

  return (
    <div key={item.id} className="suggestion-item">
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="suggestion-title"
        />
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="suggestion-desctiption"
        />
      </div>
      <img
        src={item.thumbnail}
        width={50}
        height={50}
        alt={item.title}
        className="product-image"
      />
    </div>
  );
}
