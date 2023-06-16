.PHONY : FANS.zip

FANS.zip :
	rm -f $@
	zip -r $@ .
