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

  const title = item.title.replace(regex, HIGHLIGHT_TEMPLATE);
  const description = item.description.replace(regex, HIGHLIGHT_TEMPLATE);

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
