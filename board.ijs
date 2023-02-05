load 'graphics/png'
NB. ~. ,/ 256 256 256 #: readpng 'pics/board.png' NB. retrieve colours
NB. target width W and color palette C.
W =: 1000 [ C =: 196 212 218 ,: 144 175 184
'pics/board.png' writepng~ C{~,"_1/^:2 (,~W%8)&$"0] 2|+/~i.8
