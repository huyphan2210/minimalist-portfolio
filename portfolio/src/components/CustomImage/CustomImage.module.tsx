"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, ReactEventHandler } from "react";

export interface ICustomImage {
  className: string;
  isLoadingClassName?: string;
  src: string | StaticImport;
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
  const handleImageAfterLoaded: ReactEventHandler<HTMLImageElement> = (
    event
  ) => {
    if (!isLoadingClassName) {
      return;
    }

    const image = event.target as HTMLImageElement;
    image.classList.remove(isLoadingClassName);
  };

  return (
    <Image
      className={`${className} ${isLoadingClassName}`}
      src={src}
      loading={loading}
      alt={alt}
      width={width}
      height={height}
      onLoad={handleImageAfterLoaded}
    ></Image>
  );
};

export default CustomImage;
