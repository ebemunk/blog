export interface Title {
  type: 'title'
  value: string
}

export interface Quote {
  type: 'quote'
  value: {
    text: string
    attr: string
  }
}

export { Paragraph } from './components/Paragraphs'
