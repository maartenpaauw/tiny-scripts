# Pendulum Clock

> Simple audio file generator for a pendulum clock

Recently I bought a Sonos One. When I searched the internet to find out how I could play an audio file on it via Home Assistant I came across this thread on the community forum: https://community.home-assistant.io/t/playing-a-mp3-file-on-sonos-with-automation-throwing-an-error/37513/2.

TheFuzz4 was writing an automation which will play a different audio file every hour based on the current time. I kinda like it! So I dicided to write an automation like this aswell.

After finding a nice "chime" sound it was time to repeat the chime every hour. So for example, if it's 2 o'clock it will repeat the chime 2 times. I found a online tool to merge audio files. So for the example above I had to upload the file twice. After 20 minutes I generated 12 audio files for each hour.

When I got home I let my girlfriend hear the sounds. She didn't quite like the chime. So I had to find another audio file. At this time I didn't want to merge all the files again. So this project came alive! 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The code depends on the Python library [Pydub](http://pydub.com/). This library needs ffmpeg installed on the machine. You can install it via brew with the following command.

```shell
# ffmpeg
brew install ffmpeg --with-libvorbis --with-sdl2 --with-theora;
```

### Installing

To install this script simply clone the entire repository en change the current working directory to 'pendulum-clock'.

```shell
git clone git@github.com:maartenpaauw/tiny-scripts.git;
cd tiny-scripts/pendulum-clock;
```

Now it's time to install the Python packages through Pip.

```shell
pip install -r requirements.txt
```
Now you are all set!

## Usage

```shell
python run.py --help


usage: generate audio files for a pendulum clock [-h] [--file FILE]
                                                 [--directory DIRECTORY]
                                                 [--leading-zeros]
                                                 [--twentyfour-hours]
                                                 [--template TEMPLATE]

optional arguments:
  -h, --help            show this help message and exit
  --file FILE           the audio file to use
  --directory DIRECTORY
                        the directory where to store the audio files
  --leading-zeros       prefix hour 1 to 9 with a zero (01, 02, 03 ...)
  --twentyfour-hours    generate files for the hours 13 to 24
  --template TEMPLATE   make your own file name template, {hour} will be
                        converted to a number.
```

[![asciicast](https://asciinema.org/a/FXRuUbcL3HJMu8IiDk8ugSIYp.png)](https://asciinema.org/a/FXRuUbcL3HJMu8IiDk8ugSIYp)

## Built With

- [Pydub](https://github.com/jiaaro/pydub#installation) - Generate the audio files.

## Authors

- **Maarten Paauw** - *Initial work* - [maartenpaauw](https://github.com/maartenpaauw)

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details

## Acknowledgments

- [TheFuzz4](https://community.home-assistant.io/u/TheFuzz4) - His idea to build a "Grandfathers Clock".
