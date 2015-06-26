install:
	npm install && \
	npm install -g phantomjs

generate:
	node app & \
	phantomjs ./bin/generate.js |ffmpeg -c:v png -f image2pipe -r 30 -i - -qscale 0 -y ./test/demo.mp4

clean:
	rm ./test/*