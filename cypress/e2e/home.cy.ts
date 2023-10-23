import ApiConstants from '@/common/core/constants/backendRoutes.constants';

describe('Home Page - Check Essential Elements', () => {
  it('has job listings sidebar', () => {
    cy.visit('http://localhost:3000');

    cy.get('aside[data-testid="sidebar"]').should('exist');
  });

  it('has job description section', () => {
    cy.visit('http://localhost:3000');

    cy.get('div[data-testid="jobdescription"]').should('exist');
  });
});

describe('Job Listings Sidebar', () => {
  it('should display loading state while fetching data', () => {
    cy.visit('http://localhost:3000');

    cy.intercept('GET', ApiConstants.JOBS, {
      delay: 1500, // Simulate a delay in fetching data (1 second in this example)
    }).as('fetchData');

    cy.get('[data-testid="loading"]').should('exist');

    // Wait for the data fetching to complete
    cy.wait('@fetchData');

    cy.get('[data-testid="loading"]').should('not.exist');
  });

  it('should display a job listing when fetched', () => {
    cy.visit('http://localhost:3000');

    cy.wait(1000);

    cy.get('div[data-testid="joblisting"]').should('exist');
  });
});

describe('Job Listing', () => {
  it('should be selected when clicked', () => {
    cy.visit('http://localhost:3000');

    cy.wait(2500);

    cy.get('div[data-testid="joblisting"]').first().click();

    // Perform assertions after the click
    cy.wait(100);

    cy.get('div[data-testid="joblisting"] button')
      .first()
      .should('have.css', 'background-color', 'rgb(168, 218, 220)');
  });

  it('should get job description when clicked', () => {
    cy.visit('http://localhost:3000');

    cy.wait(2500);

    cy.get('div[data-testid="joblisting"]').first().click();

    // Perform assertions after the click
    cy.wait(2500);

    cy.get('h2')
      .contains('Select a job listing to view details')
      .should('not.exist');
  });
});

describe('Job Description Section', () => {
  it('should display initial text when no job is selected', () => {
    cy.visit('http://localhost:3000');

    cy.get('h2').contains('Select a job listing to view details');
  });

  it('should display correct selected job description', () => {
    cy.visit('http://localhost:3000');

    cy.wait(2500);

    cy.get('div[data-testid="joblisting"]').first().click();

    cy.wait(2500);

    cy.get('div[data-testid="jobdescription"]')
      .find('h2')
      .invoke('text')
      .as('firstH2Text');

    cy.wait(2500);

    cy.get('div[data-testid="joblisting"]')
      .first()
      .find('h2')
      .invoke('text')
      .as('secondH2Text');

    cy.wait(200);

    // Resolve the aliases using .then() and compare their values
    cy.get('@firstH2Text').then((firstH2Text) => {
      cy.get('@secondH2Text').then((secondH2Text) => {
        expect(firstH2Text).to.equal(secondH2Text);
      });
    });
  });
});
