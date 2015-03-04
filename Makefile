test:
	phantomjs test.js |ffmpeg -c:v png -f image2pipe -r 30 -i - -qscale 0 -y test.mp4
