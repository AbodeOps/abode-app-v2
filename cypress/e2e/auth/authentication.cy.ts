// https://docs.cypress.io/api/introduction/api.html

import selectors from '../../selectors';

const companyUsername = Cypress.env('signInTestCompanyUsername');
const companyPassword = Cypress.env('signInTestCompanyPassword');
const workerUsername = Cypress.env('signInTestWorkerUsername');
const workerPassword = Cypress.env('signInTestWorkerPassword');

describe('My First Test', () => {
	it('visits the app root url', () => {
		cy.visit('/');
		cy.location('pathname').should('eq', '/auth/signin');
		cy.contains('h4', 'Sign In');
	});

	it('should show error on wrong username or password', () => {
		cy.get(selectors.auth.form.email).type(companyUsername);
		cy.get(selectors.auth.form.password).type('wrong');

		cy.get(selectors.auth.form.submit).click();

		cy.contains('Incorrect email or password').should('have.length', 1);
	});

	it('should login and navigate to jobs for worker account', () => {
		cy.get(selectors.auth.form.email).click().clear().type(workerUsername);
		cy.get(selectors.auth.form.password).click().clear().type(workerPassword);

		cy.get(selectors.auth.form.submit).click();

		cy.url().should('include', '/worker');
	});

	// it('should login and navigate to jobs for company account', () => {
	// 	cy.get(selectors.auth.form.email).type(companyUsername);
	// 	cy.get(selectors.auth.form.password).type(companyPassword);

	// 	cy.get('button').contains('Sign In').click();

	// 	cy.url().should('include', '/company/jobs');
	// });
});
