import { join } from 'path'

export default function () {
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push(
      {
        path: join(__dirname, 'components/elements/buttons'),
        prefix: 'L-Buttons',
      },
      {
        path: join(__dirname, 'components/elements/cards'),
        prefix: 'L-Cards',
      },
      {
        path: join(__dirname, 'components/elements/feedback'),
        prefix: 'L-Feedback',
      },
      {
        path: join(__dirname, 'components/elements/headings'),
        prefix: 'L-Headings',
      },
      {
        path: join(__dirname, 'components/elements/links'),
        prefix: 'L-Links',
      },
      {
        path: join(__dirname, 'components/elements/loading'),
        prefix: 'L-Loading',
      },
      {
        path: join(__dirname, 'components/elements/slide-overs'),
        prefix: 'L-Slideovers',
      },
      {
        path: join(__dirname, 'components/elements/steps'),
        prefix: 'L-Steps',
      },
      {
        path: join(__dirname, 'components/elements/tabs'),
        prefix: 'L-Tabs',
      },
    )
  })
}