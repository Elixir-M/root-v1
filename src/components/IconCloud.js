"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 0.4,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();
  const currentTheme = theme || "dark";

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    // Use white for dark mode, black for light mode
    const monochromeColor = currentTheme === "light" ? "#000000" : "#ffffff";
    const bgHex = currentTheme === "light" ? "#f3f2ef" : "#080510";

    return Object.values(data.simpleIcons).map((icon) => {
      // Create a modified icon object with our monochrome color
      const monochromeIcon = {
        ...icon,
        hex: monochromeColor.replace('#', ''),
        path: icon.path
      };

      return renderSimpleIcon({
        icon: monochromeIcon,
        bgHex,
        fallbackHex: monochromeColor,
        minContrastRatio: 2,
        size: 28,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e) => e.preventDefault(),
        },
      });
    });
  }, [data, currentTheme]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}