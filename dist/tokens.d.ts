/**
 * Do not edit directly
 * Generated on Sun, 05 Jun 2022 06:36:25 GMT
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
    "orange": DesignToken
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