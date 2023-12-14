var arrayQuotes = [
    {
    'quote': 'Be yourself; everyone else is already taken.',
    'quoted': 'Oscar Wilde'
    },
    {
    'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'quoted': 'Albert Einstein'
    },
    {
    'quote': 'The best revenge is massive success.',
    'quoted': 'Frank Sinatra'
    },
    {
    'quote': 'A room without books is like a body without a soul.',
    'quoted': 'Marcus Tullius Cicero'
    },
    {
    'quote': 'You only live once, but if you do it right, once is enough.',
    'quoted': 'Mae West'
    },
    {
    'quote': 'So many books, so little time.',
    'quoted': 'Frank Zappa'
    },
    {
    'quote': 'Be the change that you wish to see in the world.',
    'quoted': 'Mahatma Gandhi'
    },
    {
    'quote': 'If you tell the truth, you don\'t have to remember anything.',
    'quoted': 'Mark Twain'
    },
];
function printQuote(){
    var random = Number.parseInt(Math.random()*arrayQuotes.length+1);
    document.getElementById('quote').textContent = `\' \' ${arrayQuotes[random].quote}\' \'`;
    document.getElementById('quoted').textContent = `-- ${arrayQuotes[random].quoted} --`;
    
}