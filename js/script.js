// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
  $(function() {
    // provide crossword entries in an array of objects like the following example
    // Position refers to the numerical order of an entry. Each position can have
    // two entries: an across entry and a down entry
    var puzzleData = [
      {
        clue: 'In 1965, Sister Mary Kenneth Keller was the first woman to receive a PhD in which discipline (8,7)',
        answer: 'computerscience',
        position: 1,
        orientation: 'across',
        startx: 1,
        starty: 1
      }, {
        clue: 'This physicist coined the term nuclear fission ____ Meitner (4)',
        answer: 'lise',
        position: 6,
        orientation: 'across',
        startx: 4,
        starty: 3
      }, {
        clue: 'What was the \'bug\' found by Grace Hopper? (4)',
        answer: 'moth',
        position: 8,
        orientation: 'across',
        startx: 7,
        starty: 4
      }, {
        clue: 'Mary K Hawes was working at which company when she initiated the development of COBOL in 1959 (9)',
        answer: 'burroughs',
        position: 9,
        orientation: 'across',
        startx: 3,
        starty: 7
      }, {
        clue: 'Heddy Lamar invented the ______ spectrum broadcast communication technology used by wi-fi (6)',
        answer: 'spread',
        position: 11,
        orientation: 'across',
        startx: 7,
        starty: 9
      }, {
        clue: 'Wrote the first computer program (8)',
        answer: 'lovelace',
        position: 15,
        orientation: 'across',
        startx: 1,
        starty: 12
      }, {
        clue: 'Invented the Apple Mac GUI (4)',
        answer: 'kare',
        position: 19,
        orientation: 'across',
        startx: 3,
        starty: 10
      }, {
        clue: 'This astronomer is the director of SETI (6)',
        answer: 'tarter',
        position: 17,
        orientation: 'across',
        startx: 1,
        starty: 15
      }, {
        clue: 'Perlman, the mother of the internet, developed the spanning-tree ________ (8)',
        answer: 'protocol',
        position: 18,
        orientation: 'across',
        startx: 8,
        starty: 15
      }, {
        clue: 'Invented by Grace Hopper to allow computers to be programmed with words (8)',
        answer: 'compiler',
        position: 1,
        orientation: 'down',
        startx: 1,
        starty: 1
      }, {
        clue: 'Element discovered by Marie Curie (8)',
        answer: 'polonium',
        position: 2,
        orientation: 'down',
        startx: 4,
        starty: 1

      }, {
        clue: 'This stain and water repellant was co-invented by Patty O\'Connell Sherman at 3M (10)',
        answer: 'scotchgard',
        position: 3,
        orientation: 'down',
        startx: 9,
        starty: 1
      }, {
        clue: 'Lovelace wrote the first code for Babbage\'s Analytical ______ (6)',
        answer: 'engine',
        position: 4,
        orientation: 'down',
        startx: 12,
        starty:1
      },
       {
        clue: 'and 10 down, Invented the graphical calculator in 1921 (5,6)',
        answer: 'edith',
        position: 5,
        orientation: 'down',
        startx: 15,
        starty: 1
      }, {
        clue: 'Facebook _______ COO Sheryl Sandberg (7)',
        answer: 'employs',
        position: 7,
        orientation: 'down',
        startx: 7,
        starty: 3
      }, {
        clue: 'See 5 down',
        answer: 'clarke',
        position: 10,
        orientation: 'down',
        startx: 15,
        starty: 7
      }, {
        clue: 'The daughter of Marie Curie, this physicist discovered artificial radioactivity, Curie- ______ (6)',
        answer: 'juliet',
        position: 12,
        orientation: 'down',
        startx: 1,
        starty: 10
      }, {
        clue: 'First fully electronic general purpose computer. Programmed by women. (5)',
        answer: 'eniac',
        position: 14,
        orientation: 'down',
        startx: 13,
        starty: 11
      }, {
        clue: 'Turtle ____ is a program designed by a father to teach his daughters the basics of programming (4)',
        answer: 'logo',
        position: 16,
        orientation: 'down',
        startx: 10,
        starty: 12
      }, {
        clue: 'The brand name of poly- paraphenylene terephthalamide, developed by Stephanie Kwolek, at DuPont (6)',
        answer: 'kevlar',
        position: 19,
        orientation: 'down',
        startx: 3,
        starty: 10
      }
    ];

    $('#puzzle-wrapper').crossword(puzzleData);
  })
})(jQuery)
