const motivationalQuotes = ['Change the world by being yourself.',
'Every moment is a fresh beginning.',
'Never regret anything that made you smile.',
'Die with memories, not dreams.',
'Aspire to inspire before we expire.',
'Everything you can imagine is real.']

function randomizer(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

console.log(randomizer(motivationalQuotes));