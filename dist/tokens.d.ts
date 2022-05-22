/**
 * Do not edit directly
 * Generated on Sun, 22 May 2022 11:26:37 GMT
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
    "pink": DesignToken
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