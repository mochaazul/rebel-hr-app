
import React from "react";

// Custom Text Component Interface
// if you need to add new props please change the corresponding interface
// This is for HEADING ELEMENT
export interface TextHeadingInterface extends React.HTMLAttributes<HTMLHeadingElement>{
  text?: string
}

export interface TextParagraphInterface extends React.HTMLAttributes<HTMLHeadingElement>{
  text?: string
}
