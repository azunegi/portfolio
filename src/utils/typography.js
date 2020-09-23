import Typography from 'typography'
import theme from 'typography-theme-github' // テーマのインポート

theme.headerFontFamily = ['M PLUS 1p', 'Roboto', 'serif']
theme.bodyFontFamily = ['M PLUS 1p', 'Roboto', 'serif']
theme.googleFonts = [
  {
    name: 'Ubuntu',
    styles: ['500'],
  }
]

const typography = new Typography(theme)

export default typography