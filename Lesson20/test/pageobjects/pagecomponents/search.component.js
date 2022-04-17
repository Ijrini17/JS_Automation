class SearchComponent {

    get searchButton() {

        return $(".DocSearch-Button-Placeholder")

    }

    get searchField() {

        return $("#docsearch-input")
    }

    get searchResults() {

        return $$(".DocSearch-Hit-title")
    }

}

module.exports = new SearchComponent();