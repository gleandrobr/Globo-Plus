// Movie
const USER_FAVORITES_MOVIE = 1
const MOVIE_ACTION = 1
const MOVIE_ADVENTURE = 2

// new
const USER_FAVORITES_NEWS = 2
const NEWS_POLICY = 1
const NEWS_FAMOUS = 1

// cook
const USER_FAVORITES_COOK = 3
const COOK_CANDIES = 1
const COOK_SALTED = 2

// music
const USER_FAVORITES_MUSIC = 4
const MUSIC_ELETRONIC = 1
const MUSIC_RAP = 2

// sports
const USER_FAVORITES_SPORT = 5
const SPORT_FUTEBOL = 1
const SPORT_BASKET = 2

// tech
const USER_FAVORITES_TECH = 6
const TECH_CELLPHONE = 1
const TECH_GAME = 2

exports.CATEGORIES_INFO = {
  [USER_FAVORITES_MOVIE]: {
    name: 'Filme'
  },
  [USER_FAVORITES_NEWS]: {
    name: 'Notícias'
  },
  [USER_FAVORITES_COOK]: {
    name: 'Cozinha'
  },
  [USER_FAVORITES_MUSIC]: {
    name: 'Músicas'
  },
  [USER_FAVORITES_SPORT]: {
    name: 'Esportes'
  },
  [USER_FAVORITES_TECH]: {
    name: 'Tech'
  }
}

exports.CATEGORIES = {
  [USER_FAVORITES_MOVIE]: {
    [MOVIE_ACTION]: {
      name: 'Ação'
    },
    [MOVIE_ADVENTURE]: {
      name: 'Aventura'
    }
  },
  [USER_FAVORITES_NEWS]: {
    [NEWS_POLICY]: {
      name: 'Politica'
    },
    [NEWS_FAMOUS]: {
      name: 'Famosos'
    }
  },
  [USER_FAVORITES_COOK]: {
    [COOK_CANDIES]: {
      name: 'Doces'
    },
    [COOK_SALTED]: {
      name: 'Salgados'
    }
  },
  [USER_FAVORITES_MUSIC]: {
    [MUSIC_ELETRONIC]: {
      name: 'Eletronica'
    },
    [MUSIC_RAP]: {
      name: 'Rap'
    }
  },
  [USER_FAVORITES_SPORT]: {
    [SPORT_FUTEBOL]: {
      name: 'Futebol'
    },
    [SPORT_BASKET]: {
      name: 'Basquete'
    }
  },
  [USER_FAVORITES_TECH]: {
    [TECH_CELLPHONE]: {
      name: 'Celular'
    },
    [TECH_GAME]: {
      name: 'Jogos'
    }
  }
}

exports.USER_FAVORITES_MOVIE = USER_FAVORITES_MOVIE
exports.MOVIE_ACTION = MOVIE_ACTION
exports.MOVIE_ADVENTURE = MOVIE_ADVENTURE
exports.USER_FAVORITES_NEWS = USER_FAVORITES_NEWS
exports.NEWS_POLICY = NEWS_POLICY
exports.NEWS_FAMOUS = NEWS_FAMOUS
exports.USER_FAVORITES_COOK = USER_FAVORITES_COOK
exports.COOK_CANDIES = COOK_CANDIES
exports.COOK_SALTED = COOK_SALTED
exports.USER_FAVORITES_MUSIC = USER_FAVORITES_MUSIC
exports.MUSIC_ELETRONIC = MUSIC_ELETRONIC
exports.MUSIC_RAP = MUSIC_RAP
exports.USER_FAVORITES_SPORT = USER_FAVORITES_SPORT
exports.SPORT_FUTEBOL = SPORT_FUTEBOL
exports.SPORT_BASKET = SPORT_BASKET
exports.USER_FAVORITES_TECH = USER_FAVORITES_TECH
exports.TECH_CELLPHONE = TECH_CELLPHONE
exports.TECH_GAME = TECH_GAME