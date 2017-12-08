# Zoo

##### by Joseph Tomlinson
---



## Requirements
Node packet Manager (NPM)

A web browser that supports Javascript and HTML5.

## Installation
Download as zip, or clone to your machine.

open the terminal/command line and cd into the project's directory

install global dependencies if not already installed
```bash
$ npm install -g bower
$ npm install -g gulp
```

download all dependencies by entering the following commands in order:
```bash

$ npm install
$ bower install
$ gulp build
```

## Usage
to view or edit the website, enter:

```

$ gulp serve
```


## Edit guide
* Scripts, written in Typescript, can be found in app/
* styling is in resources/styles/styles.css

## Specs

Description: User will be able to enter all of the animals information to a form
* Input: `Add New Animal button`
* Output: `Form displaying all animal info fields will be opened.`

Description: Submitting an animal will add it to a list of all animals visible on the page.
* Input: `A New Animal is added`
* Output: `Animal Is visible on a list of all animals, with it's information entered in the form visible.`

Description: All animal info can be edited.
* Input: `An Edit animal button is selected`
* Output: `All animal data can be changed.`

Description: Animal "Age" will be displayed by calculating the Animal's birth date subtracted from the current data..
* Input: `Animal was born in 2010 and the current date is 2017`
* Output: `The animal is 7 years old.`

Description: The Animal list can be "filtered" by name
* Input: `User enters "Snow" into the minimum age field`
* Output: `Any animal with a partial match to the name "snow" (case insensitive) is displayed.`

Description: The Animal list can be "filtered" by minimum age
* Input: `User enters "7" into the minimum age field`
* Output: `Only animals older than 7 (born before 2011 if it is 2017) will be displayed.`

Description: The Animal list can be "filtered" by maximum age
* Input: `User enters "7" into the minimum age field`
* Output: `Only animals younger than 7 (born after 2010 if it is 2017) will be displayed.`

Description: The Animal list can be "filtered" by species
* Input: `User enters 'penguin' into filter field`
* Output: `Only animals with the species 'penguin' will be displayed`

Description: The Animal list can be "filtered" by sex
* Input: `User selects "male" into filter field`
* Output: `Only animals that are male will be displayed`

Description: User can select different filter types from a drop down menu
* Input: `User clicks "filter"`
* Output: `All filter types (name, age min, age max, species, gender) are selectable`

Description: User can add more than one filter to the search
* Input: `User clicks "add filter"`
* Output: `Another filter drop down with accompanying text box is displayed`

Description: User can "Reset" the filter
* Input: `User clicks "Reset Filters"`
* Output: `All filters but one are removed and that filter is defaulted to it's deactive state`

## legal
Uses Angular 2, bootstrap and jQuery(?).

all Images belong to their respective owners.
