const exec = require('executive')
const ghrepo = require('ghrepo')
const execspawn = require('npm-execspawn')

module.exports = {
  push () {
    exec('git push -u origin master')
  },
  status () {
    exec('git status')
  },
  init () {
    const child = execspawn(`${ghrepo} -m "First commit @bookiza"`)

    child.stderr.pipe(process.stderr)
    child.stdout.pipe(process.stdout)
  }
}
