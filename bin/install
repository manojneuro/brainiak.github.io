#!/usr/bin/env bash

# Assume MacOS

which -s brew
if [[ $? != 0 ]] ; then
    # Install Homebrew
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    brew update
fi

brew install node

npm install -g gulp
npm install

sudo gem install bundler
bundle install
