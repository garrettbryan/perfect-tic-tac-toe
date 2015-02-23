README.md

2/22/2015
  research:
  http://www.mathrec.org/old/2002jan/solutions.html
    -: what are the total number of finished games?
      1: total number of finished games without symetry = 9! = 362880.
        a: What are the different terms that will reduce this?
          1: after rotation and reflection the total number of unique finished games is reduced significantly.
            a: board has eight fold symmetry.
            b: players are symetric.
          2: ending games.
            a: three in a row
            b: board outcome can be predetermined.
      2: combinations after each turn (players symetric). C(n,k) = n!/(k!(n-k)!) for 0 <= k <=n
        a:0 turn C(9,0) = 1
          1 turn C(9,1) = 9
          2 turn C(9,2) = 36
          3 turn C(9,3) = 84
          4 turn C(9,4) = 126
          5 turn C(9,5) = 126
          6 turn C(9,6) = 84
          7 turn C(9,7) = 36
          8 turn C(9,8) = 9
          9 turn C(9,9) = 1
      3: include board symmetry.
        a: x|_|_  first optimal moves. corner optimal use center to add variablity.
           _|x|_
           _|_|_

        b: x|x|_  first move 3 unique moves.
           _|x|_  If computer goes first use one board and a apply a random rotation
           _|_|_    and reflection to hide the algo.
                  minimize calculations:
                    -match the board to an optimal look up table.
                      -3 choices for turn one.
                      -select the matching look up table.
                      -apply vaid transformation.
                      -

                  The best optimal placement of the first piece is either the corner or middle.

        c: x|_|_  second move optimal strategy
           _|o|_
           _|_|_

        d: o|_|_
           _|x|_
           _|_|_

        d: o|x|_
           _|o|_
           o|_|_

    2: The player who goes first cannot win until at least move 5.
