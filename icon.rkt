#lang racket

(require pict
         racket/draw
         file/convertible)

(define bg '(255 220 160))
(define r '(255 13 77))
(define y '(255 154 49))
(define b '(17 126 255))

(define (letter l)
  (text (string l) '(bold . "APL385 Unicode") 18))

(define flav.ico
  (cc-superimpose (colorize (filled-rectangle 32 32) bg)
                  (hc-append (colorize (letter #\F) r)
                             (colorize (letter #\E) y)
                             (colorize (letter #\N) b))))

(define (main)
  (define icon.png "icon.png")
  (when (file-exists? icon.png)
    (delete-file icon.png))
  (with-output-to-file icon.png
    (lambda ()
      (display
       (convert flav.ico 'png-bytes)))))

flav.ico
