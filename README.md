# Babel Bites

An application for bite-size news and a text translator for aspiring polyglots.

## Features

- Primary: Filter for news from 30 countries and 22 languages
- Primary: Highlight words (onHighlight?) to activate pop-up buttons (how to implement?) to translate into various languages or write your own notes
- Primary: Translator page
- Secondary: Notes page to post your comments (CRUD)
- Secondary: Homepage displays top headlines and word of the day in key languages

## Wireframe

### Pages

**Homepage**: tops news (fetch API) and a word of the day in different languages

**News Page**:

- search for news of your topic of interest (fetch API again?) filtered by language (defaul) or country
- highlight word or phrases > buttons pop up with options to "Translate" or "Post a note"

**Translation Page**:

- input your own word > select language
- receives highlighted word from News Page (how to receive highlighted word from News Page?) as value in the input bar

**Notes Page:**

- create your own notes
- receives highlighted phrase from News Page, and identifies News Title, and Source
- search bar

## Icebox

- Option to have the entire news article loaded
