/**
 * Do not edit directly
 * Generated on Sun, 12 Jun 2022 12:57:40 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "colors": {
    "black": DesignToken,
    "white": DesignToken,
    "red": DesignToken,
    "pink": DesignToken,
    "blue": DesignToken,
    "orange": DesignToken,
    "yellow": DesignToken,
    "purple": DesignToken,
    "green": DesignToken
  },
  "space": {
    "xs": DesignToken,
    "sm": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken
  },
  "borderRadius": {
    "xs": DesignToken,
    "sm": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken
  }
}