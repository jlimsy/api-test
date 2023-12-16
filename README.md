# Babel Bites

An application for bite-size news and a text translator for aspiring polyglots.

## Features

- Primary: Filter for news from 30 countries and 22 languages
- Primary: Click on news title to activate pop-up buttons (how to implement?) to translate into various languages or write your own notes
- Primary: Translator page allows translation of 100+ languages
- Primary: Notes page to post your comments (CRUD)
- Secondary: Homepage displays top headlines and word of the day in key languages
- Secondary: Highlight words to activate pop-up buttons (how to implement?) to translate into various languages or write your own notes

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

## Icebox

- Search bar on Notes Pages to filter notes
- Option to have the entire news article loaded

---

### Project Criteria

Use React framework to build your application with at least:

- [x] 5 components
- [x] 4 props
- [x] 2 useStates
- [x] 2 react router routes
- [ ] 1 lifting state, which is used to implement CRUD on the client side
