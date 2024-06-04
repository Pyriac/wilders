import chalk from 'chalk';

const wilders = ['Alex', 'Anaïs', 'Anthony', 'Antoine', 'Aïssatou', 'Baptiste', 'Benjamin', 'Charlotte', 'Christian', 'Clement', 'Cyriac', 'Damien',
    'Daniel', 'David', 'Davido', 'Dijan', 'Ewan', 'Geoffrey', 'Guillaume', 'Mathieu', 'Monica', 'Rosa', 'Samih', 'Sarah']

const colors = [chalk.blue, chalk.red, chalk.green, chalk.yellow]


colors.forEach(color => {
    let wilder = wilders[(Math.floor(Math.random() * wilders.length))]
    console.log(color(wilder));
});

// console.log(chalk.blue('Baptise'));
// console.log(chalk.red('Sarah'));
// console.log(chalk.green('Ewan'));
// console.log(chalk.yellow('Charlotte'));