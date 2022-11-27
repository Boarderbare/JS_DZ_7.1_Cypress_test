// const bookSecond = {
//   title: "War and Peace",
//   description: "War 1812",
//   author: "Leo Tolstoy",
// };

const bookFirst = {
  title: "Anna Karenina",
  description: "Anna Karenina is a novel by the Russian author Leo Tolstoy",
  author: "Leo Tolstoy",
};

describe("Actions with book", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("test@test.com", "test");
  });

  it("Should add book in library", () => {
    cy.addBook(bookFirst);
    cy.visit("/");
    cy.contains("Books list").click();
    cy.contains(bookFirst.title).click();
    cy.get("h2").contains(bookFirst.title).should("be.visible");
    cy.contains(bookFirst.description).should("be.visible");
    cy.contains(bookFirst.author).should("be.visible");
  });

  it("Should add book in favorites", () => {
    cy.visit("/");
    cy.contains(bookFirst.title).contains("Add to favorite").should("be.visible");
    cy.addInFavorites(bookFirst);
    cy.contains("Favorites").click();
    cy.contains(bookFirst.title).should("be.visible");
  });

  it("Should delete book from favorites", () => {
    cy.visit("/favorites");
    cy.contains(bookFirst.title).should("be.visible");
    cy.contains(bookFirst.title).contains("Delete from favorite").click();
    cy.visit("/favorites");
    cy.contains(bookFirst.title).should("not.exist");
  });
});
