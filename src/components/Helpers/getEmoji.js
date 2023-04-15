
const emojiMap = {
    'cat': ' 🐈‍⬛',
    'movie': ' 📽️',
    'dinner': ' 🍲',
    'food': ' 🍔',
    'dog': ' 🐶',
    'gym': ' 🏋️',
    'code': ' 👨🏼‍💻',
    'walk': ' 🚶',
    'react': ' ⚛️',
    'stupid': ' 🥴',
    'fix': ' 🔧',
    'build': ' 🛠️',
    'coffee': ' ☕️',
    'pizza': ' 🍕',
    'beer': ' 🍺',
    'cocktail': ' 🍸',
    'phone': ' 📱',
    'book': ' 📚',
    'money': ' 💰',
    'heart': ' ❤️',
    'gift': ' 🎁',
    'camera': ' 📷',
    'sun': ' ☀️',
    'moon': ' 🌙',
    'star': ' ⭐️',
    'cloud': ' ☁️',
    'fire': ' 🔥',
    'water': ' 💧',
    'taco': ' 🌮',
    'burrito': ' 🌯',
    'sushi': ' 🍣',
    'bread': ' 🍞',
    'cheese': ' 🧀',
    'icecream': ' 🍦',
    'cupcake': ' 🧁',
    'cookie': ' 🍪',
    'banana': ' 🍌',
    'apple': ' 🍎',
    'orange': ' 🍊',
    'lemon': ' 🍋',
    'pear': ' 🍐',
    'strawberry': ' 🍓',
    'cherries': ' 🍒',
    'peach': ' 🍑',
    'grapes': ' 🍇',
    'watermelon': ' 🍉',
    'pineapple': ' 🍍',
    'kiwi': ' 🥝',
    'avocado': ' 🥑',
    'carrot': ' 🥕',
    'broccoli': ' 🥦',
    'egg': ' 🥚',
    'bacon': ' 🥓'
};

const getEmoji = taskText => {

    let emoji = '';
    for (let keyword in emojiMap) {
    if (taskText.toLowerCase().trim().includes(keyword)) {
        emoji += emojiMap[keyword];
    }
    }
    return emoji;
}

export default getEmoji;

// {Object.keys(emojiMap).map(keyword => task.taskText.toLowerCase().trim().includes(keyword.toLowerCase().trim()) && emojiMap[keyword])}

