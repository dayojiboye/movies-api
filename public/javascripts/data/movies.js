const movies = {
  action: [
    {
      name: 'Extraction',
      duration: '1h 57m',
      genre: 'action',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRELEr5bWH1Z9ZlYjofDbRoW0ToFJop6YlcJuVU8lAYt2peph_n',
      desc:
        'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.',
      year: '2020',
    },
    {
      name: 'The Old Guard',
      duration: '2h 5m',
      genre: 'action/sci-fi',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2z3g2RjEekVFn-HAm9Ro6EtlRjU-7OWxPvMq_tSYKd7JyOEa6',
      desc:
        'A group of mercenaries, all centuries-old immortals with the ablity to heal themselves, discover someone is onto their secret, and they must fight to protect their freedom.',
      year: '2020',
    },
    {
      name: 'Malang',
      duration: '2h 15m',
      genre: 'romance/action',
      imgUrl:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBRhEwZ1Xwgm1YhLgRIY6xJWSG3uXC3qDc6ztOifXTSt-9BNJK',
      desc:
        'Advait and Sara meet at a rave party in Goa and their brief fling blossoms into love. But their story takes a turn for the worse when their lives get entangled with two police officers.',
      year: '2020',
    },
  ],
  horror: [
    {
      name: 'Birdbox',
      duration: '2h 4m',
      genre: 'horror/sci-fi',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0yRbPvSnT2ruclYVGK3n3p-VRaS_0y6S84BcIJNDhmI2cA9gO',
      desc:
        'When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. The survivors must now avoid coming face to face with an entity that takes the form of their worst fears.',
      year: '2018',
    },
    {
      name: 'Cam',
      duration: '1h 35m',
      genre: 'horror',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSdFW1OxevLARct3TeAIpeGve_O6xE3lOp6hF7i4esXsUSwXZo',
      desc:
        'A camgirl has her principles, until a mysterious woman who looks just like her takes over her channel.',
      year: '2018',
    },
    {
      name: 'Malevolent',
      duration: '1h 28m',
      genre: 'horror',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOz2cyGHpIjl0yvlR_6wHBtWlbavCKqXhC4BUDp_rTEXQKpJFf',
      desc:
        'A brother-sister team that fabricates paranormal encounters for cash gets more than it bargains for when it takes a job in an estate with real paranormal activity.',
      year: '2018',
    },
  ],
  'sci-fi': [
    {
      name: 'The Old Guard',
      duration: '2h 5m',
      genre: 'action/sci-fi',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2z3g2RjEekVFn-HAm9Ro6EtlRjU-7OWxPvMq_tSYKd7JyOEa6',
      desc:
        'A group of mercenaries, all centuries-old immortals with the ablity to heal themselves, discover someone is onto their secret, and they must fight to protect their freedom.',
      year: '2020',
    },
    {
      name: 'Train to Busan',
      duration: '2h 1m',
      genre: 'sci-fi',
      imgUrl:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSL7v79L_4drBAwzvXKCaTms0G9gx86N-pbxTCduLStbkr_vZ6M',
      desc:
        "Seok-woo and his daughter are on a train to Busan on the latter's birthday to see his wife. However, the journey turns into a nightmare when they are trapped amidst a zombie outbreak in South Korea.",
      year: '2016',
    },
    {
      name: 'Birdbox',
      duration: '2h 4m',
      genre: 'horror/sci-fi',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0yRbPvSnT2ruclYVGK3n3p-VRaS_0y6S84BcIJNDhmI2cA9gO',
      desc:
        'When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. The survivors must now avoid coming face to face with an entity that takes the form of their worst fears.',
      year: '2018',
    },
  ],
  comedy: [
    {
      name: 'The Wrong Missy',
      duration: '1h 30m',
      genre: 'comedy',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlVAWV0WsEo_k8ixF3t1G7kxsIE3NqYHB8lMN06b1uOJDjTXip',
      desc:
        'Disaster strikes when a man invites his dream girl to an island resort -- but a previous blind date shows up instead.',
      year: '2020',
    },
    {
      name: 'The Lovebirds',
      duration: '1h 27m',
      genre: 'romance/comedy',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuiF0uWyQD9_0OaQqtBCpvQI2sbm7nc2JVO8OIJ0celvUjoeNt',
      desc:
        'On the brink of breaking up, a couple gets unintentionally embroiled in a bizarre murder mystery. As they get closer to clearing their names and solving the case, they need to figure out how they, and their relationship, can survive the night.',
      year: '2020',
    },
    {
      name: 'The Half of it',
      duration: '1h 44m',
      genre: 'comedy',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4OIxCj16itUTjuXIaLpUBlZpujl17kNjb-ixn4UsYi8Oe8JKG',
      desc:
        'A shy, introverted student helps the school jock woo a girl whom, secretly, they both want.',
      year: '2020',
    },
  ],
  romance: [
    {
      name: 'The Lovebirds',
      duration: '1h 27m',
      genre: 'romance/comedy',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuiF0uWyQD9_0OaQqtBCpvQI2sbm7nc2JVO8OIJ0celvUjoeNt',
      desc:
        'On the brink of breaking up, a couple gets unintentionally embroiled in a bizarre murder mystery. As they get closer to clearing their names and solving the case, they need to figure out how they, and their relationship, can survive the night.',
      year: '2020',
    },
    {
      name: 'All the Bright Places',
      duration: '1h 48m',
      genre: 'romance',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlXXV_Tjj3CtcAxtPi5dWW1Puv7HXjsTHvEYhGbg1GdvoSvEvi',
      desc:
        'After meeting each other, two people struggle with the emotional and physical scars of their past. They discover that even the smallest moments can mean something.',
      year: '2020',
    },
    {
      name: 'Malang',
      duration: '2h 15m',
      genre: 'romance/action',
      imgUrl:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBRhEwZ1Xwgm1YhLgRIY6xJWSG3uXC3qDc6ztOifXTSt-9BNJK',
      desc:
        'Advait and Sara meet at a rave party in Goa and their brief fling blossoms into love. But their story takes a turn for the worse when their lives get entangled with two police officers.',
      year: '2020',
    },
  ],
};

module.exports = movies;
