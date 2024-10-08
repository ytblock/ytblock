> **Important: Before using this extension make sure to clear your browser's cache for youtube.com, else it may spawn two players!**

# YouTube AdBlocker

## Overview

This is a dead simple chrome extension that aims to remove ads from YouTube. It works by replacing the standard YouTube player with an embedded player hosted on `youtube-nocookie.com`, which as of writing this appears to stop ads from showing up.

## How It Works

1. **Blocks the Real YouTube Player**: The extension blocks YouTube from loading the original player in your browser.
2. **Replaces with Nocookie Embed**: It substitutes the player with an embedded player instead (`youtube-nocookie.com`).

### Limitations

While this method has proven effective in blocking ads, it may stop working at any time due to changes made by YouTube.

Since the adblocker uses the embedded player, the theater mode button is not available. However, you can still toggle theater mode using the `T` shortcut on your keyboard.

This extension may break YouTube embeds on other websites, unless they too use the `youtube-nocookie.com` player. To fix this you may want to use something like this [youtube-nocookie extension](https://github.com/da2x/youtube-nocookie).

## Installation

1. Clone or download this repository as a zip file (and unzip).
2. Enable developer mode in your Chromium-based browser.
3. Press "Load unpacked" and locate the folder to install.

## License

This project is open-source and available under the [MIT License](LICENSE).
