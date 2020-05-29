export interface Colors {
  foreground: 'black'
  background: 'white'
  gray: '#333'
  graySecondary: '#666'
  grayTertiary: '#999'
}

export interface BoxSizes {
  small: {
    size: 16
    spaceMain: 0.25
    spaceCross: 0.75
  }
  medium: {
    size: 24
    spaceMain: 0.5
    spaceCross: 1
  }
  large: {
    size: 32
    spaceMain: 1
    spaceCross: 1.5
  }
}

export interface Spacings {
  small: 16
  medium: 40
  large: 64
}

export interface Fonts {
  title: 'system-ui, sans-serif'
  heading: 'system-ui, sans-serif'
  body: 'system-ui, sans-serif'
  monospace: 'Menlo, monospace'
}

export interface FontSizes {
  xsmall: 12
  small: 16
  medium: 24
  large: 32
  xlarge: 40
}

export interface FontWeights {
  light: 300
  medium: 600
  heavy: 900
}

export interface LineHeights {
  xsmall: 20
  small: 24
  medium: 32
  large: 40
  xlarge: 48
}

export interface LetterSpacings {
  tight: -0.25
  loose: 0.25
}

export interface TextVariants {
  heading: {
    fontSize: FontSizes['xlarge']
    lineHeight: LineHeights['xlarge']
  }
  headingSecondary: {
    fontSize: FontSizes['large']
    lineHeight: LineHeights['large']
  }
  body: {
    fontSize: FontSizes['medium']
    lineHeight: LineHeights['medium']
  }
  monospace: {
    fontSize: FontSizes['medium']
    lineHeight: LineHeights['medium']
  }
}

export interface Shadows {
  Box: {
    0: '2px 0px 0px gray1'
    1: '2px 0px 0px gray2'
  }
  Text: {
    0: '2px 0px 0px gray1'
    1: '2px 0px 0px gray2'
  }
}
