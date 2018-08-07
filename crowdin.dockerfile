FROM openjdk:11
# copied from https://github.com/meisterplan/docker-crowdin-cli/blob/master/Dockerfile
# Doc from crowdin-cli https://support.crowdin.com/cli-tool/
ENV CROWDIN_VERSION=2.0-22

RUN apt-get update && \
    apt-get install -y make git && \
    apt-get clean
RUN wget -qO - https://artifacts.crowdin.com/repo/GPG-KEY-crowdin | apt-key add -
RUN echo "deb https://artifacts.crowdin.com/repo/deb/ /" > /etc/apt/sources.list.d/crowdin.list
RUN apt-get update && \
    apt-get install -y crowdin=${CROWDIN_VERSION} && \
    apt-get clean
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ADD update-trads.sh update-trads.sh
RUN chmod +x update-trads.sh
ADD crowdin.yml crowdin.yml
ENTRYPOINT ["/usr/src/app/update-trads.sh"]
