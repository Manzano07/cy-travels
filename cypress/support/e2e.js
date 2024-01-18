import './gui_commands'
import './api_commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})