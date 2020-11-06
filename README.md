# Pizza Parlor
###### Calculates prices using objects and prototypes [11.6.20]
### by Taylor Delph

## Description

Independent project created for Epicodus utilizing custom Objects and Prototypes. Select different sized pizzas and toppings and see the total price below.

## View Online: [Here's my live page](https://taylulz.github.io/pizza-parlor)

## Setup and installation instructions

Software Reqirements
1. A web browser
2. Bash/GitBash
3. Code editor like VS Code to view or edit the code

Open by downloading

1. [Navigate to my GitHub repo](https://github.com/taylulz/pizza-parlor.git)
2. Click the green **Code** button. ![Image of Code button](/img/GHbutton.png)

3. Click 'Download ZIP' option. ![Image of Download ZIP](/img/zip.png)

4. Unzip file when it finishes downloading.
5. Drag unzipped folder into VS Code or other code editor to view contents.
6. If you do not have a code editor, you can double click the index.html instead to open the page in your internet browser.

Open via Bash/GitBash

1. To clone this repository, go to your terminal and enter:

        `$ git clone https://github.com/taylulz/pizza-parlor.git`

2. Navigate to downloaded repository
3. Drag repository folder into VS Code or other code editor to view contents
4. If you do not have a code editor, you can double click the index.html instead to open the page in your internet browser.

## Test Specs
| Test | Input | Output |
|--------|:------:|:-----:|
| **Create Pizza object constructor with size and toppings properties** |||
| Should correctly create a new Pizza object | pizza1 | returns Pizza {size, toppings} | 
| **Cost of pizza prototype** |||
| Should correctly add different prices for sm, med, and lrg | med | 10 |
| Should correctly add number of toppings selected | pizza1.toppings | returns 3 |
| **Add new pizza object into new Order object** |||
| Should correctly create Order object | new Order | Order {pizzas, totalPrice}
| Should correctly add pizza object into Order object | order1.addPizza(pizza1) | returns Pizza {size, toppings} |
| **Build out UI** |||
| Should correctly create a new pizza object on submit button | click "submit" | Pizza {size, toppings} |
| Should add all selected toppings to pizza object | pizza.toppings | expect ["olives", "anchovies", "pickles"] |
| Should add correct dollar amount to sm, med, and lrg pizzas | small selected | expect 5 |
| Should add 1 dollar per selected topping | olives, anchovies, and pickles selected | expect 3 |
| Should correctly add price for size to price for number of toppings | med and olives selected | expect $6 |
| Display final cost to user |||
| Should correctly add the size + amount of toppings | sm and 3 toppings | display 8 |


## Known Bugs

* _No known bugs at this current time_

## Technologies Used

VS Code

GitBash

GitHub

JavaScript

HTML

Bootstrap

Markdown

Mac OS Mojave 10.14.6

## Legal
Copyright (c) 2020 Taylor Delph

This website is licensed under the MIT license.
