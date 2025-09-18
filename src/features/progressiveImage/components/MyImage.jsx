import { useEffect, useState } from "react";

const MyImage = ({ src, placeholderSrc, width = "100%", ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);

  const cn = `progressive ${
    imageSrc === placeholderSrc ? "loading" : "loaded"
  }`;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <img
      className={cn}
      src={imageSrc}
      alt={props.alt || ""}
      width={width}
      {...props}
    />
  );
};

export { MyImage };
