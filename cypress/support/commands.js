Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description").should("be.visible");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("addInFavorites", (book) => {
  cy.contains("Books list").click();
  cy.contains(book.title).contains("Add to favorite").click();
});
