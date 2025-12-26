"use client";

import { FC, ReactEventHandler, useEffect, useRef } from "react";

export interface ICustomImage {
  className: string;
  isLoadingClassName?: string;
  src: string;
  loading: "eager" | "lazy" | undefined;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

const CustomImage: FC<ICustomImage> = ({
  className,
  src,
  loading,
  alt,
  width,
  height,
  isLoadingClassName,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isLoadingClassName) return;

    const img = document.querySelector(`.${className}`) as HTMLImageElement;
    if (img?.complete) {
      img.classList.remove(isLoadingClassName);
      return;
    }

    img.addEventListener("load", () => {
      img.classList.remove(isLoadingClassName);
    });
  }, []);

  return (
    <img
      ref={imgRef}
      className={`${className} ${isLoadingClassName}`}
      src={src}
      loading={loading}
      alt={alt}
      width={width}
      height={height}
    ></img>
  );
};

export default CustomImage;
