import { join } from 'path'

export default function () {
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push(
      {
        path: join(__dirname, 'components/elements/buttons'),
        prefix: 'L-Buttons',
      },
      {
        path: join(__dirname, 'components/elements/loading'),
        prefix: 'L-Loading',
      },
    )
  })
}