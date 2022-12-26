import React from "react";

type TypographyType = {
  title: String;
  description: String;
};

export default function Typography({ title, description }:TypographyType) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
        {description}
      </span>
    </div>
  );
}
