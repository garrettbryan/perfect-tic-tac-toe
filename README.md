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

    2: The player who goes first cannot win until at least move 5.
